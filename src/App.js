import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import { LoginForm } from 'Login/Login';
import { AdminUsersForm } from 'Users/Users';
import { AdminGroupsForm } from 'Groups/Groups';
import { AdminAdministratorsForm } from 'Groups/Administrators';
import { AdminUsersInviteForm } from 'Users/InviteUsers';
import { InviteUsersProcodeForm } from 'Users/InviteUsersProcode';
import { OrganizationProfileForm } from 'Organization/Profile';
import { OrganizationAddressForm } from 'Organization/Address';
import { Register } from 'Register/Register';
import { ForgotPasswordScreenForm } from 'Login/ForgotPassword';
import { ResetPasswordForm } from 'Login/ResetPassword';
import { SetPasswordForm } from 'Login/SetPassword';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={props => <LoginForm {...props} />} />
          <Route
            exact
            path='/admin/users'
            component={props => <AdminUsersForm {...props} />}
          />
          <Route
            exact
            path='/admin/users/invite'
            component={props => <AdminUsersInviteForm {...props} />}
          />
          <Route
            exact
            path='/admin/users/invite/procode'
            component={props => <InviteUsersProcodeForm {...props} />}
          />
          <Route
            exact
            path='/admin/groups'
            component={props => <AdminGroupsForm {...props} />}
          />
          <Route
            exact
            path='/admin/administrator/groups'
            component={props => <AdminAdministratorsForm {...props} />}
          />
          <Route exact path='/' component={props => <LoginForm {...props} />} />
          <Route
            exact
            path='/organization/profile'
            component={props => <OrganizationProfileForm {...props} />}
          />
          <Route
            exact
            path='/organization/address'
            component={props => <OrganizationAddressForm {...props} />}
          />
          <Route
            exact
            path='/forgot-password'
            component={props => <ForgotPasswordScreenForm {...props} />}
          />
          <Route
            exact
            path='/reset-password'
            component={props => <ResetPasswordForm {...props} />}
          />
          <Route
            exact
            path='/set-password'
            component={props => <SetPasswordForm {...props} />}
          />
          <Route
            exact
            path='/register'
            component={props => <Register {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
