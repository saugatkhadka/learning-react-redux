import { ADD_ARTICLE, DATA_LOADED } from "../constants/action-types";

export function addArticle(payload) {
  return {
    type: ADD_ARTICLE,
    payload   // A single attribute used since they have same name
  }
}

// This doesn't work, because actions must be plain js objects
export function getData() {
  return function (dispatch) {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        return dispatch({
          type: DATA_LOADED,
          payload: json
        });
      })
  }
}