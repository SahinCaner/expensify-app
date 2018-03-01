import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

// we export component for testing
export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1>Expenz Login</h1>
      <p>Get your expenses under control</p>
      <button 
        onClick={startLogin}
        className="button"
      >
        Login with Google
      </button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
