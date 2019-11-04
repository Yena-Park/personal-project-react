import React, { Component } from 'react';
import { connect } from "react-redux";
import { getUserRepositoriesAction, getUserEventsAction } from '../store/user.actions';
import Repository from '../components/Repository';
import PullRequest from '../components/PullRequest';

class UserDetail extends Component {
  componentDidMount() {
    const { user, getUserRepositories, getUserEvents } = this.props;
    if (user) {
      getUserRepositories(user.login);
      getUserEvents(user.login);
    }
  }

  render() {
    const { user } = this.props;
    const { repositories, events } = this.props;
    return (
      <div>
        <h1>{`${user.login}`}</h1>
        {repositories.length > 0 &&
          <>
            <h2>Recent Forks</h2>
            {repositories.map(repo => (
              <Repository
                key={repo.id}
                repository={repo}
              />
            ))}
          </>
        }
        {events.length > 0 &&
          <>
            <h2>Recent Pull Requests</h2>
            {events.map(event => (
              <PullRequest key={event.id} event={event}/>
            ))}
          </>
        }
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  repositories: state.repositories,
  events: state.events
});

const mapDispatchToProps = dispatch => ({
  getUserRepositories: (username) => dispatch(getUserRepositoriesAction(username)),
  getUserEvents: (username) => dispatch(getUserEventsAction(username))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
