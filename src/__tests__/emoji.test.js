import React from "react";
import { render } from "react-testing-library";

import Emoji from "../components/Emoji";
import { FailureEmojis } from "../constants";

const angry = { symbol: "🤬", label: "swearing" };

describe("Emoji", () => {
  const { container, getByText } = render(<Emoji {...angry} />);

  it("is defined", () => {
    expect(container).toBeDefined();
  });

  it("renders the emoji", () => {
    expect(getByText("🤬")).toBeDefined();
  });
});
