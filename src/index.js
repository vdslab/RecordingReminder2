import React from "react";
//import { render } from "@testing-library/react";
import { render } from "react-dom";
import App from "./App";
//import { useAuth0 } from "@auth0/auth0-react";

//render(<App />, document.getElementById("root"));

import { Auth0Provider } from "@auth0/auth0-react";

render(
  <Auth0Provider
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    audience={process.env.REACT_APP_AUTH0_AUDIENCE}
    domain="auth.vdslab.jp"
    redirectUri={window.location.origin}
    useRefreshTokens
    cacheLocation="localstorage"
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
