import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthenticationProvider } from "providers/AuthenticationProvider";
import { SignatureProvider } from "providers/SignatureProvider";
import React from "react";
import * as ReactDOM from "react-dom";

import App from "./App/App";

const AppWithProviders = () => {
    return (
        <GoogleOAuthProvider clientId="282687558506-tpj65jsu2o26lepumqfkie6drm1p7vni.apps.googleusercontent.com">
            <AuthenticationProvider>
                <SignatureProvider>
                    <App />
                </SignatureProvider>
            </AuthenticationProvider>
        </GoogleOAuthProvider>
    );
};

ReactDOM.render(<AppWithProviders />, document.getElementById("root"));
