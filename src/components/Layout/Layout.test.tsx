import React from "react";
import { render, screen } from "test-utils";

import { Layout } from "./Layout";

// TODO: add proper tests for Layout component
test("Layout renders properly", () => {
    render(<Layout />);
    expect(screen.getByText("Layout")).toBeInTheDocument();
});
