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
                <Div id="address-div" className="Div Address-div" dataCy="address-div">
                    <LabelContainer
                        id="address-label-container"
                        className="Address-label-container"
                        dataCy="address-label-container"
                        htmlFor="address-input">
                        Address
                    </LabelContainer>
                    <Input
                        id="address-input"
                        className="Address-input"
                        type="text"
                        dataCy="address-input"
                    />
                </Div>
                <Div id="address2-div" className="Div Address2-div" dataCy="address2-div">
                    <LabelContainer
                        id="address2-label-container"
                        className="Address2-label-container"
                        dataCy="address2-label-container"
                        htmlFor="address2-input">
                        Address 2
                    </LabelContainer>
                    <Input
                        id="address2-input"
                        className="Address2-input"
                        type="text"
                        dataCy="address2-input"
                    />
                </Div>
                <Div id="city-div" className="Div City-div" dataCy="city-div">
                    <LabelContainer
                        id="city-label-container"
                        className="city-label-container"
                        dataCy="city-label-container"
                        htmlFor="city-input">
                        City
                    </LabelContainer>
                    <Input id="city-input" className="city-input" type="text" dataCy="city-input" />
                </Div>
                <Div id="state-div" className="Div state-div" dataCy="state-div">
                    <LabelContainer
                        id="state-label-container"
                        className="state-label-container"
                        dataCy="state-label-container"
                        htmlFor="state-input">
                        State
                    </LabelContainer>
                    <Input
                        id="state-input"
                        className="state-input"
                        type="text"
                        dataCy="state-input"
                    />
                </Div>
                <Div id="zip-div" className="Div Zip-div" dataCy="zip-div">
                    <LabelContainer
                        id="zip-label-container"
                        className="zip-label-container"
                        dataCy="zip-label-container"
                        htmlFor="zip-input">
                        Zip Code
                    </LabelContainer>
                    <Input id="zip-input" className="zip-input" type="text" dataCy="zip-input" />
                </Div>
                <Div id="phone-div" className="Div Phone-div" dataCy="phone-div">
                    <LabelContainer
                        id="phone-label-container"
                        className="phone-label-container"
                        dataCy="phone-label-container"
                        htmlFor="phone-input">
                        Phone Number
                    </LabelContainer>
                    <Input
                        id="phone-input"
                        className="phone-input"
                        type="text"
                        dataCy="phone-input"
                    />
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
                        id="reset-button"
                        name="reset-button"
                        className="Reset-button"
                        value="reset"
                        buttonType="reset"
                        dataCy="reset-button">
                        Clear
                    </Button>
                    <Button
                        id="submit-button"
                        name="submit-button"
                        className="Submit-button"
                        value="submit"
                        buttonType="submit"
                        dataCy="submit-button">
                        Submit
                    </Button>
                </Div>
            </Fieldset>
        </Form>
    </AppContainer>
);

const AppContainer = styled.section`
    font-family: Helvetica, sans-serif;
    & .Button-container {
        flex-flow: row nowrap;
        justify-content: space-between;

        & .Submit-button {
            width: 12rem;
            transition: 200ms ease-in-out;
            &:hover {
                background-color: Brown;
                border: 2px solid black;
            }
        }
        & .Reset-button {
            transition: 200ms ease-in-out;
            width: 5rem;
            background-color: transparent;
            color: darkGreen;
            border: 2px solid darkGreen;
            &:hover {
                background-color: Brown;
                border: 2px solid black;
                color: #ffffff;
            }
        }
    }
`;

export default App;
