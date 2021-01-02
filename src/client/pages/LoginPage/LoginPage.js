import React from 'react';
import { fetchCurrentUser } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom';


const LoginPage = (props) => {
    const performAuth = () => {
        props.fetchCurrentUser('mihai');
    }

    const loginContent = props.auth ? (
        <Redirect to='/' />
    ) : (
            <button onClick={() => performAuth()}>Please login</button>
        );

    return (
        <div>
            {loginContent}
        </div>
    );
}


function mapStateToProps(state) {
    return {
        auth: state.auth
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchCurrentUser
    }, dispatch)
}

export default {
    component: connect(mapStateToProps, mapDispatchToProps)(LoginPage)
}