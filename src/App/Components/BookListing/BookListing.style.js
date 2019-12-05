import styled from "styled-components";
import { breakpoints} from '../../Global/constants';
import {btnReset} from '../../Global/styles';

export const BookOverviewHeadline = styled.h1`

margin-top: 10px;


`;


export const BookOverviewList = styled.ul`
display: flex;
list-style: none;
margin: 0;
padding: 0;
width: 100%;
flex-flow: row wrap;
`;


export const BookOverviewListItem = styled.li`
flex-basis: calc(33.33% - 20px);
min-width: 100px;
padding: 5px;
margin: 5px;
box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.35);

@media screen and (min-width: ${breakpoints.breakpointM}) {
    flex-basis: calc(25% - 20px);
}

@media screen and (max-width: ${breakpoints.breakpointS}) {
    flex-basis: calc(50% - 20px);
}

@media screen and (max-width: ${breakpoints.breakpointXS}) {
    flex-basis: calc(100% - 20px);
}

img {
width: 100%;
}

p {
font-size: 11px;
}



`;

export const CartBtn = styled.button`
${btnReset}
`;


