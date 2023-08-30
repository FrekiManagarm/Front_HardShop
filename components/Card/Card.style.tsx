import { styled } from "styled-components";

export const CardContainer = styled.div`
    width: 300px;
    box-shadow: 0px 0px 10px 0px #878787;
    padding: 1rem;
    border-radius: 0.5rem;
    margin: 1rem;

    &:hover {
        transition: 0.5s ease-in-out;
        scale: 1.05;
    }
`;

export const CardTopSection = styled.div`
    
`;

export const CardBottomSection = styled.div`
    padding-top: 10px;
    font-size: 18px;
    font-weight: 700;
`;