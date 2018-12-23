import * as React from "react";

export interface HelloProps {
  name: string;
}

const Hello = ({ name }: HelloProps) => <div>Hello {name}</div>;

export default Hello;
