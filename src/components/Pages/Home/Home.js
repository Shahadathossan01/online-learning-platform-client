import React from 'react';
import Footer from '../../Sharing/Footer/Footer';
import Header from '../../Sharing/Header/Header';
import AllCourses from './AllCourses';
import Slider from './Slider/Slider';
import StudentsReview from './StudentsReview';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <AllCourses></AllCourses>
            <StudentsReview></StudentsReview>
        </div>
    );
};

export default Home;