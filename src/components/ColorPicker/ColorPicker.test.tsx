import React from "react";
import { render, screen } from "test-utils";

import { ColorPicker } from "./ColorPicker";

// TODO: add proper tests for ColorPicker component
test("ColorPicker renders properly", () => {
    render(<ColorPicker />);
    expect(screen.getByText("ColorPicker")).toBeInTheDocument();
});
