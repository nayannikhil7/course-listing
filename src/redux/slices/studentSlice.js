import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    enrolledCourses: [], 
};

const studentsSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        enrollCourse(state, action) {
            state.enrolledCourses.push(action.payload);
        },
        completeCourse(state, action) {
            const courseIndex = state.enrolledCourses.findIndex(
                (course) => course.id === action.payload
            );
            if (courseIndex !== -1) {
                state.enrolledCourses[courseIndex].completed = true;
            }
        },
    },
});

export const { enrollCourse, completeCourse } = studentsSlice.actions;
export default studentsSlice.reducer;
