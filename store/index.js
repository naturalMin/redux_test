import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import reducer from './modules'

const makeStore = (context) => configureStore({
  reducer,
  devTools: true,
})//중앙데이터 저장소 생성

export const wrapper = createWrapper(makeStore, {
  debug: true //redux에 대해 자세한 설명을 볼 수 있음
});