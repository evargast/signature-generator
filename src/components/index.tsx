import { SignatureProvider } from "providers/SignatureProvider";
import React from "react";
import * as ReactDOM from "react-dom";

import App from "./App/App";

ReactDOM.render(
    <SignatureProvider>
        <App />
    </SignatureProvider>,
    document.getElementById("root"),
);
