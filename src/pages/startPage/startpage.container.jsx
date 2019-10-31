import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { selectIsGameLoaded } from '../../redux/startUp/startUp.selectors'
import StartUpImageContainerTest from '../../features/startup/startup.component'
import StartPage from './startpage.component'



const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsGameLoaded(state)
})

const StartPageImageContainer = compose(
    connect(mapStateToProps),
    StartUpImageContainerTest
)(StartPage)

export default StartPageImageContainer