import { createStore, combineReducers } from 'redux'
// import logger from 'redux-logger'


import playerReducer from '../config/redux/player/player.reducer'
import npcReducer from '../config/redux/npc/npc.reducer'
import enemyReducer from '../config/redux/enemy/enemies.reducer'
import mapReducer from '../config/redux/map/map.reducer'
import audioReducer from '../config/redux/audio/audio.reducer'
import dpadReducer from '../config/redux/d-pad/d-pad.reducer'
import userReducer from './redux/users/user.reducer'
import startUpReducer from './redux/startUp/startUp.reducer'
import userDropdownReducer from './redux/header-dropdown/user-dropdown.reducer'


const rootReducer = combineReducers({
  player: playerReducer,
  npc: npcReducer,
  enemy: enemyReducer,
  map: mapReducer,
  music: audioReducer,
  hidden: dpadReducer,
  user: userReducer,
  hiddenStart: startUpReducer,
  showMenu: userDropdownReducer,
})

// const middlewares = [logger]

const store = createStore(
  rootReducer,
  // applyMiddleware(...middlewares),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store;