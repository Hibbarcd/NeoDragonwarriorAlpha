
const initialState = {
  audioTrack: null,
  isPlaying: false,
};

export const audioReducer = (state = initialState, action) => {
  switch (action.type) {

  case 'GLOBAL_TRACK':
    return {
      ...state,
      audioTrack: action.payload,
    }

  default: return state
  }
}

export default audioReducer
