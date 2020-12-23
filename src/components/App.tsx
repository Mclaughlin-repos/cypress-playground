import React, { useRef } from 'react';
import styled from 'styled-components';
import LabelContainer from './containers/label/index';
import Input from './foundations/input/index';
import Form from './containers/form/index';
import Fieldset from './containers/fieldset/index';
import Legend from './foundations/legend/index';
import Div from './containers/div/index';
import Section from './containers/section/index';
import Header from './containers/header/index';
import ColorPickerDynamic from './containers/color-picker-dynamic/index';
import ColorPickerAuroraText from './containers/color-picker-aurora-text/index';
import Button from './foundations/button/index';
import H1 from './foundations/h1/index';
import H2 from './foundations/h2/index';
import H3 from './foundations/h3/index';
import H4 from './foundations/h4/index';
import H5 from './foundations/h5/index';
import H6 from './foundations/h6/index';
import Link from './foundations/link/index';
import TextLink from './foundations/text-link/index';
import LearnIcon from '-!svg-react-loader?name=Icon!../../Icons/mind.svg';
import SolutionIcon from '-!svg-react-loader?name=Icon!../../Icons/solution.svg';
import InnovationIcon from '-!svg-react-loader?name=Icon!../../Icons/lightbulb-gear.svg';
import IdeaIcon from '-!svg-react-loader?name=Icon!../../Icons/idea-lightbulb.svg';
import ChallengeIcon from '-!svg-react-loader?name=Icon!../../Icons/book.svg';
import ButtonIconDropdown from './foundations/button-icon-dropdown/index';

const App = () => {
    const formRef = useRef(null);
    const headingsRef = useRef(null);
    const contrastRef = useRef(null);
    const fontSizeRef = useRef(null);
    const introRef = useRef(null);
    const handleScroll = () => {
        formRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const handleScrollHeadings = () => {
        headingsRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const handleScrollContrast = () => {
        contrastRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const handleScrollFontSizeContrast = () => {
        fontSizeRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const handleScrollIntro = () => {
        introRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <AppContainer>
            <Header
                id="app-header-container"
                className="App-header-container"
                dataCy="app-header-container"
            >
                <Div id="logo-container" className="Logo-container" dataCy="logo-container">
                    <LearnIcon />
                </Div>
                <H1 id="app-heading-1" className="App-heading-1" dataCy="app-heading-1">
                    AXE Testing Playground
                </H1>
                <NavContainer className="nav-links-container">
                    <TextLink
                        id="link-1"
                        title="link to accessible forms references"
                        className="form-reference-link"
                        linkText="Intro"
                        onClick={handleScrollIntro}
                    >
                        <SolutionIcon />
                    </TextLink>
                    <TextLink
                        id="link-1"
                        title="link to accessible forms references"
                        className="form-reference-link"
                        linkText="Forms"
                        onClick={handleScroll}
                    >
                        <SolutionIcon />
                    </TextLink>
                    <TextLink
                        id="link-1"
                        title="link to accessible forms references"
                        className="form-reference-link"
                        linkText="Headings"
                        onClick={handleScrollHeadings}
                    >
                        <SolutionIcon />
                    </TextLink>
                    <TextLink
                        id="link-1"
                        title="link to accessible forms references"
                        className="form-reference-link"
                        linkText="Contrast"
                        onClick={handleScrollContrast}
                    >
                        <SolutionIcon />
                    </TextLink>
                    <TextLink
                        id="link-1"
                        title="link to accessible forms references"
                        className="form-reference-link"
                        linkText="Font Size"
                        onClick={handleScrollFontSizeContrast}
                    >
                        <SolutionIcon />
                    </TextLink>
                </NavContainer>
            </Header>
            <Div id="svg-div-container" className="Svg-div-container" dataCy="svg-div-container">
                <SectionLogo id="learn-logo" className="section-logo Learn-logo">
                    <LearnIcon />
                    <InstructionsParagraph>Why a Topic is Important</InstructionsParagraph>
                </SectionLogo>
                <SectionLogo id="explore-logo" className="section-logo Explore-logo">
                    <SolutionIcon />
                    <InstructionsParagraph>Explore a Topic</InstructionsParagraph>
                </SectionLogo>
                <SectionLogo id="innovate-logo" className="section-logo Innovate-logo">
                    <InnovationIcon />
                    <InstructionsParagraph>Innovate an Idea</InstructionsParagraph>
                </SectionLogo>
            </Div>
            <Div
                id="svg-div-container-2"
                className="Svg-div-container svg-div-second-container"
                dataCy="svg-div-container-2"
            >
                <SectionLogo id="understand-logo" className="section-logo Understand-logo">
                    <IdeaIcon />
                    <InstructionsParagraph>Understand a Topic</InstructionsParagraph>
                </SectionLogo>
                <SectionLogo id="challenge-logo" className="section-logo challenge-logo">
                    <ChallengeIcon />
                    <InstructionsParagraph>Complete a Challenge</InstructionsParagraph>
                </SectionLogo>
                <Target id="introduction-target" ref={introRef} />
            </Div>
            <Section
                id="introduction-section"
                className="Introduction-section"
                dataCy="introduction-section"
            >
                <H2
                    id="introduction-heading"
                    className="section-heading Introduction-heading  heading-2"
                    dataCy="introduction-heading"
                >
                    Introduction
                </H2>
                <InstructionsContainer className="Instructions-container color-contrast-instructions-container">
                    <InstructionsParagraph className="section-instructions">
                        <strong>Welcome to the AXE Testing Playground!</strong>
                    </InstructionsParagraph>
                    <InstructionsParagraph className="section-instructions">
                        Internet accessibility has come a long way over the past few years and,
                        should be an ever present necessity for the population who require
                        assistance from other avenues to use for websites, applications and internet
                        browsing.
                    </InstructionsParagraph>
                    <InstructionsParagraph className="section-instructions">
                        Try using your imagination to try and put yourself in the shoes of someone
                        with an impairment who needs to use the internet. <br />
                        <strong>For example</strong>: squinting your eyes so you have a difficult
                        time seeing the screen then...trying to use the internet while your eyes are
                        squinted. You have gained a little bit of a crude understanding of what it's
                        like to need visual assistive technologies (screenreaders) by individuals
                        who have sight impairment.
                    </InstructionsParagraph>
                    <InstructionsParagraph className="section-instructions">
                        <strong>Another example:</strong> grab a stick or straight edge that is
                        longer than 1 foot and, using your mouth, try to click on a button AND link
                        within a website on screen. You have now gained crude insight into how an
                        individual with physical impairments may need to use the internet.
                    </InstructionsParagraph>
                    <InstructionsParagraph className="section-instructions">
                        <strong>
                            <code>
                                <pre>Now imagine what it's like with other impairments :-(</pre>
                            </code>
                        </strong>
                    </InstructionsParagraph>
                    <InstructionsParagraph className="section-instructions">
                        For an <strong>engineer/ developer/ qa</strong> to be able to evaluate their
                        current work to assess it's accessibility score, there are new automation
                        and testing technologies that can be used to produce an{' '}
                        <strong>accessible internet presence</strong>.
                    </InstructionsParagraph>
                    <InstructionsParagraph className="section-instructions">
                        <strong>Why did I created this application repo?</strong>
                        <br /> To provide an avenue for individuals to learn how to write{' '}
                        <strong>Cypress tests</strong> while learning how to use:{' '}
                        <strong>AXE-CORE</strong>, <strong>a11y-rule</strong> npm package and{' '}
                        <strong>pa11y</strong>.
                    </InstructionsParagraph>
                    <InstructionsParagraph className="section-instructions">
                        <strong>This repo is designed and developed so you can:</strong>
                        <br /> Use the provided component to create your own{' '}
                        <strong>Cypress tests</strong>. <br />
                        Write <strong>custom components</strong> to test to detect accessibility
                        issues within your test components. <br />
                        Create new <strong>composed components</strong> from the provided components
                        to test for accessibility. <br /> Test the{' '}
                        <strong>whole application</strong> end to end to learn more about
                        application accessibility. <br />
                        Create new <strong>mini-webapps</strong> and <strong>micro-sites</strong>{' '}
                        from the provided components to test for whole{' '}
                        <strong>application accessibility</strong>. <br />
                        Finally, to <strong>challenge yourself</strong> by doing{' '}
                        <strong>exercises</strong> to solidify your knowledge base.
                    </InstructionsParagraph>
                    <InstructionsParagraph className="section-instructions">
                        At the end of each section there are links to resources and a challenge, so
                        don't forget to take a look.
                    </InstructionsParagraph>
                    <Target id="forms-target" ref={formRef} />
                    <InstructionsParagraph className="section-instructions">
                        <strong>
                            <code>
                                <pre>
                                    Follow the instructions within each section and...Get to It!
                                </pre>
                            </code>
                        </strong>
                    </InstructionsParagraph>
                </InstructionsContainer>
            </Section>
            <Section id="form-section" className="Form-section" dataCy="form-section-section">
                <Header
                    id="header-form-section"
                    className="Header-form-section"
                    dataCy="header-form-section"
                >
                    <H1
                        id="form-section-heading-1"
                        className="Heading-1"
                        dataCy="form-section-heading-1"
                    >
                        <ButtonIconDropdown
                            id="form-exercise-learn-button"
                            className="learn-button form-exercise-learn-button"
                            headingChildren={'Why is this important?'}
                        >
                            <InstructionsContainer>
                                <InstructionsParagraph className="form-learn-button-instructions">
                                    Forms can be visually and cognitively complex and challenging to
                                    use. Accessible forms are easier to use for everyone, including
                                    people with disabilities.
                                </InstructionsParagraph>
                                <InstructionsParagraph className="form-learn-button-instructions">
                                    <strong>People with cognitive disablities: </strong>
                                    can better understand the form and how to complete it, as making
                                    forms accessible improves the layout structure, instructions,
                                    and feedback.
                                </InstructionsParagraph>
                                <InstructionsParagraph className="form-learn-button-instructions">
                                    <strong>People using speech input: </strong>
                                    can use the labels via voice commands to activate controls and
                                    move the focus to the fields that they have to complete.
                                </InstructionsParagraph>
                                <InstructionsParagraph className="form-learn-button-instructions">
                                    <strong>People with limited dexterity: </strong>
                                    benefit from large clickable areas that include the labels,
                                    especially for smaller controls, such as radio buttons and
                                    checkboxes.
                                </InstructionsParagraph>
                                <InstructionsParagraph className="form-learn-button-instructions">
                                    <strong>People using screen readers: </strong>
                                    can identify and understand form controls more easily because
                                    they are associated with labels, field sets, and other
                                    structural elements.
                                </InstructionsParagraph>
                            </InstructionsContainer>
                        </ButtonIconDropdown>{' '}
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
                    </InstructionsParagraph>
                    <strong>
                        <code>
                            <pre>npm run start:test</pre>
                        </code>
                    </strong>
                    <InstructionsParagraph className="section-instructions">
                        This will open a new browser window, open the <strong>cypress GUI</strong>{' '}
                        while running the <strong>pa11y</strong> tests all at once. You will be able
                        to see the readout <strong>both</strong> within the{' '}
                        <strong>cypress GUI</strong> and within the <strong>terminal window</strong>
                        . (You may need to scroll up within the terminal window to see the{' '}
                        <strong>pa11y</strong> errors)
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
                        <Div
                            id="button-container"
                            className="Div Button-container"
                            dataCy="button-div"
                        >
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
                <Target id="headings-target" ref={headingsRef} />
                <LinkContainer className="forms-link-container">
                    <Link
                        id="link-1"
                        href="https://www.w3.org/WAI/tutorials/forms/"
                        messageChildren={'Go to w3.org to learn more about accessible forms'}
                        title="link to accessible forms references"
                        className="form-reference-link"
                    >
                        <SolutionIcon />
                    </Link>
                    <Link
                        id="link-1"
                        href="https://www.w3.org/WAI/tutorials/forms/"
                        messageChildren={'Challenge: Try and fix this form to make it accessible'}
                        title="link to accessible forms challenge practice"
                        className="forms-challenge-link"
                    >
                        <ChallengeIcon />
                    </Link>
                </LinkContainer>
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
                        <ButtonIconDropdown
                            id="heading-order-exercise-learn-button"
                            className="learn-button form-exercise-learn-button"
                            headingChildren={'Why is this important?'}
                        >
                            <InstructionsContainer>
                                <InstructionsParagraph className="heading-order-learn-button-instructions">
                                    A heading describes the content that follows it, much like a
                                    news headline. When arriving at a new page, sighted users
                                    gravitate toward headings to quickly find what they want on the
                                    page. Screen reader and other assistive technology users can
                                    also skip from heading to heading.
                                </InstructionsParagraph>
                                <InstructionsParagraph className="heading-order-learn-button-instructions">
                                    Headings create an outline for the page, similar to a term paper
                                    outline or table of contents. The <strong>h1</strong> describes
                                    the page as a whole, and should be similar to the page{' '}
                                    <strong>title</strong>).
                                </InstructionsParagraph>
                                <InstructionsParagraph>
                                    A page should typically have only one <strong>h1</strong>.
                                    Headings <strong>h2</strong> through <strong>h6</strong>{' '}
                                    represent increasing degrees of <strong>"indentation"</strong>{' '}
                                    in our conceptual <strong>"outline"</strong>.
                                </InstructionsParagraph>
                                <InstructionsParagraph>
                                    Because of this, it does not make sense to skip heading levels,
                                    such as from <strong>h2</strong> to <strong>h4</strong>, going
                                    down the page.
                                </InstructionsParagraph>
                            </InstructionsContainer>
                        </ButtonIconDropdown>
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
                    </InstructionsParagraph>
                    <strong>
                        <code>
                            <pre>npm run start:test</pre>
                        </code>
                    </strong>
                    <InstructionsParagraph className="section-instructions">
                        This will open a new browser window, open the <strong>cypress GUI</strong>{' '}
                        while running the <strong>pa11y</strong> tests all at once.
                    </InstructionsParagraph>
                    <InstructionsParagraph className="section-instructions">
                        You will be able to see the readout <strong>both</strong> within the{' '}
                        <strong>cypress GUI</strong> and within the <strong>terminal window</strong>
                        , (You may need to scroll up within the terminal window to see the{' '}
                        <strong>pa11y</strong> errors)
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
                <Target id="contrast-target" ref={contrastRef} />
                <LinkContainer className="heading-order-link-container">
                    <Link
                        id="link-1"
                        href="https://webaim.org/techniques/semanticstructure/#nature"
                        messageChildren={'Go to w3.org to learn more about semantic DOM structure'}
                        title="link to webaim semantic structure docs"
                        className="heading-order-reference-link"
                    >
                        <SolutionIcon />
                    </Link>
                    <Link
                        id="link-1"
                        href="https://webaim.org/techniques/semanticstructure/#headings"
                        messageChildren={'Challenge: Try to make the heading order accessible'}
                        title="link to accessible heading order challenge practice"
                        className="heading-order-challenge-link"
                    >
                        <ChallengeIcon />
                    </Link>
                </LinkContainer>
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
                        <ButtonIconDropdown
                            id="form-exercise-learn-button"
                            className="learn-button form-exercise-learn-button"
                            headingChildren={'Why is this important'}
                        >
                            <InstructionsContainer>
                                <InstructionsParagraph className="heading-order-learn-button-instructions">
                                    Contrast and color use are vital to accessibility. Users,
                                    including users with visual disabilities, must be able to
                                    perceive content on the page. There is a great deal of fine
                                    print and complexity within the Web Content Accessibility
                                    Guidelines (WCAG) 2 that can easily confuse web content creators
                                    and web accessibility evaluators. This article pulls together
                                    the terms and principles needed to understand WCAG 2
                                    requirements for contrast and color.
                                </InstructionsParagraph>
                                <InstructionsParagraph className="heading-order-learn-button-instructions">
                                    In WCAG 2, contrast is a measure of the difference in perceived
                                    <strong>luminance or brightness</strong> between two colors (the
                                    phrase "color contrast" is never used).
                                </InstructionsParagraph>
                                <InstructionsParagraph>
                                    This brightness difference is expressed as a ratio ranging from{' '}
                                    <strong>1:1</strong> (e.g.{' '}
                                    <strong>white text on a white background</strong> ) to
                                    <strong>21:1</strong> (e.g.,{' '}
                                    <strong>black text on a white background</strong>).
                                </InstructionsParagraph>
                            </InstructionsContainer>
                        </ButtonIconDropdown>
                        Accessibility with Contrast Ratio
                    </H1>
                </Header>
                <InstructionsContainer className="Instructions-container color-contrast-instructions-container">
                    <InstructionsParagraph className="section-instructions">
                        Choose a swatch from the <strong>Aurora swatch collection</strong> OR use
                        the inputs to search for a custom color for{' '}
                        <strong>background color</strong> then, change the{' '}
                        <strong>font color</strong> the same way.
                    </InstructionsParagraph>
                    <InstructionsParagraph className="section-instructions">
                        Once you have chosen your colors, in your terminal change directories into
                        the <strong>cypress folder</strong> then, run this command in your terminal:{' '}
                    </InstructionsParagraph>
                    <strong>
                        <code>
                            <pre>npm run start:test</pre>
                        </code>
                    </strong>
                    <InstructionsParagraph className="section-instructions">
                        This will open a new browser window, open the <strong>cypress GUI</strong>{' '}
                        while running the <strong>pa11y</strong> tests all at once. You will be able
                        to see the readout <strong>both</strong> within the{' '}
                        <strong>cypress GUI</strong> and within the <strong>terminal window</strong>
                        . (You may need to scroll up within the terminal window to see the{' '}
                        <strong>pa11y</strong> errors)
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
                <Target id="font-size-target" ref={fontSizeRef} />
                <LinkContainer className="contrast-ratio-link-container">
                    <Link
                        id="link-1"
                        href="https://webaim.org/articles/contrast/"
                        messageChildren={'Go to w3.org to learn more about contrast ratio'}
                        title="link to accessible contrast ratio references"
                        className="form-reference-link"
                    >
                        <SolutionIcon />
                    </Link>
                    <Link
                        id="link-1"
                        href="https://webaim.org/articles/contrast/#ratio"
                        messageChildren={'Challenge: Try and find colors that pass contrast ratio'}
                        title="link to accessible contrast ratio documents"
                        className="contrast-ratio-challenge-link"
                    >
                        <ChallengeIcon />
                    </Link>
                </LinkContainer>
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
                        <ButtonIconDropdown
                            id="color-contrast-exercise-learn-button"
                            className="learn-button color-contrast-exercise-learn-button"
                            headingChildren={'Why is this important?'}
                        >
                            <InstructionsContainer>
                                <InstructionsParagraph className="heading-order-learn-button-instructions">
                                    <strong>Typefaces</strong> are groups of designed text
                                    characters, such as <strong>Arial, Helvetica</strong>, and{' '}
                                    <strong>Times New Roman</strong>.
                                </InstructionsParagraph>
                                <InstructionsParagraph>
                                    <strong>Fonts</strong> are <strong>sub-sets</strong> of
                                    typefaces that have a consistent appearance, such as a 14 point
                                    and bold font in the Arial typeface. Typography—how typefaces
                                    and fonts present text—is very impactful on reading, which is a
                                    core component of visual accessibility.
                                </InstructionsParagraph>
                                <InstructionsParagraph className="heading-order-learn-button-instructions">
                                    <strong>WCAG 2.0 AA</strong> requires a contrast ratio of at
                                    least <strong>4.5:1</strong> for <strong>normal text</strong>{' '}
                                    and <strong>3:1</strong> for <strong>large text</strong>.
                                </InstructionsParagraph>
                                <InstructionsParagraph>
                                    <strong>WCAG 2.1</strong> requires a contrast ratio of at least{' '}
                                    <strong>3:1</strong> for{' '}
                                    <strong>graphics and user interface components</strong> (such as
                                    form input borders).
                                </InstructionsParagraph>
                                <InstructionsParagraph>
                                    <strong>WCAG 2.1 AAA</strong> Level requires a contrast ratio of
                                    at least <strong>7:1</strong> for <strong>normal text</strong>{' '}
                                    and
                                    <strong>4.5:1</strong> for <strong>large text</strong>.
                                </InstructionsParagraph>
                                <InstructionsParagraph>
                                    <strong>Colorzilla</strong> is an excellent tool for extracting
                                    the color value from any page element. Additionally,{' '}
                                    <strong>WAVE</strong> can analyze contrast ratios for all page
                                    text elements at once.
                                </InstructionsParagraph>
                            </InstructionsContainer>
                        </ButtonIconDropdown>
                        Accessibility with Contrast Ratio and Font Size Exercise
                    </H1>
                </Header>
                <InstructionsContainer className="Instructions-container color-contrast-font-size-instructions-container">
                    <InstructionsParagraph className="section-instructions">
                        Below you will see the official <strong>Aurora font sizes</strong> within
                        each card starting from largest to smallest.
                    </InstructionsParagraph>
                    <InstructionsParagraph className="section-instructions">
                        Choose a swatch from the <strong>Aurora swatch collection</strong> OR use
                        the inputs to search for a custom color for <strong>font color</strong>{' '}
                        then, change the <strong>background color</strong> to see differences with
                        color contrast combined with the <strong>Aurora font sizes</strong>.
                    </InstructionsParagraph>
                    <InstructionsParagraph className="section-instructions">
                        Once you have chosen your colors, in your terminal change directories into
                        the <strong>cypress folder</strong> then, run this command in your terminal:{' '}
                    </InstructionsParagraph>
                    <strong>
                        <code>
                            <pre>npm run start:test</pre>
                        </code>
                    </strong>
                    <InstructionsParagraph className="section-instructions">
                        This will open a new browser window, open the <strong>cypress GUI</strong>{' '}
                        while running the <strong>pa11y</strong> tests all at once. You will be able
                        to see the readout <strong>both</strong> within the{' '}
                        <strong>cypress GUI</strong> and within the <strong>terminal window</strong>
                        . (You may need to scroll up within the terminal window to see the{' '}
                        <strong>pa11y</strong> errors)
                    </InstructionsParagraph>
                </InstructionsContainer>
                <ColorPickerDynamic
                    id="color-contrast-h1-picker"
                    className="Color-contrast-h1-picker"
                    dataCy="color-contrast-h1-picker"
                >
                    <ColorPickerAuroraText
                        id="color-contrast-h1-swatch-picker"
                        className="Color-contrast-h1-swatch-picker"
                        dataCy="color-contrast-h1-swatch-picker"
                    >
                        <H1 id="heading-1" className="Heading-1" dataCy="heading-1">
                            44px
                        </H1>
                        <H2 id="heading-2" className="Heading-2" dataCy="heading-2">
                            36px
                        </H2>
                        <H3 id="heading-3" className="Heading-3" dataCy="heading-3">
                            28px
                        </H3>
                        <H4 id="heading-4" className="Heading-4" dataCy="heading-4">
                            24px
                        </H4>
                        <H5 id="heading-5" className="Heading-5" dataCy="heading-5">
                            20px
                        </H5>
                        <H6 id="heading-6" className="Heading-6" dataCy="heading-6">
                            16px
                        </H6>
                        <H6 id="heading-7" className="Heading-7" dataCy="heading-7">
                            14px
                        </H6>
                        <H6 id="heading-8" className="Heading-8" dataCy="heading-8">
                            12px
                        </H6>
                    </ColorPickerAuroraText>
                </ColorPickerDynamic>
                <LinkContainer className="font-color-contrast-ratio-link-container">
                    <Link
                        id="link-1"
                        href="https://webaim.org/techniques/fonts/"
                        messageChildren={'Go to WebAIM to learn more about Typefaces and Fonts'}
                        title="link to learn more about Typefaces and Fonts"
                        className="font-color-contrast-ratio-reference-link"
                    >
                        <SolutionIcon />
                    </Link>
                    <Link
                        id="link-1"
                        href="https://webaim.org/techniques/textlayout/"
                        messageChildren={'Go to WebAIM to learn more about Text Layout'}
                        title="link to learn more about text leayout"
                        className="font-color-contrast-ratio-reference-link"
                    >
                        <InnovationIcon />
                    </Link>
                    <Link
                        id="link-1"
                        href="https://webaim.org/resources/contrastchecker/"
                        messageChildren={'Go to WebAIM to learn more about Contrast Checking'}
                        title="link to learn more about constrast checking"
                        className="font-color-contrast-ratio-reference-link"
                    >
                        <IdeaIcon />
                    </Link>
                    <Link
                        id="link-1"
                        href="https://webaim.org/articles/contrast/#ratio"
                        messageChildren={
                            'Challenge: Explore how font sizes work with contrast ratio'
                        }
                        title="link to accessible contrast ratio documents"
                        className="font-color-contrast-ratio-challenge-link"
                    >
                        <ChallengeIcon />
                    </Link>
                </LinkContainer>
            </Section>
        </AppContainer>
    );
};

const Target = styled.div`
    width: 0;
    height: 0;
    border: none;
    padding: 0;
    margin: 0;
`;

const NavContainer = styled.nav`
    display: flex;
    flex-flow: row;
    justify-content: space-evenly;
    background-color: #0c2e5e;
    padding: 1rem 0;
    min-width: 39rem;
`;

const LinkContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    & .Link-parent-container {
        margin-right: 1.5rem;
    }
`;

const InstructionsContainer = styled.div`
    background-color: #051830;
    padding: 1rem 0.5rem;
    border-radius: 0.25rem;
    & strong {
        color: #2ddfff;
        & code {
            & pre {
                font-size: 1.5rem;
                letter-spacing: 1.5px;
                padding: 0.5rem 2rem;
            }
        }
    }
`;

const InstructionsParagraph = styled.p`
    font-size: 1.25rem;
    color: #ffffff;
    letter-spacing: 0.5px;
    font-weight: 300;
    margin: 1rem;
    line-height: 1.3;
`;

const SectionLogo = styled.div`
    margin: 0 1.5rem 0 0;
    background-color: #030c19;
    width: 5rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 0.25rem;
`;

const AppContainer = styled.section`
    font-family: Helvetica, sans-serif;
    font-size: 1rem;
    margin: 0;
    padding: 10rem 0 0 0;
    background-color: #092347;

    & .App-header-container {
        font-size: 1.5rem;
        background-color: #0643ad;
        margin: 0;
        padding: 0;
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        position: fixed;
        top: 0;
        z-index: 3;
        width: 100%;
        border-bottom: 1px solid black;
        box-shadow: 0px 3px 14px 0px rgba(0, 0, 0, 0.5);
        & .Logo-container {
            display: flex;
            flex-flow: row nowrap;
            background-color: #030618;
            padding: 1rem 1.5rem;
            margin: 0;
            & > svg {
                width: 90px;
                height: 90px;
            }
        }

        & .App-heading-1 {
            margin: 0;
            padding: 0 1.5rem;
            color: #ffffff;
            display: flex;
            align-items: center;
            width: 100%;
            background-color: #051930;
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
    .Introduction-section,
    .Color-contrast-font-size-section {
        border: 2px solid #061831;
        background-color: #0c2e5e;
        padding: 1rem 1.5rem 2rem;
        margin: 2rem;
        border-radius: 0.5rem;
        box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
        min-width: 43.5rem;
        & header {
            & .Heading-1 {
                display: flex;
                align-items: center;
                color: #ffffff;
                margin: 0;
                padding: 0;
                letter-spacing: 0.5px;
                & .Button-icon-button-dropdown {
                    margin: 0 1.25rem 0 0;
                }
            }
        }
    }
    & .Svg-div-container {
        flex-flow: row wrap;
        justify-content: space-evenly;
        max-width: 70rem;
        margin: 0 auto;
        & .section-logo {
            width: 17rem;
            height: 10rem;
            margin: 1rem;
            display: flex;
            flex-flow: column;
            padding: 1rem;
            & > svg {
                width: 80px;
                height: 80px;
            }
            & > p {
                color: #ff581f;
            }
        }
    }
    & .svg-div-second-container {
        max-width: 50rem;
    }
    & .Introduction-section {
        background-color: #051830;
        box-shadow: none;
        & .section-heading {
            font-size: 1.75rem;
            color: #ffffff;
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            background-color: #0c2e5e;
            padding: 1rem 1.5rem;
            border-radius: 0.25rem;
        }
    }
    & .Color-contrast-container {
        margin: 2rem 0 1.5rem;
    }
    & .Form-section {
        & .Form {
            margin: 2rem 0;
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
            margin: 2rem 0 2rem;
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
            margin: 2rem 0;
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
        & .Color-picker-dynamic-parent-container {
            background-color: #082347;
            margin: 2rem 0 2rem;
            padding: 2rem 1.5rem 1.5rem;
            border-radius: 0.25rem;
            & .color-picker-dynamic-popover {
                position: absolute;
                margin: 2.25rem 0 0 31.5rem;
            }
            & .color-picker-container {
                margin: 2rem auto;
                display: flex;
                flex-flow: row-reverse;
                justify-content: space-between;
                min-width: 34rem;
                border-radius: 0.25rem;
                box-shadow: 3px 10px 11px 0px rgba(0, 0, 0, 0.5);
                border-top: 4px solid #ff581f;
                & .Color-picker-button {
                    position: absolute;
                    margin: -1.75rem 0 0;
                }
                & .color-picker-aurora-text-button {
                    margin: -1.75rem 0 0;
                }
                & .color-picker-dynamic-child-container {
                    width: 100%;
                    & .color-picker-parent-container {
                        & .text-color-picker-container {
                            & .color-picker-popover {
                                position: absolute;
                                margin: 2rem 0 0;
                            }
                        }
                    }
                }
            }
        }
        & .color-picker-parent-container {
            & .color-picker-aurora-text-child-container {
                display: flex;
                justify-content: space-around;
                align-items: center;
                & .Heading-1 {
                    font-size: 2.75rem;
                }
                & .Heading-2 {
                    font-size: 2.25rem;
                }
                & .Heading-3 {
                    font-size: 1.75rem;
                }
                & .Heading-4 {
                    font-size: 1.5rem;
                }
                & .Heading-5 {
                    font-size: 1.25rem;
                }
                & .Heading-6 {
                    font-size: 1rem;
                }
                & .Heading-7 {
                    font-size: 0.875rem;
                }
                & .Heading-8 {
                    font-size: 0.75rem;
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
    }
`;

export default App;
