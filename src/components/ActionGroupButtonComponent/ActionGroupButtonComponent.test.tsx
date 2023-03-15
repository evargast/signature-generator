import React from "react";
import { render, screen } from "test-utils";

import { ActionGroupButtonComponent } from "./ActionGroupButtonComponent";

// TODO: add proper tests for ActionGroupButtonComponent component
test("ActionGroupButtonComponent renders properly", () => {
    render(<ActionGroupButtonComponent />);
    expect(screen.getByText("ActionGroupButtonComponent")).toBeInTheDocument();
});
