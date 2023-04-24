import { GoogleOAuthProvider } from "@react-oauth/google";
import { SignatureProvider } from "providers/SignatureProvider";
import React from "react";
import * as ReactDOM from "react-dom";

import App from "./App/App";

ReactDOM.render(
    <GoogleOAuthProvider clientId="282687558506-tpj65jsu2o26lepumqfkie6drm1p7vni.apps.googleusercontent.com">
        <SignatureProvider>
            <App />
        </SignatureProvider>
    </GoogleOAuthProvider>,
    document.getElementById("root"),
);
