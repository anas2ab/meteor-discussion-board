import { Meteor } from 'meteor/meteor';
import React, { useState, Fragment } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { DiscussionsCollection } from '/imports/db/DiscussionsCollection';
import { Discussion } from './Discussion';
import { DiscussionForm } from './DiscussionForm';
import { LoginForm } from './LoginForm';

export const App = () => {
  const user = useTracker(() => Meteor.user());
  const logout = () => Meteor.logout();
  const { discussions, isLoading } = useTracker(() => {
    const noDataAvailable = { discussions: [] };
    if (!Meteor.user()) {
      return noDataAvailable;
    }
    const handler = Meteor.subscribe('discussions');

    if (!handler.ready()) {
      return { ...noDataAvailable, isLoading: true };
    }

    const discussions = DiscussionsCollection.find(
      {},
      {
        sort: { createdAt: -1 },
      }
    ).fetch();
    

    return { discussions };
  });
  return ( 
    <div className="app">
    {user ? (
      <Fragment>
        <div className="logout" onClick={logout}>
          logout 🚪
        </div>
        <header>
          <div className="app-bar">
            <div className="app-header">
              <h1>📝️ Discussion Board</h1>
            </div>
          </div>
        </header>
      
        <div className="main">
          <DiscussionForm user={user}/>
          {isLoading && <div className="loading">loading...</div>}
          <ul className="discussions">
              { discussions.map(discussion => 
              <Discussion 
              key={ discussion._id } 
              discussion={ discussion }
              />)}
            </ul>  
        </div>
      </Fragment>
      ) : (
        <LoginForm />
      )}
    </div> 
  );
};
