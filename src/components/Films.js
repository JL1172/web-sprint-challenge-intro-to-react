import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import ReactStrap from 'reactstrap'

export default function Films(props) {
    const {movie} = props;
    console.log(movie)
    return (
        <>
        <div>
            <li>{movie}</li>
        </div>
        </>
    )
}