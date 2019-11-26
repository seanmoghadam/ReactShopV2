import React from "react";
import styled from "styled-components";
import { btnReset, DrawerWidth } from '../../Global/styles';

//Solution for prop warning of MUI
export const NavBarWrapper = styled.div`

width: 100%;
 display: flex;
 left: 0;
 background: white;
 height: 50px;
 align-items: center;

`;


export const NavBarInnerWrapper = styled.nav`
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
