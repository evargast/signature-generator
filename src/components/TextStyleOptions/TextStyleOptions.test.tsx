import React from "react";
import { render, screen } from "test-utils";

import { TextStyleOptions } from "./TextStyleOptions";

// TODO: add proper tests for TextStyleOptions component
test("TextStyleOptions renders properly", () => {
    render(<TextStyleOptions />);
    expect(screen.getByText("TextStyleOptions")).toBeInTheDocument();
});
