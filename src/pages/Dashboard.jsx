import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { enrollCourse, completeCourse } from '../redux/slices/studentSlice';

const Dashboard = () => {
    const dispatch = useDispatch();
    const enrolledCourses = useSelector((state) => state.students.enrolledCourses);
    const enrolledSet = new Set();

    useEffect(() => {
      
        const fetchCourses = async () => {
            const data = await fetch('http://localhost:3001/courses').then((res) => res.json());
            data.map((item) => {
                if (item.enrollmentStatus !== "Closed" && !enrolledSet.has(item.id)) {
                    enrolledSet.add(item.id);
                    dispatch(enrollCourse(item));
                }
            })
        };

        fetchCourses();
    }, []);


    const handleCompleteCourse = (courseId) => {
        dispatch(completeCourse(courseId));
    };

    return (
        <div>
            <h1>My Courses</h1>
            <div className="enrolled-course-list">
                {enrolledCourses.length === 0 ? (
                    <p>You are not enrolled in any courses yet.</p>
                ) : (
                    enrolledCourses.map((course) => (
                        <div key={course.id} className="course-card">
                            <img src={course.thumbnail} alt={course.name} />
                            <h3>{course.name}</h3>
                            <p>Instructor: {course.instructor}</p>
                            <p>Due Date: {course.dueDate || 'Not specified'}</p>
                            <div className="progress-bar">
                                <div
                                    className="progress"
                                    style={{ width: course.completed ? '100%' : '50%' }} 
                                >
                                    {course.completed ? 'Completed' : 'In Progress'}
                                </div>
                            </div>
                            {!course.completed && (
                                <button onClick={() => handleCompleteCourse(course.id)}>
                                    Mark as Completed
                                </button>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Dashboard;
