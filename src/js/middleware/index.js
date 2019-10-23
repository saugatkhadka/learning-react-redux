import { ADD_ARTICLE } from "../constants/action-types";

const forbiddenWords = ['spam', 'money'];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      // code stuff
      if (action.type === ADD_ARTICLE) {
        // Returns the word if it is forbidden
        const foundWord = forbiddenWords.filter(
          word => action.payload.title.includes(word)
        );
        // If there is atleast one forbiddenWord
        // dispatch the FOUND_BAD_WORD action type to the reducer
        if (foundWord.length) {
          return dispatch({ type: "FOUND_BAD_WORDS" });
        }
      }

      // If no exception or condition is triggered, the normal
      // flow of the application is restored by calling next with
      // the action parameter
      return next(action);
    }
  }
}

