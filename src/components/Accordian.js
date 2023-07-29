import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import ReactStrap from 'reactstrap';
import Films from "./Films";

const rebelLogo = "https://cdn.icon-icons.com/icons2/318/PNG/512/Death-Star-icon_34500.png";
const sithLogo = 'https://www.iconarchive.com/download/i103540/sensibleworld/starwars/Lightsaber-Red.1024.png';
const kf2 = keyframes`
20% {
    border-left-color :  royalblue;
    border-left-color: royalblue;
    
}
30% {
    border-left-color : crimson;
    border-top-color: crimson;
}
40% {
    border-left-color : #22BA1A;
    border-top-color: #22BA1A;
}
50% {
    border-left-color : royalblue;
    border-top-color: royalblue;
   
}
60% {
    border-left-color : crimson;
    border-top-color: crimson;
    
}
70% {
    border-left-color : #22BA1A;
    border-top-color: #22BA1A;
}
80% {
    border-left-color :  royalblue;
    border-top-color : royalblue;
}
90% {
    border-left-color :  crimson;
    border-top-color : crimson;
}
100% {
    border-left-color :  #22BA1A;
    border-top-color : #22BA1A; 
}
`
const kfs1 = keyframes`

100% {
    transform: rotateY(360deg);
}
`
const StyledDiv = styled.div`
padding: 1rem;
border-left : 2px solid gray;
border-top : 2px solid gray;
border-radius : 5px;
display: ${props => props.result ? 'flex' : 'none'};
flex-direction : column;
align-items : flex-start;
margin-left: 5rem;
opacity : ${props => props.result ? 1 : 0};
backdrop-filter : blur(10px);
padding-bottom : 5rem;
margin-bottom : 1rem;
margin-right : 5rem;
color : whitesmoke;
animation : ${kf2} 10s ease-in-out infinite; 
img {
    height: 100px;
    width : 100px;
    background-color : transparent; 
    position : absolute;
    right: 5rem;
    top: 5rem;
    animation: ${kfs1} 10s ease infinite;
}
div {
    padding: .6rem;
}
h5 {
    padding-bottom: 1rem;
}

`


export default function Accordian(props) {
    const {selectedCharacter,result, dataOfCharacter} = props;
    const {name,birth_year,mass,films} = dataOfCharacter;

    return (
        <>
        <StyledDiv result = {result}>
            <h5>Birth Year: {birth_year}</h5>
            <h5>Weight : {mass}Kg</h5>
            <h5>Movies:</h5>
            { films.map((film,i)=> {
               return <Films key = {i}
                movie = {film}/>
            })   
            }
            <img src ={name === 'Darth Vader' ? sithLogo : rebelLogo}/>
        </StyledDiv>
        </>
    )
}