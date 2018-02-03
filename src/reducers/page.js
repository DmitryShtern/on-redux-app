import { combineReducers } from "redux"
import { SET_YEAR } from "../constants/Page"

function year(state = 2016, action) {
  switch (action.type) {
    case SET_YEAR:
      return action.payload
    default:
      return state
  }
}

function photos(state = [], action) {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers({
  year,
  photos,
})
