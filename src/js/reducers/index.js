import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    // `.push` This breaks the immutability
    // state.articles.push(action.payload);

    // We assign the current state to an empty object
    // and concat the action payload to the new state
    // Makes a copy of the initial state and the new changes with it
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  // Return same original array
  return state;
}

export default rootReducer;