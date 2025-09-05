/*
 * @Author: tiantian
 * @Date: 2025-06-05 15:08:15
 * @LastEditTime: 2025-09-05 10:43:14
 * @Description:
 */
import { applyMiddleware, compose, UnknownAction } from "redux";
import { routerMiddleware } from "react-router-redux";
import { thunk } from "redux-thunk"; //支持异步action
import { configureStore, ThunkAction, Action, Tuple } from "@reduxjs/toolkit";
import createMiddleware from "./middleware/clientMiddleware";
import axios from "../api/axios";
import { AxiosInstance } from "axios";
import walletReducer from "./features/walletSlice";

const store = configureStore({
  reducer: {
    wallet: walletReducer,
  },
  devTools: true,
  middleware: () => new Tuple(thunk), // 或返回getDefaultMiddleware().concat(customMiddleware)
});


export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
