import React from 'react';
import { useDispatch } from 'react-redux';
import { selectCourse } from '../redux/slices/courseSlice';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSelectCourse = () => {
        dispatch(selectCourse(course));
        navigate(`/course/${course.id}`);
    };

    return (
        <div className="course-card" onClick={handleSelectCourse}>
            <img src={course.thumbnail} alt={course.name} />
            <h3>{course.name}</h3>
            <p>Instructor: {course.instructor}</p>
        </div>
    );
};

export default CourseCard;
