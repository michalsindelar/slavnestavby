import React from "react"
import styled from "styled-components"
import { Wrapper } from "./SocialIconsCss";

export default class SocialIcons extends React.Component {

    render() {
        return (
            <Wrapper>
                <a
                    href="http://trmalovavila.eu/eshop/knihy"
                    target="_blank"
                    rel="noopener"
                    className="side-link"
                >
                    Knihy
                </a>
                <a
                    href="http://www.trmalovavila.eu"
                    target="_blank"
                    rel="noopener"
                    className="side-link"
                >
                    O nás
                </a>
                <a
                    href="https://www.facebook.com/SlavneStavby/"
                    target="_blank"
                    rel="noopener"
                    style={{marginLeft: '25px'}}
                >

                    <img src={process.env.PUBLIC_URL + '/img/fb-icon.svg'} alt="Slavné stavby logo" />
                </a>

            </Wrapper>
        )
    }
}