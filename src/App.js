import React, { Component } from 'react';
import { connect } from "react-redux";

import './App.css';
import UserDetail from './containers/UserDetail';
import { searchUserAction } from './store/user.actions';
import SearchUser from './components/SearchUser';

class App extends Component {
  render() {
    const { searchUser, user, userError } = this.props;
     
    return (
      <div>
        {user 
          ? <UserDetail user={user}/>
          : <SearchUser
              searchUser={searchUser}
            />
        }
        {userError && <div>Error Occured, please try again later.</div>}
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  user: state.user,
  userError: state.userError
});

const mapDispatchToProps = dispatch => ({
  searchUser: (username) => dispatch(searchUserAction(username))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
