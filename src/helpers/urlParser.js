export const urlParser = (queryParams) => {
    let _path = '';
    if (queryParams.search || queryParams.count || queryParams.page) {
        for (let prop in queryParams) {
            let i = 0;
            if (queryParams[prop]) {
                if(i > 0 && i <= Object.keys(queryParams).length) {
                    _path = _path + '&';
                }
                i++;
                _path = _path + `${prop}=${queryParams[prop]}&`;
            }
        }
    }

    console.log('PATH', _path);
    return _path;
}