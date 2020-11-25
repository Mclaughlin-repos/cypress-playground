import React from 'react';
import styled, { css } from 'styled-components';

// not a structural component; for WCAG 2.1 AA compliance
const Div: React.FC<{
    className?: string;
    id: string;
    children?: React.ReactNode;
    dataCy: string;
}> = ({ id, dataCy, children, className }) => {
    return (
        <DivContainer id={id} data-cy={dataCy} className={className}>
            {children}
        </DivContainer>
    );
};

const DEFAULT_CONTENT_CONTAINER_STYLES = css`
    padding: 0;
`;

const DivContainer = styled.div`
    ${DEFAULT_CONTENT_CONTAINER_STYLES}
    display: flex;
    flex-flow: column;
    max-width: 18.75rem;
    margin: 1rem 0 1.5rem;
`;

export default Div;
