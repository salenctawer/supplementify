import { configureStore } from "@reduxjs/toolkit";
import statisticSlice from "./slices/statisticSlice";
import userSlice from "./slices/userSlice";
import sidebarSlice from "./slices/sidebarSlice";

export const store = configureStore({
  reducer: {
    statistic: statisticSlice,
    user: userSlice,
    sidebar: sidebarSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;