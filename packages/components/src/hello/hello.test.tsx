import * as React from "react";
import { shallow } from "enzyme";

import Hello from "./";

describe("Hello", () => {
  it("should greet new developers", () => {
    const hello = shallow(<Hello name="Bam" />);
    expect(hello.text()).toBe("Hello Bam");
  });
});
