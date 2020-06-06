import React from 'react';
import styled from 'styled-components';
import { FaCog } from 'react-icons/fa';

const TopBarContainer = styled.div`
    width: 100%;
    height: 3rem;
    background-color: #0078D7;
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    position: fixed;
`

const TopBarBrand = styled.div`
    width: 6rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BrandText = styled.span`
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
`

const TopBarLinks = styled.div`
    width: 15rem;
    height: 100%;
    display: flex;
    justify-content: flex-end;
`

const NavLink = styled.button`
    height: 100%;
    border: none;
    cursor: pointer;
    background-color: inherit;
    color: white;
    padding: 0 0.8rem;
    width: 3.2rem;
    transition: 0.1s ease-in;
    text-align: center;

    &:hover{
        background-color: #0062b0;
        color: white;
    }
`

const UserAvatar = styled.span`
    border-radius: 50%;
    height: 80%;
    background-color: darkgreen;
    padding: 0.5rem;
`

const TopBar = () => {
    return (
        <TopBarContainer>
            <TopBarBrand>
                <BrandText>
                    To Do
                </BrandText>
            </TopBarBrand>
            <TopBarLinks>
                <NavLink>
                    <FaCog size="1.3rem" />
                </NavLink>
                <NavLink>
                    <UserAvatar>
                        JP
                    </UserAvatar>
                </NavLink>
            </TopBarLinks>
        </TopBarContainer>
    )
}

export default TopBar;