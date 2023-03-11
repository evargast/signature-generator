import React from "react";
import { render, screen } from "test-utils";

import ImgInput from "./ImgInput";

// TODO: add proper tests for ImgInput component
test("ImgInput renders properly", () => {
    render(<ImgInput />);
    expect(screen.getByText("ImgInput")).toBeInTheDocument();
});
