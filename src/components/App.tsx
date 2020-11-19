import * as React from "react";
export interface HelloWorldProps {
  userName: string;
  lang: string;
}
export const App = (props: HelloWorldProps) => (
  <section>
    <h1>
      Hi {props.userName}! Welcome to the cypress playground now using{" "}
      {props.lang}!
    </h1>
    <h2>This is where you will learn how to use AXE-CORE and PA11Y with components</h2>
  </section>
);
