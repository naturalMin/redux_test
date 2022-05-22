import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
  value: 'init'
}; //초기 상태 정의

const sayhelloSlice = createSlice({
  name: 'sayhello',
  initialState,
  reducers: {
    hello: (state) => ({...state, value: 'hello'}),
    bye: (state) => ({...state, value: 'bye'}),
  },
});
//createSlice: createAction + createReducer = createSlice

export const { hello, bye } = sayhelloSlice.actions; //액션 생성함수
export default sayhelloSlice.reducer; //리듀서