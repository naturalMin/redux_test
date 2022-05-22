import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sayhelloActions from '../store/modules/sayhello'

export default function sayhello() {
  const dispatch = useDispatch();
  const value = useSelector(({ sayhello }) => sayhello.value);

  const hello = useCallback(({ value }) => {
    dispatch(sayhelloActions.hello({ value }));
  },[dispatch])

  const bye = useCallback(({ value }) => {
    dispatch(sayhelloActions.bye({ value }));
  },[dispatch]); 

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => hello({ value })}>-</button>
      <span>{value}</span>
      <button onClick={() => bye({ value })}>+</button>
    </div>
  )
}

