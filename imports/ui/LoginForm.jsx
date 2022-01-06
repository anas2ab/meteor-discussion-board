import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import { Accounts } from 'meteor/accounts-base';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = e => {
    e.preventDefault();

    if (!Meteor.call('confirm', email)) {
        Accounts.createUser({
            email: email,
            password: password
        });
    }
    Meteor.loginWithPassword(email, password);
  };

  return (
    <form onSubmit={submit} className="login-form">
    <div>
        <label htmlFor="email">Your Email:</label>

        <input
        type="email"
        placeholder="Email"
        name="email"
        required
        onChange={e => setEmail(e.target.value)}
        />
    </div>

    <div>
        <label htmlFor="password">Password:</label>
        
        <input
        type="password"
        placeholder="Password"
        name="password"
        required
        onChange={e => setPassword(e.target.value)}
        />
    </div>

    <div>
        <button type="submit">Log In</button>
    </div>
      
    </form>
  );
};