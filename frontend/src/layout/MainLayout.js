import React from 'react';
import TopBar from '../components/TopBar';
import styled from 'styled-components';
import SideBar from '../components/SideBar';
import { useSelector } from 'react-redux';


const MainContainer = styled.div`
   margin: 0;
   width: 100%;
   height: 100vh;
`;

const Content = styled.div`
    padding: 1.5rem;
    width: 100%;
    margin-left : ${props => props.sideBarMinimized ? "3vw" : "20vw"};
    transition: margin-left 0.15s;
    height: 100%;
`;

const MainContent = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 3rem;
    height: 75%;
`;

const MainLayout = props => {
    const appState = useSelector(state => state.mainApp);
    const {children} = props;
    
    return (
        <MainContainer>
            <TopBar />
            <MainContent>
                <SideBar />
                <Content sideBarMinimized={appState.sideBarMinimized}>
                    {children}
                </Content>
            </MainContent>
        </MainContainer>
    )
}

export default MainLayout;