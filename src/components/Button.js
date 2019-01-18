import styled from 'styled-components';

export const ButtonContainer = styled.button`
    text-transform : capitalize;
    background: transparent;
    border:.05rem solid var(--lightBlue);
    border-color: ${props => props.cart ? "var(--mainYellow)":"var(--lightBlue)"};
    color: ${props => props.cart? "var(--mainYellow)":"var(--lightBlue)"};
    border-radius: .5rem;
    padding: .3rem .5rem;
    cursor: pointer;
    &:hover{
        background:${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"}; 
        color: var(--mainBlue);
    }
    &:focus{
        outline : none;
    }
`;