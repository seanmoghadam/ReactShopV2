import React from "react";
import styled from "styled-components";

export const NavBarWrapper = styled.div`
width: 100%;
display: flex;
left: 0;
top: 0;
position: fixed;
z-index: 100;
background: white;
height: 50px;
align-items: center;
`;

export const NavBar = styled.nav`
display: flex;
width: 100%;
justify-content: space-between;
padding: 5px 10px;
a {
color: black;
}

&:hover {

}

`;
