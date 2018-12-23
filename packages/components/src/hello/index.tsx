import * as React from "react";

export interface IHelloProps {
  name: string;
}

const Hello = ({ name }: IHelloProps) => <div>Hello {name}</div>;

export default Hello;
