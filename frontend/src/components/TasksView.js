import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux'
import TaskCompleteToggle from './TaskCompleteToggle';

const ViewContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const Task = styled.div`
    display: flex;
    border-bottom: 1px solid #e5e5e5;
    width: 99%;
    flex-direction: row;
    align-items: center;
`;

const TaskButton = styled.button`
    border: none;
    height: 100%;
    width: 100%;
    padding: 1.1rem 1.1rem 1.1rem 0.3rem;
    background: none;
    outline: none;
    text-align: left;
    cursor: pointer;
    display: flex;
    flex-direction: row;

    &:hover{
        ${Task} & {
            background-color: whitesmoke;
            border-bottom: none;
        }
    }
`;

const BackgroundLines = styled.div`
    background: linear-gradient(180deg, white, white 3.25rem, #e5e5e5 52px, #e5e5e5 52px);
    background-size: 100% 53px;
    flex: 1;
`;

const TaskBody = styled.span`
    padding-left: 1.3rem;
    line-height: 1.5;
    vertical-align: middle;
`;

const TasksView = props => {
    const { children } = props;

    const taskState = useSelector(state => state.task)
    return (
        <ViewContainer>
            {taskState.tasks.map((task, index) => {
                return (
                    <Task key={index}>
                        <TaskButton>
                            <TaskCompleteToggle />
                            <TaskBody>
                                {task.taskBody}
                            </TaskBody>
                        </TaskButton>
                    </Task>
                )
            })}
            <BackgroundLines></BackgroundLines>
        </ViewContainer>
    )
}

export default TasksView;

