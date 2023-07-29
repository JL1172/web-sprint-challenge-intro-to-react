// Write your Character component here
import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const kf = keyframes`
50% {
    opacity: 50%;
}

100% {
    opacity: 100%;
    
    }
`
const kf1 = keyframes`

100% {
    transform: translateX(600px);
}
`

const kf2 = keyframes`
20% {
    border-color: royalblue;
}
30% {
    border-color: crimson;
}
40% {
    border-color: #22BA1A;
}
50% {
    border-color: royalblue;
   
}
60% {
    border-color: crimson;
    
}
70% {
    border-color: #22BA1A;
}
80% {
    border-color : royalblue;
}
90% {
    border-color : crimson;
}
100% {
    border-color : #22BA1A; 
}
`




const StyledDiv = styled.div`
display: flex;
align-items: center;
border: 2px solid gray;
flex-wrap: wrap;
margin: 3rem;
backdrop-filter: blur(3px);
color: black;
padding-right: 1rem;
img {
    width: 70px;
    height: 60px;
    background-color: inherit;
    transform: rotate(90deg);
    margin-left: 1rem;
}
h3{
    animation: ${kf1} .5s ease-in forwards;
}
div {
    border: 1px solid gray;
    padding-left: 0;
    padding-left: 20rem;
   animation : ${kf2} 5s infinite linear; 
}
opacity: 0;
transition: .3s; 
animation: ${kf} 1s ease-in-out forwards;
`

export default function Character(props) {
    const {name, birthYear, dataOfCharacter,redLightSaber,greenLightSaber,selected} = props;

    return (
        <>
        <StyledDiv>
            <img className="images" src = {redLightSaber}/>
            <h3>{name}</h3>
           <div></div>
        </StyledDiv>
        </>
    )
}
//*need characters name in dom 
