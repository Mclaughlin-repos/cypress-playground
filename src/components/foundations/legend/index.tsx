import React from 'react';
import styled from 'styled-components';

const Legend: React.FC<{
    className?: string;
    id: string;
    children?: React.ReactNode;
    dataCy: string;
}> = ({ id, dataCy, children, className }) => {
    return (
        <LegendContainer id={id} className={className} data-cy={dataCy}>
            {children}
        </LegendContainer>
    );
};

const LegendContainer = styled.legend`
    background-color: darkGreen;
    padding: 0.25rem;
    color: #ffffff;
    font-size: 1.25rem;
    letter-spacing: 0.5px;
    border-radius: 0.25rem;
`;

export default Legend;
