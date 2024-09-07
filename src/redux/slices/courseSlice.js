import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    courses: [],
    selectedCourse: null,
};

const coursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        setCourses(state, action) {
            state.courses = action.payload;
        },
        selectCourse(state, action) {
            state.selectedCourse = action.payload;
        },
    },
});

export const { setCourses, selectCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
