import React from 'react';
import styled from 'styled-components';
import { BsCheck } from 'react-icons/bs'

const ToggleWrapper = styled.div`
    border-radius: 50%;
    background: transparent;
    border: 1px solid green;
    width: 1rem;
    height: 1rem;
    padding: 0.05rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ToggleIcon = styled(BsCheck)`
    font-size: 0.8rem;
    color: green;  
`;

const TaskCompleteToggle = props => {
    return (
        <ToggleWrapper>
            <ToggleIcon />
        </ToggleWrapper>
    )
}

export default TaskCompleteToggle;