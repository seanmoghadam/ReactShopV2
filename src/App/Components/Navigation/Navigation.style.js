import React from "react";
import styled from "styled-components";
import { btnReset, DrawerWidth } from '../../Global/styles';

//Solution for prop warning of MUI
export const NavBarWrapper = styled.div`

position: fixed;
 z-index: 100;
 display: flex;
 left: 0;
 top: 0;
 background-color: white;
 height: 50px;
 align-items: center;
 width: ${props => props.isNavOpened ? "calc(100% - " + DrawerWidth + "px)" : "100%"};
 transition: width 225ms cubic-bezier(0, 0, 0.2, 1) 0ms, opacity 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
 box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.35);
`;

export const NavBar = styled.nav`
display: flex;
width: 100%;
justify-content: space-between;
padding: 5px 10px;
a {
color: black
}
`;

export const CartButton = styled.button`
${btnReset}
`;
