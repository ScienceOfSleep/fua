import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  background-color: var(--fua-pink);
  border-radius: .75em;
  padding: .8em 1.25em;
  cursor: pointer;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 2px;
  grid-area: buttonLink;
  &:hover, &:focus{
    background-color: var(--fua-blue);
  }
`;

const LinkButton = props => (
    <StyledLink to={props.to}>
        {props.content}
    </StyledLink>
);

export default LinkButton