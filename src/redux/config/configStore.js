import { configureStore, createSlice } from "@reduxjs/toolkit"; //createslice임포트 --> slice로 필요한 객체 넣을 거임
//configureStore: 작은 슬라이스를 모아서 store로 만들때(createstore를 추상호화한것)
import todoList from "../modules/todo";




export default configureStore({
  //state를 등록한다(객체를)
  reducer: {
    todoList: todoList.reducer, //작명 : createslice만든거.reducer
  },
});
