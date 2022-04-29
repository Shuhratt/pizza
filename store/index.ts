import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "@slices/productsSlice";

export const store = configureStore({
  reducer: {
    productsInfo: productsSlice,
  },
});
//Вывод типов "RootState" и "AppDispatch` из самого хранилища
export type RootState = ReturnType<typeof store.getState>;
// Предполагаемый тип: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
