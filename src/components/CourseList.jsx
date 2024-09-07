import React, { useState } from 'react';
import CourseCard from './CourseCard';

const CourseList = ({ courses }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCourses = courses.filter(
        (course) =>
            course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='course-search'>
            <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="course-list">
                {filteredCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default CourseList;
