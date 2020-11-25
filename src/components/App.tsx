import * as React from 'react';
import styled from 'styled-components';
import LabelContainer from './containers/Label/index';
import Input from './foundations/Input/index';
import Form from './containers/Form/index';
import Fieldset from './containers/Fieldset/index';
import Legend from './foundations/Legend/index';
import Div from './containers/Div/index';
import Button from './foundations/Button/index';
export interface HelloWorldProps {
    userName: string;
    lang: string;
}
const App = (props: HelloWorldProps) => (
    <AppContainer>
        <h1>
            Hi {props.userName}! Welcome to the cypress playground now using {props.lang}!
        </h1>
        <h2>This is where you will learn how to use AXE-CORE and PA11Y with components</h2>

        <Form action="" method="post" id="form" className="Form" dataCy="form">
            <Fieldset
                id="fieldset-container"
                className="Fieldset-container"
                dataCy="fieldset-container">
                <Legend id="legend" className="Legend" dataCy="legend">
                    The Form
                </Legend>
                <Div id="name-div" className="Div Name-div" dataCy="name-div">
                    <LabelContainer
                        id="name-label-container"
                        className="Name-label-container"
                        dataCy="name-label-container"
                        htmlFor="name-input">
                        Name
                    </LabelContainer>
                    <Input id="name-input" className="Name-input" type="text" dataCy="name-input" />
                </Div>
                <Div id="email-div" className="Div" dataCy="email-div">
                    <LabelContainer
                        id="email-label-container"
                        className="Email-label-container"
                        dataCy="email-label-container"
                        htmlFor="email-input">
                        Email
                    </LabelContainer>
                    <Input
                        id="email-input"
                        className="Email-input"
                        type="email"
                        dataCy="email-input"
                    />
                </Div>
                <Div id="button-container" className="Div Button-container" dataCy="button-div">
                    <Button
                        id="submit-button"
                        name="submit-button"
                        className="Submit-button"
                        value="submit"
                        buttonType="submit"
                        dataCy="submit-button">
                        Submit
                    </Button>
                    <Button
                        id="reset-button"
                        name="reset-button"
                        className="Reset-button"
                        value="reset"
                        buttonType="reset"
                        dataCy="reset-button">
                        Clear
                    </Button>
                </Div>
            </Fieldset>
        </Form>
    </AppContainer>
);

const AppContainer = styled.section`
    font-family: Helvetica, sans-serif;
`;

export default App;
