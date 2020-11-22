import React from 'react';
import styled from 'styled-components';

const Label: React.FC<{
    className?: string;
    id: string;
    children?: React.ReactNode;
    dataCy: string;
    htmlFor?: string;
}> = ({ id, dataCy, children, className, htmlFor }) => {
    return (
        <LabelContainer id={id} className={className} htmlFor={htmlFor} data-cy={dataCy}>
            {children}
        </LabelContainer>
    );
};

const LabelContainer = styled.label`
    border: 1px solid red;
    font-size: 1rem;
`;

export default Label;
