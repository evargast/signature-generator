import { darkTheme, lightTheme, Provider } from "@adobe/react-spectrum";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { App } from "components/App";
import { Luigi } from "components/Luigi";
import { Stefano } from "components/Stefano";
import { AuthenticationProvider } from "providers/AuthenticationProvider";
import { SignatureProvider, useSignatureContext } from "providers/SignatureProvider";
import React, { FC } from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Layout } from "./Layout";

const AppRouter: FC = () => {
    const { isDarkMode } = useSignatureContext();

    return (
        <Provider theme={isDarkMode ? darkTheme : lightTheme} colorScheme="light" height="100%">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<App />} />
                    <Route path="luigi" element={<Luigi />} />
                    <Route path="stefano" element={<Stefano />} />
                </Route>

                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Provider>
    );
};

const AppWithProviders: FC = () => {
    return (
        <GoogleOAuthProvider clientId="282687558506-tpj65jsu2o26lepumqfkie6drm1p7vni.apps.googleusercontent.com">
            <AuthenticationProvider>
                <SignatureProvider>
                    <BrowserRouter>
                        <AppRouter />
                    </BrowserRouter>
                </SignatureProvider>
            </AuthenticationProvider>
        </GoogleOAuthProvider>
    );
};

ReactDOM.render(<AppWithProviders />, document.getElementById("root"));
