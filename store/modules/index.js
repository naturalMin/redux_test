import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import sayhello from "./sayhello";

const reducer = (state, action) => {
  if(action.type === HYDRATE){
    return {
      ...state,
      ...action.payload
    };
  }
  return combineReducers({
    sayhello
    //여기에 정의한 reducer 모두 추가
  })(state, action);
}

export default reducer;