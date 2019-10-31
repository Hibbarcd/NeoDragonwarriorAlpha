import React from 'react'

import { StartUpImageContainer, StartUpOverlay } from './with-spinner.style.scss'

import './startup.style.scss'

const StartUpImageContainerTest = WrappedComponent => {
const StartUpImageContainer = ({onStart, ...otherProps}) => {
    return 
    // onStart ? 
    (
        <StartUpOverlay>
            <StartUpImageContainer />
        </StartUpOverlay>
    ) :
    (
        <WrappedComponent {...otherProps} />
    )
    return StartUpImageContainerTest
}
}
export default StartUpImageContainerTest