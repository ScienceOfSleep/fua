import React, {useEffect, useState} from "react"
import {css} from "@emotion/core"
import styled from "@emotion/styled"
import {Link} from "gatsby";
import HamburgerSVG from "./hamburgersvg";

const Navbar = (props) => {

    const StyledLink = styled(Link)`
      display: block;
      text-decoration: none;
      color: #000000;
      background-color: #ffffff;
      &.currentPage{
        border-bottom: 2px solid #000000;
      }
      @media only screen and (min-width: 1120px) {
      color: #000000;
      background-color: transparent;
      &.currentPage{
      border-bottom: 2px solid #000000;
      }
      }
    `;

    const ListLink = props => (
        <li css={css`
              display: block;
              padding-top: .2rem;
              font-size: 1.2rem;
              font-family: var(--title-family);
              @media only screen and (min-width: 1120px) {
              display: inline-block;
              margin-left: 3rem;
              font-size: 1.5rem;
              }
            `}>
                <StyledLink
                    data-active={scrolled}
                    to={props.to}
                    activeClassName={'currentPage'}
                >
                    {props.children}
                </StyledLink>
        </li>
    );

    const [opened, setOpened] = useState(false)

    let scrolled = props.scrolled;

    return <nav
        css={css`
              display: flex;
              justify-content: flex-start;
              align-self: end;
              padding-left: 1rem;
              padding-bottom: 1rem;
              z-index: 999;
                @media only screen and (min-width: 40.063em) {
                  font-size: 1.5rem;
                  align-self: center;
                  margin-top: 1rem;
                }
                @media only screen and (min-width: 64.063em) {
                  justify-content: flex-end;
                  font-size: inherit;
                }
            `}
    >
        <a
            href="#main-menu"
            id="main-menu-toggle"
            className="menu-toggle"
            aria-label="Open main menu"
            data-active={scrolled}
            onClick={() => {
                if (opened === true) {
                    setOpened(false)
                }
                else {
                    setOpened(true)
                }
            }}
            data-opened={opened}
            css={css`
                  color: #ffffff;
                  padding-top: 1rem;
                  padding-right: 1rem;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  &[data-active='true']{
                    color: #000000;
                  }
                  @media only screen and (min-width: 1120px) {
                  display: none;
                  }
                `}
        >
            <HamburgerSVG opened={opened} scrolled={scrolled}/>
        </a>
        <ul
            id="main-menu"
            data-opened={opened}
            data-active={scrolled}
            css={css`
                  @media only screen and (max-width: 1120px) {
                    position: fixed;
                    display: none;
                    left: -200px;
                    height: auto;
                    overflow-y: auto;
                    overflow-x: visible;
                    transition: all .5s;
                    z-index: 998;
                    background-color: #ffffff;
                    padding-bottom: 1rem;
                    padding-right: 1rem;
                    border-right: 4px solid var(--brand-color);
                    border-bottom: 4px solid var(--brand-color);
                    //border-top: 4px solid var(--brand-color);
                    border-radius: .25rem;
                    }
                    &[data-opened='true'] {
                      display: block;
                      left: 0;
                      top: 0;
                      outline: none;
                      transition: all .5s;
                      animation: moveDown 0.5s ease-in-out;
                      &[data-active='true']{
                        border-top: 0;
                        top: 84px;
                      }
                      + .backdrop {
                        position: fixed;
                        display: block;  
                        left: 0;
                        top: 0;
                        width: 100vw;
                        height: 100vh;
                        z-index: 997;
                        background: rgba(0,0,0,.85);
                        cursor: default;
                        &[data-active='true']{
                          top: 86px;
                          height: calc(100vh - 86px);
                        }
                      }
                    }
                    @keyframes moveDown {
                      from {
                        transform: translateY(-50rem);
                      }
                      to {
                        transform: translateY(0);
                        &[data-active='true']{
                          transform: translateY(84px);
                        }
                      }
                    }
              @media only screen and (min-width: 1120px) {
                padding: 0;
                margin: 0;
              }
            `}
        >
            <ListLink to="/">Home</ListLink>
            <ListLink to="/events">Events</ListLink>
            <ListLink to="/get-involved">Get Involved</ListLink>
            <li
                css={css`
                      list-style: none;
                      padding-top: .2rem;
                      @media only screen and (min-width: 1120px) {
                        display: none;
                      }
                    `}
            >
                    <a
                        aria-label="Close main menu"
                        onClick={() => {
                            if (opened === true) {
                                setOpened(false)
                            }
                            else {
                                setOpened(true)
                            }
                        }}
                        data-opened={opened}
                        css={css`
                                  color: #000000;
                                  background-color: #ffffff;
                                  text-decoration: none;
                                  display: block;
                                  font-size: 1.2rem;
                                  font-family: var(--title-family);
                                  @media only screen and (min-width: 1120px) {
                                    display: none;
                                    font-size: 1.5rem;
                                  }
                                `}
                    >
                        Close
                    </a>
            </li>

        </ul>
        <a
            className="backdrop"
            tabIndex="-1"
            onClick={() => {
                if (opened === true) {
                    setOpened(false)
                }
                else {
                    setOpened(true)
                }
            }}
            data-active={scrolled}
            hidden
        >
        </a>
    </nav>
}

export default Navbar