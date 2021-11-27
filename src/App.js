import React, { Component } from "react";

import Amplify from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import awsExports from "./aws-exports";
import RouterPage from "./pages/RouterPage";

import { AmplifySignUp } from "aws-amplify";
import { AmplifySignIn } from "aws-amplify";
Amplify.configure(awsExports);

class Header extends Component {
  render() {
    return (
      <div className="App">
        <RouterPage />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <AmplifyAuthenticator>
        <div className="row">
          <div className="col m-3">
            <Header />
          </div>
        </div>
      </AmplifyAuthenticator>
    );
  }
}

<AmplifyAuthenticator usernameAlias="email">
  <AmplifySignUp
    slot="sign-up"
    usernameAlias="email"
    headerText="My Custom Sign Up Text!"
    formFields={[
      {
        type: "email",
        label: "Custom Email Label",
        placeholder: "Custom email placeholder",
        inputProps: { required: true, autocomplete: "username" },
      },
      {
        type: "password",
        label: "Custom Password Label",
        placeholder: "Custom password placeholder",
        inputProps: { required: true, autocomplete: "new-password" },
      },
    ]}
  />
  <AmplifySignIn
    slot="sign-in"
    usernameAlias="email"
    headerText="My Custom Sign In Text"
  />
</AmplifyAuthenticator>;

export default App;
