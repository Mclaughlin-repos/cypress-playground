import React from 'react';
import styled from 'styled-components';

const H7: React.FC<{
    className?: string;
    id: string;
    children?: React.ReactNode;
    dataCy: string;
}> = ({ id, dataCy, children, className }) => {
    return (
        <H7Container id={id} className={className} data-cy={dataCy}>
            {children}
        </H7Container>
    );
};

const H7Container = styled.h6``;

export default H7;
