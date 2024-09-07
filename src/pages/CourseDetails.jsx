import React from 'react';
import { useSelector } from 'react-redux';

const CourseDetails = () => {
    const course = useSelector((state) => state.courses.selectedCourse);

    if (!course) {
        return <div>Select a course to see the details</div>;
    }

    return (
        <div>
            <h1>{course.name}</h1>
            <p>{course.description}</p>
            <p>Instructor: {course.instructor}</p>
            <p>Duration: {course.duration}</p>
            <p>Schedule: {course.schedule}</p>
            <p>Location: {course.location}</p>
            <p>Enrollment Status: {course.enrollmentStatus}</p>
            <p>Prerequisites: {course.prerequisites.join(', ')}</p>

            <h3>Syllabus:</h3>
            <ul>
                {course.syllabus.map((item, index) => (
                    <li key={index}>
                        Week {item.week}: {item.topic} - {item.content}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseDetails;
