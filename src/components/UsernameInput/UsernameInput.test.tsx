import React from "react";
import { render, screen } from "test-utils";

import { UsernameInput } from "./UsernameInput";

// TODO: add proper tests for UsernameInput component
test("UsernameInput renders properly", () => {
    render(<UsernameInput />);
    expect(screen.getByText("UsernameInput")).toBeInTheDocument();
});
