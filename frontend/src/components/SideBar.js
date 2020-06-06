import React from 'react';
import styled from 'styled-components';
import { FaBars, FaSun, FaStar, FaHome } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSideBar, toggleMenuDisplay } from '../redux/actions/mainAppActions';


const HamburgerButton = styled.button`
    padding: 1.1rem;
    cursor: pointer;
    border: none;
    background-color: inherit;
    outline: none;

    &:hover{
        background-color: white;
    }

`;

const NavLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Hamburger = styled(FaBars)`
    color: #465efc;
    font-weight: 200;
    font-size: 1rem;
`;


const Link = styled(NavLink)`
    color: #34373d;
    text-decoration: none;
    padding: 0.8rem 1rem;
    font-weight: 300;
    font-size: 0.9rem;
    box-sizing: border-box;

    &:hover{
        background-color: white;
    }

    &.active{
        background-color: #DEDEDE;
    }

`;

const Icon = styled.span`
    transition: margin 0.9s;
    line-height: 1;
    vertical-align: top;
    font-size: 1.1rem;
`;

const LinkText = styled.span`
    margin: 0 0.5rem;
    line-height: 1;
    vertical-align: middle;
    transition: font-size 0.2s;
    box-sizing: border-box;
`;

const Counter = styled.span`
    float: right;
`;

const SidebarContainer = styled.div`
    width: ${props => props.sideBarMinimized ? "3.5vw" : "20vw"};
    min-width: ${props => props.sideBarMinimized ? "3.5vw" : "12vw"};
    background-color: whitesmoke;
    height: calc(100vh - 3rem);
    box-sizing: border-box;
    transition: 0.1s width;
    position: fixed;

    & ${Icon}{
        margin: ${props => props.sideBarMinimized ? "0 auto" : "0"};

        & + ${LinkText}{
            display: ${props => props.sideBarMinimized ? "none" : "inline"};
        }
    }
`;


const SideBar = () => {

    const mainAppState = useSelector(state => state.mainApp);
    const dispatch = useDispatch();

    const toggleSideBarSize = () => {
        dispatch(toggleSideBar());
    }

    return (
        <SidebarContainer
            sideBarMinimized={mainAppState.sideBarMinimized}
            menuDisplayed={mainAppState.menuDisplayed}>
            <HamburgerButton onClick={toggleSideBarSize}>
                <Hamburger />
            </HamburgerButton>
            <NavLinkContainer>
                <Link to="/app/myday">
                    <Icon>
                        <FaSun size="1rem" />
                    </Icon>
                    <LinkText>
                        My Day
                    </LinkText>
                </Link>
                <Link to="/app/important">
                    <Icon>
                        <FaStar size="1rem" />
                    </Icon>
                    <LinkText>
                        Important
                        <Counter>
                            3
                        </Counter>
                    </LinkText>
                </Link>
                <Link to="/app/tasks">
                    <Icon>
                        <FaHome size="1rem" color="green" />
                    </Icon>
                    <LinkText>
                        Tasks
                        <Counter>
                            3
                        </Counter>
                    </LinkText>
                </Link>
            </NavLinkContainer>
        </SidebarContainer>
    )
}

export default SideBar;