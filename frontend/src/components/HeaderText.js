import React from 'react';
import styled from 'styled-components';

const HeaderTextContainer = styled.p`
    margin: 0;
    color: ${props => props.color};
    font-weight: 400;
    font-size: 1.3rem;
    text-align: ${props => props.align}
`;


const HeaderText = props => {
    const { text, color, align } = props;
    return (
        <HeaderTextContainer color={color} align={align}>
            {text}
        </HeaderTextContainer>
    )
}

export default HeaderText;