import React from "react";

import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { text } from "@storybook/addon-knobs";
import Button from "../button";
import ReadMe from "../button/README.md";

storiesOf("Button", module)
  .add(
    "with text",
    withReadme(ReadMe, () => <Button name={text("name", "Bam")} />)
  )
  .add("with some emoji", () => <Button name="😀 😎 👍 💯" />);
