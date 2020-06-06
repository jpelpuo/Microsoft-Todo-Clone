import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Button = styled.button`
    border: none;
    outline: none;
    background-color: inherit;
    text-transform: uppercase;
    cursor: pointer;
`;

const AddTaskButton = props => {
    const { text, type } = props;
    const taskState = useSelector(state => state.task);

    return (
        taskState.taskInputValueChanged && taskState.taskInputValueValid &&
        <Button type={type}>
            {text}
        </Button>


    )
};

export default AddTaskButton;