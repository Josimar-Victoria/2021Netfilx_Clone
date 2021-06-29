import styled from "styled-components";
import { InputBase } from '@material-ui/core';

export const NetflixInput = styled(InputBase)`
  z-index: 30;
  background: #fff;
  padding: 10px;
  height: auto;
  border-radius: 5px;
  border: none;
  outline: none;
`
export const NetflixButtton = styled.button`
   background-color: red;
   border: none;
   z-index: 15;
   cursor: pointer;
   border-radius: 5px;
   text-transform: inherit;
   padding: 15px;
   font-size: 1.1rem;
   outline: none;
   color: white;
`