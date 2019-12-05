import styled from "styled-components";
import { DrawerWidth } from './Global/styles';


export const MainWrapper = styled.div`
display: flex;
flex-flow: row nowrap;
transform: translate3d(0, 0, 0);
`;

export const MainColWrapper = styled.div`
    display: flex;
    flex-flow: column;
    width: ${props => props.isNavOpened ? "calc(100% - " + DrawerWidth + "px)" : "100%"};
    transition: width 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    margin-top: 3em;
`;


export const ContentWrapper = styled.main`
    padding: 0 10px;
    transition: width 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
`;


export const DrawerWrapper = styled.div`

    width: ${props => props.isNavOpened ? DrawerWidth + "px" : 0};
    transition: width 225ms cubic-bezier(0, 0, 0.2, 1) 0ms, opacity 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    opacity: ${props => props.isNavOpened ? 1 : 0};
    box-shadow: ${props => props.isNavOpened ? "0px 0px 9px 0px rgba(0,0,0,0.35)" : 0};
    overflow: ${props => props.isNavOpened ? "unset" : "hidden"};
    position: fixed;
    right: 0;
    top: 0;
    z-index: 120;
`;




