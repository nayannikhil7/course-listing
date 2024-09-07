import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { setCourses } from '../redux/slices/courseSlice';
import CourseList from '../components/CourseList';

const CourseListing = () => {
    const dispatch = useDispatch();
    const courses = useSelector((state) => state.courses.courses);
    const navigate = useNavigate(); 

    useEffect(() => {
        
        const fetchCourses = async () => {
            const data = await fetch('http://localhost:3001/courses').then((res) => res.json());
            dispatch(setCourses(data));
        };

        fetchCourses();
    }, [dispatch]);

   
    const handleGoToDashboard = () => {
        navigate('/dashboard');
    };

    return (
        <div>
            
            <header className="header">
                <button className="dashboard-btn" onClick={handleGoToDashboard}>
                    Go to Dashboard
                </button>
                <img
                    src={'https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png'} // Use your avatar image
                    alt="User Avatar"
                    className="avatar"
                    onClick={handleGoToDashboard}
                />
            </header>

            <h1 className='heading'>Course Listing</h1>
            <CourseList courses={courses} />
        </div>
    );
};

export default CourseListing;
