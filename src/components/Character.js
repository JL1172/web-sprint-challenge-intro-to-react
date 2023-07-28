// Write your Character component here
import React, {useState, useEffect} from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
display: flex;
justify-content: space-around;
border: 2px solid gray;
flex-wrap: wrap;
margin: 3rem;
backdrop-filter: blur(3px);
color: black;
`

export default function Character(props) {
    const {name, birthYear, dataOfCharacter} = props;

    return (
        <>
        <StyledDiv>
            <h3>{name}</h3>
            <h3>{birthYear}</h3>
        </StyledDiv>
        </>
    )
}
//*need characters name in dom 
