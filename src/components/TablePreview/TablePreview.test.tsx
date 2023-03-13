import React from "react";
import { render, screen } from "test-utils";

import TablePreview from "./TablePreview";

// TODO: add proper tests for TablePreview component
test("TablePreview renders properly", () => {
    render(<TablePreview />);
    expect(screen.getByText("TablePreview")).toBeInTheDocument();
});
