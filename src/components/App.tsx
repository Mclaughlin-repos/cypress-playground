import * as React from 'react';
import LabelContainer from './LabelContainer/index';
export interface HelloWorldProps {
    userName: string;
    lang: string;
}
const App = (props: HelloWorldProps) => (
    <section>
        <h1>
            Hi {props.userName}! Welcome to the cypress playground now using {props.lang}!
        </h1>
        <h2>This is where you will learn how to use AXE-CORE and PA11Y with components</h2>
        <LabelContainer
            id="label-container"
            className="Label-container"
            dataCy="label-container"
            htmlFor=""
        >
            This is a label
        </LabelContainer>
    </section>
);

export default App;
