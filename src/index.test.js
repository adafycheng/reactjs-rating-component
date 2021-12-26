import { RatingComponent } from ".";
import React from "react";

describe("RatingComponent", () => {
  it("is truthy", () => {
    const component = (
      <RatingComponent
        heading="JavaScript"
        subheading="10 years"
        rate="4"
        headingColor="purple"
        subheadingColor="orange"
        starColor="green"
      />
    );
    expect(component).toBeTruthy();
  });
});
