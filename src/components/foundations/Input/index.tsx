import React from 'react';
import styled from 'styled-components';

const Input: React.FC<{
    className?: string;
    id: string;
    children?: React.ReactNode;
    dataCy: string;
    type: string;
}> = ({ id, dataCy, children, className, type }) => {
    return (
        <InputComponent id={id} className={className} type={type} data-cy={dataCy}>
            {children}
        </InputComponent>
    );
};

const InputComponent = styled.input`
    border: 1px solid blue;
    font-size: 1rem;
`;

export default Input;
