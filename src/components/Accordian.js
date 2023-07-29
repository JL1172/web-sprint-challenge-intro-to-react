import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import ReactStrap from 'reactstrap';
import Films from "./Films";

const StyledDiv = styled.div`
display: ${props => props.result ? 'flex' : 'none'};
flex-direction : column;
align-items : flex-start;
margin-left: 5rem;
opacity : 0;
opacity : ${props => props.result ? 1 : 0};
transition : .4s;
`


export default function Accordian(props) {
    const {selectedCharacter,result, dataOfCharacter} = props;
    const {name,birth_year,mass,films} = dataOfCharacter;

    return (
        <>
        <StyledDiv result = {result}>
            <h5>Birth Year: {birth_year}</h5>
            <h5>Weight : {mass}</h5>
            { films.map((film,i)=> {
               return <Films key = {i}
                movie = {film}/>
            })   
            }
          
        </StyledDiv>
        </>
    )
}