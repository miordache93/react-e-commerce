import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import { matchPath } from 'react-router';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import proxy from 'express-http-proxy';

const app = express();
app.use('/api', proxy('https://wekode-test.netlify.app'));

app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = createStore(req);

  Routes.forEach((r)=>{
    r.queryParams = req.query;
  });

  const promises = matchRoutes(Routes, req.path)
    .filter(({ route }) => matchPath(req.url, route))
    .map(({ route }) => {
      console.log(req.query);
      route.queryParams = req.query;
      return route.loadData ? route.loadData(store) : null;
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });


  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }

    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});