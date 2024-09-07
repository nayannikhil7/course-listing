import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './slices/courseSlice';
import studentsReducer from './slices/studentSlice';

export const store = configureStore({
    reducer: {
        courses: coursesReducer,
        students: studentsReducer,
    },
});
