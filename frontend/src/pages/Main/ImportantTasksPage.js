import React from 'react';
import styled from 'styled-components';
import HeaderText from '../../components/HeaderText';
import AddTaskputInput from '../../components/AddTaskInput';
import TasksView from '../../components/TasksView';


const PageContainer = styled.div`
    margin: 0;
    width: 100%;
`;

const FixedHeader = styled.div`
    position: relative;
    width: 100%;
`;

const Scrollable = styled.div`
    overflow-y: auto;
    height: 100%;
`;


const ImportantTasksPage = (props) => {
    const now = new Date();
    return (
        <PageContainer>
            <FixedHeader>
                <HeaderText
                    text="Important"
                    align="left"
                />
                <AddTaskputInput />
            </FixedHeader>
            <Scrollable>
                <TasksView/>
            </Scrollable>
        </PageContainer>
    )
}

export default ImportantTasksPage;