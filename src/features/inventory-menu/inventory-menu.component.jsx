// import React from 'react'
import styled from 'styled-components'

// alternate method of using CSS within a component via javascript styled-components library
//unique classname automatically added to this div upon creation, prevents css style bleed thru
const GeneralInventoryMenu = styled.div`
     ${({isActive}) => isActive ? 'background-color:red;' : 'background-color:white;'}
        border: 3px solid white;
        border-Radius: 12px;
        width: 18%;
        height: 300px;
        position: absolute;
        left: -150px;
        top: 10%;

`
export default GeneralInventoryMenu;