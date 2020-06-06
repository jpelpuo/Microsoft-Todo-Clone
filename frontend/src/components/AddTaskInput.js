import React, { useRef } from 'react';
import styled from 'styled-components';
import AddTaskButton from './AddTaskButton';
import AddToggleButton from './AddToggleButton';
import { addingTask, clearAddingTask, taskInputValueChanged, addTask } from '../redux/actions/taskActions';
import { useDispatch, useSelector } from 'react-redux'

const TaskInput = styled.input`
    outline: none;
    padding: 0.8rem;
    font-size: 0.9rem;
    box-sizing: border-box;
    border: none;
    width: 100%;
`;

const TaskInputWrapper = styled.div`
    border-bottom: ${props => props.adding ? "1px solid #34373d" : "1px solid lightgray"};
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const TaskInputForm = styled.form`
    margin: 0;
    display: flex;
    flex-direction: row;
    width: 100%;
`;


const AddTaskputInput = props => {

    const taskState = useSelector(state => state.task);
    const dispatch = useDispatch();

    const taskInputEl = useRef(null);

    const handleInputFocus = () => dispatch(addingTask());

    const handleInputFocusLost = () => dispatch(clearAddingTask());

    const handleInputValueChange = () => {
        const taskInput = taskInputEl.current.value;
        if (taskInput === ""){
            dispatch(taskInputValueChanged(false));
            return;
        }
        dispatch(taskInputValueChanged(true));
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        const taskBody = taskInputEl.current.value;
        dispatch(addTask(taskBody));
        dispatch(taskInputValueChanged(false));
        taskInputEl.current.value = "";
    }

    return (
        <TaskInputWrapper adding={taskState.addingTask}>
            <AddToggleButton color="gray" />
            <TaskInputForm onSubmit={handleSubmit}>
                <TaskInput
                    type="text"
                    placeholder="Add a task"
                    onFocus={handleInputFocus}
                    onBlur={handleInputFocusLost}
                    onChange={handleInputValueChange}
                    ref={taskInputEl}
                />
                <AddTaskButton text="Add" type="submit" />
            </TaskInputForm>
        </TaskInputWrapper>
    )
}

export default AddTaskputInput;