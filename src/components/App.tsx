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
import ColorPicker from './containers/Color-Picker/index';
import ColorPickerText from './containers/Color-Picker-Text/index';
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
                Hi {props.userName}! Welcome to the Cypress Playground...{''}&nbsp;
                <span className="App-heading-1-span">Now using {props.lang}!</span>
            </H1>
            <H2 id="app-heading-2" className="App-heading-2" dataCy="app-heading-2">
                This is where you will learn how to use Cypress, AXE-CORE and PA11Y to learn how to
                work with components and pages.
            </H2>
        </Header>
        <Section id="form-section" className="Form-section" dataCy="form-section-section">
            <Header
                id="header-form-section"
                className="Header-form-section"
                dataCy="header-form-section">
                <H1
                    id="form-section-heading-1"
                    className="Form-section-heading-1"
                    dataCy="form-section-heading-1">
                    Accessibility with Forms Exercise
                </H1>
            </Header>
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
                        <Input
                            id="name-input"
                            className="Name-input"
                            type="text"
                            dataCy="name-input"
                        />
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
                        <Input
                            id="city-input"
                            className="city-input"
                            type="text"
                            dataCy="city-input"
                        />
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
                        <Input
                            id="zip-input"
                            className="zip-input"
                            type="text"
                            dataCy="zip-input"
                        />
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
        </Section>
        <Section
            id="heading-order-section"
            className="Heading-order-section"
            dataCy="heading-order-section">
            <Header
                id="header-heading-order-section"
                className="Header-heading-order-section"
                dataCy="header-heading-order-section">
                <H1 id="heading-1" className="Heading-1" dataCy="heading-1">
                    Accessibility with Heading Order Exercise
                </H1>
            </Header>
            <Div
                id="heading-order-container-div"
                className="Div Heading-order-container-div"
                dataCy="heading-order-container-div">
                <H1 id="heading-1" className="Heading-1" dataCy="heading-1">
                    Heading Order H1
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
            </Div>
        </Section>
        <Section
            id="color-contrast-section"
            className="Color-contrast-section"
            dataCy="color-contrast-section">
            <Header
                id="header-color-contrast-section"
                className="Header-color-contrast-section"
                dataCy="header-color-contrast-section">
                <H1 id="heading-1" className="Heading-1" dataCy="heading-1">
                    Accessibility with Color Contrast Exercise
                </H1>
            </Header>
            <p className="section-instructions">
                Choose a background color then choose a text color. After that, run the tests and
                see the Accessibility readout.
            </p>
            <Div
                id="h1-color-contrast-container"
                className="Div Color-contrast-container H1-contrast"
                dataCy="h1-color-contrast-div">
                <H2
                    id="color-contrast-heading-2"
                    className="Color-contrast-heading-2"
                    dataCy="color-contrast-heading-2">
                    Choose a Background color
                </H2>
                <ColorPicker
                    id="color-contrast-h1-picker"
                    className="Color-contrast-h1-picker"
                    dataCy="color-contrast-h1-picker">
                    <ColorPickerText
                        id="text-color-contrast-h1-picker"
                        className="Text-color-contrast-h1-picker"
                        dataCy="text-color-contrast-h1-picker">
                        <H1 id="heading-1" className="Heading-1" dataCy="heading-1">
                            Choose a text color!
                        </H1>
                    </ColorPickerText>
                </ColorPicker>
            </Div>
        </Section>
        <Section
            id="color-contrast-font-size-section"
            className="Color-contrast-font-size-section"
            dataCy="color-contrast-font-size-section">
            <Header
                id="header-color-contrast-font-size-section"
                className="Header-color-contrast-font-size-section"
                dataCy="header-color-contrast-font-size-section">
                <H1 id="heading-1" className="Heading-1" dataCy="heading-1">
                    Accessibility with Color Contrast and Font Size Exercise
                </H1>
            </Header>
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
    margin: 0;
    padding: 0;
    & .App-header-container {
        font-size: 2.25rem;
        color: #ffffff;
        background-color: #0643ad;
        margin: 0;
        padding: 0;
        display: flex;
        flex-flow: column;

        & .App-heading-1 {
            background-color: #0d2d5e;
            margin: 0;
            padding: 1.5rem;
            color: #2ddfff;

            & .App-heading-1-span {
                font-size: 1.5rem;
                letter-spacing: 0.5px;
                font-weight: 500;
            }
        }
        & .App-heading-2 {
            color: #06d9ff;
            font-size: 1.5rem;
            font-weight: 500;
            letter-spacing: 0.5px;
            padding: 1.5rem;
            background-color: #0643ad;
            margin: 0;
        }
    }
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
    .Form-section,
    .Color-contrast-font-size-section {
        border: 2px solid #b3b3b3;
        background-color: #d6d6d6;
        padding: 1rem 1.5rem 2rem;
    }
    & .Form-section {
        & .Header-form-section {
            font-size: 1.75rem;
            margin: 0 0 1rem 0;
            padding: 0;

            & .Form-section-heading-1 {
                margin: 0;
                padding: 0;
            }
        }
    }
    & .Color-contrast-section {
        & .Header-color-contrast-section {
            margin: 0 0 1rem 0;
            padding: 0;

            & .Heading-1 {
                font-size: 1.75rem;
                margin: 0;
                padding: 0;
            }
        }
        & .section-instructions {
            font-size: 1.25rem;
        }

        & .Color-contrast-container {
            padding: 1rem;
            & .color-picker-parent-container {
                width: 30rem;
                margin: 2rem auto 6rem;
                & .Heading-1 {
                    font-size: 2rem;
                }
            }
            & .color-picker-container {
                flex-flow: row-reverse;
                justify-content: flex-end;

                & .Heading-7,
                .Heading-6,
                .Heading-5,
                .Heading-4,
                .Heading-3,
                .Heading-2,
                .Heading-1 {
                    font-size: 2rem;
                }
                & .text-color-picker-container {
                    margin: 0;
                }
            }
        }
        & .H1-contrast {
            & > h1 {
            }
        }
        & .H2-contrast {
            & > h2 {
                color: #000000;
            }
        }
        & .H3-contrast {
            & > h3 {
                color: #666666;
            }
        }
        & .H4-contrast {
            & > h4 {
                color: orange;
            }
        }
        & .H5-contrast {
            & > h5 {
                color: red;
            }
        }
        & .H6-contrast {
            & > h6 {
                color: #2b78e4;
            }
        }
        & .H7-contrast {
            & > h6 {
                color: green;
            }
        }
    }
    & .Heading-order-section {
        & .Header-heading-order-section {
            font-size: 2rem;
            margin: 0 0 1rem 0;
            padding: 0;

            & .Heading-1 {
                margin: 0;
                padding: 0;
            }
        }
        & .Heading-1 {
            font-size: 1.75rem;
        }
        & .Heading-order-container-div {
            padding: 1rem;
            border-radius: 0.25rem;
            border: 1px solid #b3b3b3;
        }
    }
    & .Color-contrast-font-size-section {
        & .Header-color-contrast-font-size-section {
            font-size: 1.75rem;
            margin: 0 0 1rem 0;
            padding: 0;

            & .Heading-1 {
                margin: 0;
                padding: 0;
            }
        }
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
