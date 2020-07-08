
import React from 'react'
import Image from 'gatsby-image'
import styled from '@emotion/styled'

const BgImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  opacity: .75;
  grid-row-start: 1;
  grid-row-end: 4;
  grid-column-start: 1;
  grid-column-end: 2;
  z-index: -1;
`;

export default BgImage