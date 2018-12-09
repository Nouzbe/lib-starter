import React from "react";

import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { text } from "@storybook/addon-knobs";

import { Hello } from "bam-components";
import ReadMe from "../button/README.md";

storiesOf("Button", module)
  .add(
    "with text",
    withReadme(ReadMe, () => <Hello name={text("name", "Bim")} />)
  )
  .add("with some emoji", () => <Hello name="😀 😎 👍 💯" />);
