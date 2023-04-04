import React from "react";
import { render, screen } from "test-utils";

import { Header } from "./Header";

// TODO: add proper tests for Header component
test("Header renders properly", () => {
    render(<Header />);
    expect(screen.getByText("Header")).toBeInTheDocument();
});
