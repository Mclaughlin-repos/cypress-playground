import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonIcon from '../Button-icon/index';
import LearnIcon from '-!svg-react-loader?name=Icon!../../../../Icons/mind.svg';
import CloseIcon from '-!svg-react-loader?name=Icon!../../../../Icons/cancel.svg';

const ButtonDropdown: React.FC<{
    id: string;
    className?: string;
    children?: React.ReactNode;
    name?: string;
    value?: string;
}> = ({ id, className, children }) => {
    const [state, setState] = useState(false);
    const openState = () => {
        setState(true);
    };
    const closeState = () => {
        setState(false);
    };

    return (
        <ButtonDropdownContainer id={id} className={className}>
            <ButtonIcon
                id={`button-icon-button-dropdown-${id}`}
                className={`Button-icon-button-dropdown ${className}`}
                dataCy={`button-icon-button-dropdown-${id}`}
                name={`button-icon-button-dropdown-${id}`}
                value="Learn more"
                onClick={openState}
            >
                <LearnIcon />
            </ButtonIcon>
            {state && (
                <DropdownContainer
                    id={`button-dropdown-button-container-${id}`}
                    className={`Button-dropdown-button-container ${className}`}
                >
                    <CloseButtonContainer className="Close-button-container" onClick={closeState}>
                        <CloseIcon />
                    </CloseButtonContainer>
                    <MessageContainer>{children}</MessageContainer>
                </DropdownContainer>
            )}
        </ButtonDropdownContainer>
    );
};

const ButtonDropdownContainer = styled.div`
    transition: 1s ease-in-out;
`;
const DropdownContainer = styled.div`
    position: absolute;
    background-color: #030c18;
    border-radius: 0.5rem;
    box-shadow: 2px 5px 24px 2px rgba(0, 0, 0, 0.5);
    border: 1px solid black;
    margin: 1.75rem 0 0;
    &::before {
        position: absolute;
        background-color: #030c18;
        left: 1.5rem;
        top: -0.1rem;
        content: '';
        width: 29px;
        height: 29px;
        transform: translateY(-50%) rotate(45deg);
        border-top: 1px solid black;
        border-left: 1px solid black;
    }
`;
const CloseButtonContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;
    font-size: 1.25rem;
    height: 3.75rem;
    & svg {
        width: 26px;
        height: 26px;
        margin: 1rem;
    }
    &:hover {
        cursor: pointer;
    }
`;

const MessageContainer = styled.div`
    padding: 1rem 1.5rem;
`;
export default ButtonDropdown;
