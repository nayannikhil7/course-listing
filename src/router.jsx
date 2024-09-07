import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseListing from './pages/CourseListing';
import CourseDetails from './pages/CourseDetails';
import Dashboard from './pages/Dashboard';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CourseListing />} />
                <Route path="/course/:id" element={<CourseDetails />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;

