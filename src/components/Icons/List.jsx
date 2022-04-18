import React from "react";
import styled from 'styled-components'
import { css } from "styled-components";
import { white } from "../../constants/colors";

const MobileStyle = css`
  fill: ${white};
  height: 2.5rem;
  width: 2.5rem;
  position: absolute;
  top: 50%;
  bottom: 50%;
  margin-top: auto;
  margin-bottom: auto;
  right: .6rem;
  display: none;
  z-index: 100;
  cursor: pointer;
  @media (max-width: ${500}px){
    display: block;
  }
`

const Svg = styled.svg`
  ${props => props.MobileDesign? MobileStyle : null};
`

const List = ({ MobileDesign, onClick }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="white"
      viewBox="0 0 16 16"
      MobileDesign = {MobileDesign}
      onClick = {onClick}
    >
      <path
        fillRule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
      />
    </Svg>
  );
};

export default List;
