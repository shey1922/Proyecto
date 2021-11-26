import React, { Component } from "react";

import Amplify from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import awsExports from "./aws-exports";
import RouterPage from "./pages/RouterPage";

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

export default App;
