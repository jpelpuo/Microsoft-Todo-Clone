import React from 'react';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';
import { addingTask, clearAddingTask } from '../redux/actions/taskActions';
import { useDispatch, useSelector } from 'react-redux'

const ButtonWrapper = styled.div`
    margin: 0;
    display:flex;
    justify-content: center;
    align-items: center;
`;


const PlusButton = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0.5rem;
    background-color: inherit;
    display: ${props => props.adding ? "none" : "block"};
    color: #34373d;
`;

const CircleButton = styled.div`
    border-radius: 50%;
    border: 1px solid black;
    padding: 0.5rem;
    margin: 0 0.35rem;
    display: ${props => !props.adding ? "none" : "block"};
    cursor: pointer;
`;


const AddToggleButton = props => {
    const { color } = props;

    const taskState = useSelector(state => state.task);
    const dispatch = useDispatch();

    const handleButtonClick = () =>{
        dispatch(addingTask());
    }

    const handleCircleButtonClick = () => {
        dispatch(clearAddingTask())
    }

    return (
        <ButtonWrapper>
            <PlusButton adding={taskState.addingTask} onClick={handleButtonClick}>
                <FaPlus color={color} />
            </PlusButton>
            <CircleButton adding={taskState.addingTask} onClick={handleCircleButtonClick}/>
        </ButtonWrapper>
    )
}

export default AddToggleButton;