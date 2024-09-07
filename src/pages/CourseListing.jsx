import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { setCourses } from '../redux/slices/courseSlice';
import CourseList from '../components/CourseList';
// import avatarImage from '../assets/avatar.png'; // Add an avatar image in your assets

const CourseListing = () => {
    const dispatch = useDispatch();
    const courses = useSelector((state) => state.courses.courses);
    const navigate = useNavigate(); // Initialize useNavigate hook

    useEffect(() => {
        // Fetch courses from the local JSON server
        const fetchCourses = async () => {
            const data = await fetch('http://localhost:3001/courses').then((res) => res.json());
            dispatch(setCourses(data));
        };

        fetchCourses();
    }, [dispatch]);

    // Function to navigate to the dashboard
    const handleGoToDashboard = () => {
        navigate('/dashboard');
    };

    return (
        <div>
            {/* Header with button and avatar */}
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
