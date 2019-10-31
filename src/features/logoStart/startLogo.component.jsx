import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LogoContainer = styled(Link) `
    height: 750px;
    width: 70%;
    margin: auto
    display: fill;
    justify-content: centered;
    margin-bottom: 30px;
    background-image: url(/images/DWALogo.png);
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
`