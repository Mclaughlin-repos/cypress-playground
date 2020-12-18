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
// import ColorPickerText from './containers/Color-Picker-Text/index';
import ColorPickerCustom from './containers/Color-Picker-Custom/index';
import ColorPickerDynamic from './containers/Color-Picker-Dynamic/index';
import ColorPickerAuroraText from './containers/Color-Picker-Aurora-Text/index';
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
            dataCy="app-header-container"
        >
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
                dataCy="header-form-section"
            >
                <H1
                    id="form-section-heading-1"
                    className="Form-section-heading-1"
                    dataCy="form-section-heading-1"
                >
                    Accessibility with Forms Exercise
                </H1>
            </Header>
            <InstructionsContainer>
                <InstructionsParagraph className="section-instructions">
                    Below you will see a form to help you understand how to create{' '}
                    <strong>WCAG 2.0 AA</strong> compliant forms.
                </InstructionsParagraph>
                <InstructionsParagraph className="section-instructions">
                    This form does <strong>not</strong> pass the <strong>WCAG 2.0 AA</strong>{' '}
                    initially to surface errors for you to learn from.
                </InstructionsParagraph>
                <InstructionsParagraph className="section-instructions">
                    In your terminal change directories into the <strong>cypress folder</strong>{' '}
                    then, run this command in your terminal:{' '}
                    <strong>
                        <code>
                            <pre>npm run start:test</pre>
                        </code>
                    </strong>
                </InstructionsParagraph>
                <InstructionsParagraph className="section-instructions">
                    This will open a new browser window, open the <strong>cypress GUI</strong> while
                    running the <strong>pa11y</strong> tests all at once. You will be able to see
                    the readout <strong>both</strong> within the <strong>cypress GUI</strong> and
                    within the <strong>terminal window</strong>. (You may need to scroll up within
                    the terminal window to see the <strong>pa11y</strong> errors)
                </InstructionsParagraph>
                <InstructionsParagraph className="section-instructions">
                    Once you see and understand the errors within the <strong>terminal</strong> and
                    the <strong>cypress GUI</strong>, try to figure out how to fix the exercise to
                    make it <strong>WCAG 2.0 AA</strong> compliant.
                </InstructionsParagraph>
            </InstructionsContainer>
            <Form action="" method="post" id="form" className="Form" dataCy="form">
                <Fieldset
                    id="fieldset-container"
                    className="Fieldset-container"
                    dataCy="fieldset-container"
                >
                    <Legend id="legend" className="Legend" dataCy="legend">
                        The Form
                    </Legend>
                    <Div id="name-div" className="Div Name-div" dataCy="name-div">
                        <LabelContainer
                            id="name-label-container"
                            className="Name-label-container"
                            dataCy="name-label-container"
                            htmlFor="name-input"
                        >
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
                            htmlFor="address-input"
                        >
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
                            htmlFor="address2-input"
                        >
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
                            htmlFor="city-input"
                        >
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
                            htmlFor="state-input"
                        >
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
                            htmlFor="zip-input"
                        >
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
                            htmlFor="phone-input"
                        >
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
                            htmlFor="email-input"
                        >
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
                            dataCy="reset-button"
                        >
                            Clear
                        </Button>
                        <Button
                            id="submit-button"
                            name="submit-button"
                            className="Submit-button"
                            value="submit"
                            buttonType="submit"
                            dataCy="submit-button"
                        >
                            Submit
                        </Button>
                    </Div>
                </Fieldset>
            </Form>
        </Section>
        <Section
            id="heading-order-section"
            className="Heading-order-section"
            dataCy="heading-order-section"
        >
            <Header
                id="header-heading-order-section"
                className="Header-heading-order-section"
                dataCy="header-heading-order-section"
            >
                <H1 id="heading-1" className="Heading-1" dataCy="heading-1">
                    Accessibility with Heading Order Exercise
                </H1>
            </Header>
            <InstructionsContainer>
                <InstructionsParagraph className="section-instructions">
                    Take a look at the <strong>Heading Order</strong> of these 6 headings and
                    observe that they are out of order based off of the{' '}
                    <strong>semantic HTML5/ WCAG 2.0 AA</strong> compliance standards.
                </InstructionsParagraph>
                <InstructionsParagraph className="section-instructions">
                    The <strong>headings</strong> are out of order on purpose so you can see the
                    errors when you first run the script comands.
                </InstructionsParagraph>
                <InstructionsParagraph className="section-instructions">
                    In your terminal change directories into the <strong>cypress folder</strong>{' '}
                    then, run this command within your terminal window:{' '}
                    <strong>
                        <code>
                            <pre>npm run start:test</pre>
                        </code>
                    </strong>
                </InstructionsParagraph>
                <InstructionsParagraph className="section-instructions">
                    This will open a new browser window, open the <strong>cypress GUI</strong> while
                    running the <strong>pa11y</strong> tests all at once.
                </InstructionsParagraph>
                <InstructionsParagraph className="section-instructions">
                    You will be able to see the readout <strong>both</strong> within the{' '}
                    <strong>cypress GUI</strong> and within the <strong>terminal window</strong>,
                    (You may need to scroll up within the terminal window to see the{' '}
                    <strong>pa11y</strong> errors)
                </InstructionsParagraph>
                <InstructionsParagraph className="section-instructions">
                    Once you see and understand the errors within the <strong>terminal</strong> and
                    the <strong>cypress GUI</strong>, try to figure out how to fix the exercise to
                    make it <strong>WCAG 2.0 AA</strong> compliant.
                </InstructionsParagraph>
            </InstructionsContainer>
            <Div
                id="heading-order-container-div"
                className="Div Heading-order-container-div"
                dataCy="heading-order-container-div"
            >
                <Div
                    id="headings-container-div"
                    className="Div Headings-container-div"
                    dataCy="headings-container-div"
                >
                    <H6 id="heading-6" className="Heading-6" dataCy="heading-6">
                        Heading Order H6
                    </H6>
                    <H4 id="heading-4" className="Heading-4" dataCy="heading-4">
                        Heading Order H4
                    </H4>
                    <H2 id="heading-2" className="Heading-2" dataCy="heading-2">
                        Heading Order H2
                    </H2>
                    <H3 id="heading-3" className="Heading-3" dataCy="heading-3">
                        Heading Order H3
                    </H3>
                    <H5 id="heading-5" className="Heading-5" dataCy="heading-5">
                        Heading Order H5
                    </H5>
                    <H1 id="heading-1" className="Heading-1" dataCy="heading-1">
                        Heading Order H1
                    </H1>
                </Div>
            </Div>
        </Section>
        <Section
            id="color-contrast-section"
            className="Color-contrast-section"
            dataCy="color-contrast-section"
        >
            <Header
                id="header-color-contrast-section"
                className="Header-color-contrast-section"
                dataCy="header-color-contrast-section"
            >
                <H1 id="heading-1" className="Heading-1" dataCy="heading-1">
                    Accessibility with Color Contrast Exercise
                </H1>
            </Header>
            <InstructionsContainer className="Instructions-container color-contrast-instructions-container">
                <InstructionsParagraph className="section-instructions">
                    Choose a swatch from the <strong>Aurora swatch collection</strong> OR use the
                    inputs to search for a custom color for <strong>background color</strong> then,
                    change the <strong>font color</strong> the same way.
                </InstructionsParagraph>
                <InstructionsParagraph className="section-instructions">
                    Once you have chosen your colors, in your terminal change directories into the{' '}
                    <strong>cypress folder</strong> then, run this command in your terminal:{' '}
                    <strong>
                        <code>
                            <pre>npm run start:test</pre>
                        </code>
                    </strong>
                </InstructionsParagraph>
                <InstructionsParagraph className="section-instructions">
                    This will open a new browser window, open the <strong>cypress GUI</strong> while
                    running the <strong>pa11y</strong> tests all at once. You will be able to see
                    the readout <strong>both</strong> within the <strong>cypress GUI</strong> and
                    within the <strong>terminal window</strong>. (You may need to scroll up within
                    the terminal window to see the <strong>pa11y</strong> errors)
                </InstructionsParagraph>
                <InstructionsParagraph className="section-instructions">
                    Once you see and understand the errors within the <strong>terminal</strong> and
                    the <strong>cypress GUI</strong>, try to figure out how to fix the exercise to
                    make it <strong>WCAG 2.0 AA</strong> compliant.
                </InstructionsParagraph>
            </InstructionsContainer>
            <ColorPickerDynamic
                id="color-contrast-dynamic-picker"
                className="Color-contrast-dynamic-picker"
                dataCy="color-contrast-dynamic-picker"
            >
                <ColorPickerAuroraText
                    id="color-contrast-aurora-text-picker"
                    className="Color-contrast-aurora-text-picker"
                    dataCy="color-contrast-aurora-text-picker"
                >
                    <Div
                        id="h1-color-contrast-container"
                        className="Div Color-contrast-container H1-contrast color-contrast-text-container"
                        dataCy="h1-color-contrast-div"
                    >
                        <H1
                            id="heading-1-color-contrast"
                            className="Heading-1"
                            dataCy="heading-1-color-contrast"
                        >
                            Change the font color &nbsp;:-)
                        </H1>
                    </Div>
                </ColorPickerAuroraText>
            </ColorPickerDynamic>
        </Section>
        <Section
            id="color-contrast-font-size-section"
            className="Color-contrast-font-size-section"
            dataCy="color-contrast-font-size-section"
        >
            <Header
                id="header-color-contrast-font-size-section"
                className="Header-color-contrast-font-size-section"
                dataCy="header-color-contrast-font-size-section"
            >
                <H1 id="heading-1" className="Heading-1" dataCy="heading-1">
                    Accessibility with Color Contrast and Font Size Exercise
                </H1>
            </Header>
            <InstructionsContainer className="Instructions-container color-contrast-font-size-instructions-container">
                <InstructionsParagraph className="section-instructions">
                    Below you will see the official <strong>Aurora font sizes</strong> within each
                    card starting from largest to smallest.
                </InstructionsParagraph>
                <InstructionsParagraph className="section-instructions">
                    Choose a swatch from the <strong>Aurora swatch collection</strong> OR use the
                    inputs to search for a custom color for <strong>font color</strong> then, change
                    the <strong>background color</strong> of each individual card to see differences
                    with color contrast combined with the <strong>Aurora font sizes</strong>.
                </InstructionsParagraph>
                <InstructionsParagraph className="section-instructions">
                    Once you have chosen your colors, in your terminal change directories into the{' '}
                    <strong>cypress folder</strong> then, run this command in your terminal:{' '}
                    <strong>
                        <code>
                            <pre>npm run start:test</pre>
                        </code>
                    </strong>
                </InstructionsParagraph>
                <InstructionsParagraph className="section-instructions">
                    This will open a new browser window, open the <strong>cypress GUI</strong> while
                    running the <strong>pa11y</strong> tests all at once. You will be able to see
                    the readout <strong>both</strong> within the <strong>cypress GUI</strong> and
                    within the <strong>terminal window</strong>. (You may need to scroll up within
                    the terminal window to see the <strong>pa11y</strong> errors)
                </InstructionsParagraph>
                <InstructionsParagraph className="section-instructions">
                    Once you see and understand the errors within the <strong>terminal</strong> and
                    the <strong>cypress GUI</strong>, try to figure out how to fix the exercise to
                    make it <strong>WCAG 2.0 AA</strong> compliant.
                </InstructionsParagraph>
            </InstructionsContainer>
            <ColorPickerAuroraText
                id="color-contrast-h1-swatch-picker"
                className="Color-contrast-h1-swatch-picker"
                dataCy="color-contrast-h1-swatch-picker"
            >
                <Div
                    id="h1-color-contrast-container"
                    className="Div Color-contrast-container H1-contrast"
                    dataCy="h1-color-contrast-div"
                >
                    <Title className="title">Choose Background Color</Title>
                    <ColorPickerCustom
                        id="color-contrast-h1-picker"
                        className="Color-contrast-h1-picker"
                        dataCy="color-contrast-h1-picker"
                    >
                        <Div
                            id="h1-color-contrast-container"
                            className="Div Color-picker-parent-container"
                            dataCy="h1-color-contrast-div"
                        >
                            <H1 id="heading-1" className="Heading-1" dataCy="heading-1">
                                Font size 44px
                            </H1>
                        </Div>
                    </ColorPickerCustom>
                </Div>
                <Div
                    id="h2-color-contrast-container"
                    className="Div Color-contrast-container H2-contrast"
                    dataCy="h2-color-contrast-div"
                >
                    <Title className="title">Choose Background Color</Title>
                    <ColorPickerCustom
                        id="color-contrast-h2-picker"
                        className="Color-contrast-h2-picker"
                        dataCy="color-contrast-h2-picker"
                    >
                        <Div
                            id="h2-color-contrast-container"
                            className="Div Color-picker-parent-container"
                            dataCy="h2-color-contrast-div"
                        >
                            <H2 id="heading-2" className="Heading-2" dataCy="heading-2">
                                Font size 36px
                            </H2>
                        </Div>
                    </ColorPickerCustom>
                </Div>
                <Div
                    id="h3-color-contrast-container"
                    className="Div Color-contrast-container H3-contrast"
                    dataCy="h3-color-contrast-div"
                >
                    <Title className="title">Choose Background Color</Title>
                    <ColorPickerCustom
                        id="color-contrast-h3-picker"
                        className="Color-contrast-h3-picker"
                        dataCy="color-contrast-h3-picker"
                    >
                        <Div
                            id="h2-color-contrast-container"
                            className="Div Color-picker-parent-container"
                            dataCy="h3-color-contrast-div"
                        >
                            <H3 id="heading-3" className="Heading-3" dataCy="heading-3">
                                Font size 28px
                            </H3>
                        </Div>
                    </ColorPickerCustom>
                </Div>
                <Div
                    id="h4-color-contrast-container"
                    className="Div Color-contrast-container H4-contrast"
                    dataCy="h4-color-contrast-div"
                >
                    <Title className="title">Choose Background Color</Title>
                    <ColorPickerCustom
                        id="color-contrast-h4-picker"
                        className="Color-contrast-h4-picker"
                        dataCy="color-contrast-h4-picker"
                    >
                        <Div
                            id="h4-color-contrast-container"
                            className="Div Color-picker-parent-container"
                            dataCy="h4-color-contrast-div"
                        >
                            <H4 id="heading-4" className="Heading-4" dataCy="heading-4">
                                Font size 24px
                            </H4>
                        </Div>
                    </ColorPickerCustom>
                </Div>
                <Div
                    id="h5-color-contrast-container"
                    className="Div Color-contrast-container H5-contrast"
                    dataCy="h5-color-contrast-div"
                >
                    <Title className="title">Choose Background Color</Title>
                    <ColorPickerCustom
                        id="color-contrast-h5-picker"
                        className="Color-contrast-h5-picker"
                        dataCy="color-contrast-h5-picker"
                    >
                        <Div
                            id="h5-color-contrast-container"
                            className="Div Color-picker-parent-container"
                            dataCy="h5-color-contrast-div"
                        >
                            <H5 id="heading-5" className="Heading-5" dataCy="heading-5">
                                Font size 20px
                            </H5>
                        </Div>
                    </ColorPickerCustom>
                </Div>
                <Div
                    id="h6-color-contrast-container"
                    className="Div Color-contrast-container H6-contrast"
                    dataCy="h6-color-contrast-div"
                >
                    <Title className="title">Choose Background Color</Title>
                    <ColorPickerCustom
                        id="color-contrast-h6-picker"
                        className="Color-contrast-h6-picker"
                        dataCy="color-contrast-h6-picker"
                    >
                        <Div
                            id="h6-color-contrast-container"
                            className="Div Color-picker-parent-container"
                            dataCy="h6-color-contrast-div"
                        >
                            <H6 id="heading-6" className="Heading-6" dataCy="heading-6">
                                Font size 16px
                            </H6>
                        </Div>
                    </ColorPickerCustom>
                </Div>
                <Div
                    id="h7-color-contrast-container"
                    className="Div Color-contrast-container H7-contrast"
                    dataCy="h7-color-contrast-div"
                >
                    <Title className="title">Choose Background Color</Title>
                    <ColorPickerCustom
                        id="color-contrast-h7-picker"
                        className="Color-contrast-h7-picker"
                        dataCy="color-contrast-h7-picker"
                    >
                        <Div
                            id="h7-color-contrast-container"
                            className="Div Color-picker-parent-container"
                            dataCy="h7-color-contrast-div"
                        >
                            <H6 id="heading-7" className="Heading-7" dataCy="heading-7">
                                Font size 14px
                            </H6>
                        </Div>
                    </ColorPickerCustom>
                </Div>
                <Div
                    id="h8-color-contrast-container"
                    className="Div Color-contrast-container H8-contrast"
                    dataCy="h8-color-contrast-div"
                >
                    <Title className="title">Choose Background Color</Title>
                    <ColorPickerCustom
                        id="color-contrast-h8-picker"
                        className="Color-contrast-h8-picker"
                        dataCy="color-contrast-h8-picker"
                    >
                        <Div
                            id="h8-color-contrast-container"
                            className="Div Color-picker-parent-container"
                            dataCy="h8-color-contrast-div"
                        >
                            <H6 id="heading-8" className="Heading-8" dataCy="heading-8">
                                Font size 12px
                            </H6>
                        </Div>
                    </ColorPickerCustom>
                </Div>
            </ColorPickerAuroraText>
        </Section>
    </AppContainer>
);
const Title = styled.p`
    color: #2d2d2d;
    background-color: #2557a7;
    color: #ffffff;
    letter-spacing: 0.5px;
    font-size: 1.25rem;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    padding: 1rem;
`;

const InstructionsContainer = styled.div`
    background-color: #082347;
    padding: 1rem 0.5rem;
    border-radius: 0.25rem;
`;

const InstructionsParagraph = styled.p`
    font-size: 1.25rem;
    color: #ffffff;
    letter-spacing: 0.5px;
    font-weight: 300;
    margin: 1rem;
    line-height: 1.3;
    & strong {
        color: #2ddfff;
        & code {
            & pre {
                font-size: 1.5rem;
                letter-spacing: 1.5px;
            }
        }
    }
`;

const AppContainer = styled.section`
    font-family: Helvetica, sans-serif;
    font-size: 1rem;
    margin: 0;
    padding: 14rem 0 0 0;
    background-color: #092347;

    & .App-header-container {
        font-size: 2.25rem;
        color: #ffffff;
        background-color: #0643ad;
        margin: 0;
        padding: 0;
        display: flex;
        flex-flow: column;
        position: fixed;
        top: 0;
        z-index: 2;
        width: 100%;

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
            box-shadow: 0px 3px 14px 0px rgba(0, 0, 0, 0.5);
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
        border: 2px solid #061831;
        background-color: #0c2e5e;
        padding: 1rem 1.5rem 2rem;
        margin: 2rem;
        border-radius: 0.5rem;
        box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
        min-width: 43.5rem;
    }
    & .Color-contrast-container {
        margin: 2rem 0 1.5rem;
    }
    & .Form-section {
        & .Form {
            margin: 1rem 0 1rem;
        }
        & .Header-form-section {
            font-size: 1.75rem;
            margin: 0 0 1rem 0;
            padding: 0;

            & .Form-section-heading-1 {
                margin: 0;
                padding: 0;
                color: #ffffff;
                letter-spacing: 0.5px;
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
                color: #ffffff;
                letter-spacing: 0.5px;
            }
        }
        & .Color-picker-dynamic-parent-container {
            background-color: #082347;
            margin: 2rem 0 0;
            padding: 2rem 1.5rem 1.5rem;
            border-radius: 0.25rem;

            & .color-picker-container {
                margin: 2rem auto;
                max-width: 50rem;
                min-width: 43rem;

                & .Color-picker-button {
                    position: absolute;
                    z-index: 1;
                    margin: -1.5rem 0;
                }

                & .color-picker-popover {
                    position: absolute;
                    margin: 0.25rem 0;
                }
                & .color-picker-aurora-text-popover {
                    margin: 4.5rem 20rem 0;
                }
                & .color-picker-dynamic-popover {
                    margin: 2.25rem 0 0;
                }
                & .color-picker-dynamic-child-container {
                    background-color: transparent;
                    & .color-picker-parent-container {
                        & .text-color-picker-container {
                            position: absolute;
                            max-width: 50rem;
                            min-width: 43rem;
                            width: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: flex-end;
                            & .color-picker-aurora-text-popover {
                                & .color-picker-aurora-text-cover {
                                    & .text-color-picker-swatch {
                                        position: absolute;
                                    }
                                }
                            }
                        }

                        & .color-picker-aurora-text-child-container {
                            border-top: 4px solid #ff581f;
                            box-shadow: 3px 10px 11px 0px rgba(0, 0, 0, 0.5);
                            & .color-contrast-text-container {
                                display: flex;
                                align-items: center;
                                justify-content: space-around;

                                & .Heading-1 {
                                    font-size: 44px;
                                }
                            }
                        }
                    }
                }
            }
            & .Color-contrast-dynamic-picker {
                background-color: transparent !important;
            }
        }

        & .Color-contrast-container {
            padding: 1.5rem;
            border-radius: 0.25rem;
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

                & .Heading-1 {
                    font-size: 3rem;
                }
                & .text-color-picker-container {
                    margin: 0;
                    border: 10px solid red;
                    position: absolute;
                }
                & .color-picker-sketch {
                    height: fit-content;
                    position: absolute;
                }
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
                color: #ffffff;
                letter-spacing: 0.5px;
            }
        }
        & .Heading-1 {
            font-size: 1.75rem;
        }
        & .Heading-order-container-div {
            padding: 1rem 1.5rem;
            border-radius: 0.25rem;
            background-color: #082347;
            & .Headings-container-div {
                background-color: #e6e6e6;
                border-radius: 0.25rem;
                padding: 0 1.5rem;
            }
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
                color: #ffffff;
                letter-spacing: 0.5px;
            }
        }
        & .color-picker-parent-container {
            & .Color-contrast-h1-swatch-picker {
                position: absolute;
                right: 5rem;
                width: 20rem;
                margin: 2rem 0 0;
                & .text-color-picker-swatch {
                }
            }
        }
        & .Color-contrast-container {
            background-color: #082347;
            padding: 0.5rem 1.5rem 1.5rem;
            border-radius: 0.25rem;
            width: 21rem;
            height: 30rem;

            & .color-picker-container {
                box-shadow: 0px 3px 10px -3px rgba(0, 0, 0, 0.5);
            }
        }
        & .H1-contrast {
            & .Heading-1 {
                padding: 1rem;
                margin: 0;
                font-size: 2.75rem;
            }
            & .Color-contrast-h1-picker {
                height: 7rem;
                & .color-picker-sketch {
                    position: absolute;
                    left: 5.15rem;
                    margin-top: 8.5rem;
                }
            }
        }
        & .H2-contrast {
            & .Heading-2 {
                padding: 1rem;
                margin: 0;
                font-size: 2.25rem;
            }
            & .Color-contrast-h2-picker {
                height: 7rem;
                & .color-picker-sketch {
                    position: absolute;
                    left: 5.15rem;
                    margin-top: 8.5rem;
                }
            }
        }
        & .H3-contrast {
            & .Heading-3 {
                padding: 1.5rem 1rem;
                margin: 0;
                font-size: 1.75rem;
            }
            & .Color-contrast-h3-picker {
                height: 7rem;
                & .color-picker-sketch {
                    position: absolute;
                    left: 5.15rem;
                    margin-top: 8.5rem;
                }
            }
        }
        & .H4-contrast {
            & .Heading-4 {
                padding: 1.5rem 1rem;
                margin: 0;
                font-size: 1.5rem;
            }
            & .Color-contrast-h4-picker {
                height: 7rem;
                & .color-picker-sketch {
                    position: absolute;
                    left: 5.15rem;
                    margin-top: 8.5rem;
                }
            }
        }
        & .H5-contrast {
            & .Heading-5 {
                padding: 1.5rem 1rem;
                margin: 0;
                font-size: 1.25rem;
            }
            & .Color-contrast-h5-picker {
                height: 7rem;
                & .color-picker-sketch {
                    position: absolute;
                    left: 5.15rem;
                    margin-top: 8.5rem;
                }
            }
        }
        & .H6-contrast {
            & .Heading-6 {
                padding: 1.5rem 1rem;
                margin: 0;
                font-size: 1rem;
            }
            & .Color-contrast-h6-picker {
                height: 7rem;
                & .color-picker-sketch {
                    position: absolute;
                    left: 5.15rem;
                    margin-top: 8.5rem;
                }
            }
        }
        & .H7-contrast {
            & .Heading-7 {
                padding: 1.5rem 1rem;
                margin: 0;
                font-size: 0.875rem;
            }
            & .Color-contrast-h7-picker {
                height: 7rem;
                & .color-picker-sketch {
                    position: absolute;
                    left: 5.15rem;
                    margin-top: 8.5rem;
                }
            }
        }
        & .H8-contrast {
            & .Heading-8 {
                padding: 1.5rem 1rem;
                margin: 0;
                font-size: 0.75rem;
            }
            & .Color-contrast-h8-picker {
                height: 7rem;
                & .color-picker-sketch {
                    position: absolute;
                    left: 5.15rem;
                    margin-top: 8.5rem;
                }
            }
        }
    }
`;

export default App;
