import React from 'react';
import styled from 'styled-components';

const Button: React.FC<{
    className?: string;
    id: string;
    children?: React.ReactNode;
    dataCy: string;
    ariaRole?: string;
    disabled?: boolean;
    form?: string;
    formAction?: string;
    formEnctype?: string;
    formMethod?: string;
    formTarget?: string;
    name: string;
    value: string;
    buttonType?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    onChange?: () => void;
    onBlur?: () => void;
    onFocus?: () => void;
}> = ({
    id,
    dataCy,
    children,
    className,
    ariaRole,
    disabled,
    form,
    formAction,
    formEnctype,
    formMethod,
    formTarget,
    name,
    value,
    buttonType,
    onClick,
    onChange,
    onBlur,
    onFocus,
}) => {
    return (
        <ButtonContainer
            id={id}
            className={className}
            data-cy={dataCy}
            role={ariaRole}
            disabled={disabled}
            form={form}
            formAction={formAction}
            formEncType={formEnctype}
            formMethod={formMethod}
            formTarget={formTarget}
            name={name}
            value={value}
            type={buttonType}
            onClick={onClick}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        >
            {children}
        </ButtonContainer>
    );
};

const ButtonContainer = styled.button`
    background-color: #030c19;
    padding: 1rem;
    font-size: 1.25rem;
    letter-spacing: 0.5px;
    border-radius: 0.25rem;
    box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
    width: 5rem;
    height: 5rem;
    display: flex;
    align-items: center;
    border: none;
    transition: 250ms ease-in-out;
    border: 2px solid transparent;
    &:hover,
    &:focus {
        cursor: pointer;
        background-color: black;
        border-color: #ff5a15;
    }
`;

export default Button;
