import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const Spinner = styled.div`
    border: 0.2rem solid ${props => props.color};
    border-radius: 50%;
    border-top: 0.2rem solid white;
    width: ${props => props.size};
    height: ${props => props.size};
    animation ${spin} 0.7s linear infinite
`

export default Spinner;