import React from "react";

import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { text } from "@storybook/addon-knobs";

import { Hello } from "components";
import ReadMe from "./README.md";

storiesOf("Hello", module)
  .add(
    "with text",
    withReadme(ReadMe, () => <Hello name={text("name", "Bim")} />)
  )
  .add("with some emoji", () => <Hello name="😀 😎 👍 💯" />);
