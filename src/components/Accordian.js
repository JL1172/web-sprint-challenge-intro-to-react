import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import ReactStrap from 'reactstrap';


const StyledDiv = styled.div`
display: ${props => props.result ? 'flex' : 'none'};;
margin-left: 5rem;
opacity : 0;
opacity : ${props => props.result ? 1 : 0};
transition : .4s;
`


export default function Accordian(props) {
    const {selectedCharacter,result, dataOfCharacter} = props;
    const {name,birth_year,mass} = dataOfCharacter;

    return (
        <>
        <StyledDiv result = {result}>
            <h5>Birth Year: {birth_year}</h5>
        </StyledDiv>
        </>
    )
}