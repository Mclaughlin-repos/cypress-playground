import * as React from 'react';
import styled from 'styled-components';
import LabelContainer from './containers/Label/index';
import Input from './foundations/Input/index';
import Form from './containers/Form/index';
import Fieldset from './containers/Fieldset/index';
import Legend from './foundations/Legend/index';
import Div from './containers/Div/index';
import Section from './containers/Section/index';
import Header from './containers/Header/index';
import Button from './foundations/Button/index';
import H1 from './foundations/H1/index';
import H2 from './foundations/H2/index';
import H3 from './foundations/H3/index';
import H4 from './foundations/H4/index';
import H5 from './foundations/H5/index';
import H6 from './foundations/H6/index';
export interface HelloWorldProps {
    userName: string;
    lang: string;
}
const App = (props: HelloWorldProps) => (
    <AppContainer>
        <Header
            id="app-header-container"
            className="App-header-container"
            dataCy="app-header-container">
            <H1 id="app-heading-1" className="App-heading-1" dataCy="app-heading-1">
                Hi {props.userName}! Welcome to the Cypress Playground now using {props.lang}!
            </H1>
        </Header>
        <H2 id="app-heading-2" className="App-heading-2" dataCy="app-heading-2">
            This is where you will learn how to use Cypress, AXE-CORE and PA11Y to learn how to work
            with components and pages.
        </H2>

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
        <Section
            id="heading-order-section"
            className="Heading-order-section"
            dataCy="heading-order-section">
            <H1 id="heading-1" className="Heading-1" dataCy="heading-1">
                Heading Order Section H1
            </H1>
            <H2 id="heading-2" className="Heading-2" dataCy="heading-2">
                Heading Order H2
            </H2>
            <H3 id="heading-3" className="Heading-3" dataCy="heading-3">
                Heading Order H3
            </H3>
            <H4 id="heading-4" className="Heading-4" dataCy="heading-4">
                Heading Order H4
            </H4>
            <H5 id="heading-5" className="Heading-5" dataCy="heading-5">
                Heading Order H5
            </H5>
            <H6 id="heading-6" className="Heading-6" dataCy="heading-6">
                Heading Order H6
            </H6>
        </Section>
        <Section
            id="color-contrast-section"
            className="Color-contrast-section"
            dataCy="color-contrast-section">
            <Div
                id="h1-color-contrast-container"
                className="Div Color-contrast-container H1-contrast"
                dataCy="h1-color-contrast-div">
                <H1 id="heading-1" className="Heading-1" dataCy="heading-1">
                    Color Contrast H1
                </H1>
            </Div>
            <Div
                id="h2-color-contrast-container"
                className="Div Color-contrast-container H2-contrast"
                dataCy="h2-color-contrast-div">
                <H2 id="heading-2" className="Heading-2" dataCy="heading-2">
                    Color Contrast H2
                </H2>
            </Div>
            <Div
                id="h3-color-contrast-container"
                className="Div Color-contrast-container H3-contrast"
                dataCy="h3-color-contrast-div">
                <H3 id="heading-3" className="Heading-3" dataCy="heading-3">
                    Color Contrast H3
                </H3>
            </Div>
            <Div
                id="h4-color-contrast-container"
                className="Div Color-contrast-container H4-contrast"
                dataCy="h4-color-contrast-div">
                <H4 id="heading-4" className="Heading-4" dataCy="heading-4">
                    Color Contrast H4
                </H4>
            </Div>
            <Div
                id="h5-color-contrast-container"
                className="Div Color-contrast-container H5-contrast"
                dataCy="h5-color-contrast-div">
                <H5 id="heading-5" className="Heading-5" dataCy="heading-5">
                    Color Contrast H5
                </H5>
            </Div>
            <Div
                id="h6-color-contrast-container"
                className="Div Color-contrast-container H6-contrast"
                dataCy="h6-color-contrast-div">
                <H6 id="heading-6" className="Heading-6" dataCy="heading-6">
                    Color Contrast H6
                </H6>
            </Div>
        </Section>
        <Section
            id="color-contrast-font-size-section"
            className="Color-contrast-font-size-section"
            dataCy="color-contrast-font-size-section">
            <Div
                id="h1-color-contrast-container"
                className="Div Color-contrast-container H1-contrast"
                dataCy="h1-color-contrast-div">
                <H1 id="heading-1" className="Heading-1" dataCy="heading-1">
                    Color Contrast with font size H1
                </H1>
            </Div>
            <Div
                id="h2-color-contrast-container"
                className="Div Color-contrast-container H2-contrast"
                dataCy="h2-color-contrast-div">
                <H2 id="heading-2" className="Heading-2" dataCy="heading-2">
                    Color Contrast with font size H2
                </H2>
            </Div>
            <Div
                id="h3-color-contrast-container"
                className="Div Color-contrast-container H3-contrast"
                dataCy="h3-color-contrast-div">
                <H3 id="heading-3" className="Heading-3" dataCy="heading-3">
                    Color Contrast with font size H3
                </H3>
            </Div>
            <Div
                id="h4-color-contrast-container"
                className="Div Color-contrast-container H4-contrast"
                dataCy="h4-color-contrast-div">
                <H4 id="heading-4" className="Heading-4" dataCy="heading-4">
                    Color Contrast with font size H4
                </H4>
            </Div>
            <Div
                id="h5-color-contrast-container"
                className="Div Color-contrast-container H5-contrast"
                dataCy="h5-color-contrast-div">
                <H5 id="heading-5" className="Heading-5" dataCy="heading-5">
                    Color Contrast with font size H5
                </H5>
            </Div>
            <Div
                id="h6-color-contrast-container"
                className="Div Color-contrast-container H6-contrast"
                dataCy="h6-color-contrast-div">
                <H6 id="heading-6" className="Heading-6" dataCy="heading-6">
                    Color Contrast with font size H6
                </H6>
            </Div>
        </Section>
    </AppContainer>
);

const AppContainer = styled.section`
    font-family: Helvetica, sans-serif;
    font-size: 1rem;
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
    & .Color-contrast-section,
    .Heading-order-section,
    .Color-contrast-font-size-section {
        border: 2px solid #b3b3b3;
        background-color: #d6d6d6;
        padding: 1rem 1rem 2rem;
    }
    & .Color-contrast-section {
        & .Color-contrast-container {
            background-color: #eeeeee;
            padding: 1rem;
            border-radius: 0.25rem;
            font-size: 1.75rem;
        }
        & .H1-contrast {
            & > h1 {
                font-size: 1.75rem;
            }
            background-color: #222222;
        }
        & .H2-contrast {
            & > h2 {
                font-size: 1.75rem;
            }
            color: #ffffff;
        }
        & .H3-contrast {
            & > h3 {
                font-size: 1.75rem;
            }
            color: #333333;
        }
        & .H4-contrast {
            & > h4 {
                font-size: 1.75rem;
            }
            color: orange;
            background-color: blue;
        }
        & .H5-contrast {
            & > h5 {
                font-size: 1.75rem;
            }
            color: red;
            background-color: green;
        }
        & .H6-contrast {
            & > h6 {
                font-size: 1.75rem;
            }
            color: #ffffff;
            background-color: #2b78e4;
        }
    }
    & .Color-contrast-font-size-section {
        & .Color-contrast-container {
            background-color: #eeeeee;
            padding: 1rem;
            border-radius: 0.25rem;
        }
        & .H1-contrast {
            background-color: #222222;
        }
        & .H2-contrast {
            color: #ffffff;
        }
        & .H3-contrast {
            color: #333333;
        }
        & .H4-contrast {
            color: orange;
            background-color: blue;
        }
        & .H5-contrast {
            color: red;
            background-color: green;
        }
        & .H6-contrast {
            color: #ffffff;
            background-color: #2b78e4;
        }
    }
`;

export default App;
