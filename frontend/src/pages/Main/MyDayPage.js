import React from 'react';
import styled from 'styled-components';
import HeaderText from '../../components/HeaderText';
import formatDate from '../../helpers/formatDate';
import AddTaskputInput from '../../components/AddTaskInput'
import TasksView from '../../components/TasksView';


const PageContainer = styled.div`
    margin: 0;
    width: 100%;
    height: 100%;
`;

const DateText = styled.p`
    font-size: 0.8rem;
    font-weight: 300;
    padding: 0;
    margin: 0.5rem 0; 
    text-align: left;
`;

const FixedHeader = styled.div`
    position: relative;
    width: 100%;
`;

const Scrollable = styled.div`
    overflow-y: auto;
    height: 100%;
`;

const MyDayPage = (props) => {
    const now = new Date();
    return (
        <PageContainer>
            <FixedHeader>
                <HeaderText
                    text="My Day"
                    align="left"
                />
                <DateText>
                    {formatDate(now)}
                </DateText>
                <AddTaskputInput />
            </FixedHeader>
            <Scrollable>
                <TasksView/>
            </Scrollable>
        </PageContainer>
    )
}

export default MyDayPage;