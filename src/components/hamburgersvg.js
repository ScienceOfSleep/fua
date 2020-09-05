import React, {useState, useEffect} from "react";
import {css} from "@emotion/core";

const HamburgerSVG = (props) => {

    let opened = props.opened;
    let scrolled = props.scrolled;

    return<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" css={css`width: 50px; z-index: 999`} data-opened={opened} data-scrolled={scrolled}>
        <path className="cls-1" d="M20,15H80a27.79,27.79,0,0,1,8,3c5,3,5.39,6.91,6,13,1,10,3,49-3,52-4.47,2.24-12,3-12,3l-4-5L25,15" transform="translate(-20 -11.85)"
              data-opened={opened}
              data-scrolled={scrolled}
              css={css`
                        fill: none;
                        stroke: #ffffff;
                        stroke-miterlimit: 10;
                        stroke-width: 6px; 
                        stroke-dasharray: 60, 205;
                        transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
                        &[data-scrolled='true']{
                          stroke: #000000;
                        }
                        &[data-opened='true']{
                          transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
                          stroke-dasharray: 90, 207;
                          stroke-dashoffset: -149;
                        }
                      `}
        />
        <path className="cls-2" d="M20,50H80" transform="translate(-20 -11.85)"
              data-opened={opened}
              data-scrolled={scrolled}
              css={css`
                        fill: none;
                        stroke: #ffffff;
                        stroke-miterlimit: 10;
                        stroke-width: 6px; 
                        stroke-dasharray: 60, 60;
                        transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
                        &[data-scrolled='true']{
                          stroke: #000000;
                        }
                        &[data-opened='true']{
                          transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
                          stroke-dasharray: 1, 60;
                          stroke-dashoffset: -30;
                        }
                      `}
        />
        <path className="cls-1" d="M20,86H80a27.79,27.79,0,0,0,8-3c5-3,5.39-6.91,6-13,1-10,3-49-3-52-4.47-2.24-12-3-12-3l-4,5L25,86" transform="translate(-20 -11.85)"
              data-opened={opened}
              data-scrolled={scrolled}
              css={css`
                        fill: none;
                        stroke: #ffffff;
                        stroke-miterlimit: 10;
                        stroke-width: 6px; 
                        stroke-dasharray: 60, 205;
                        transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
                        &[data-scrolled='true']{
                          stroke: #000000;
                        }
                        &[data-opened='true']{
                          transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
                          stroke-dasharray: 90, 207;
                          stroke-dashoffset: -149;
                        }
                      `}
        />
    </svg>
}

export default HamburgerSVG