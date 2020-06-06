import React from 'react';
import styled from 'styled-components';
import HeaderText from '../../components/HeaderText';
import AddTaskputInput from '../../components/AddTaskInput'


const PageContainer = styled.div`
    margin: 0;
    width: 100%;
`;



const TasksPage = (props) => {
    const now = new Date();
    return (
        <PageContainer>
            <HeaderText text="Tasks" align="left"/>
            <AddTaskputInput/>
        </PageContainer>
    )
}

export default TasksPage;