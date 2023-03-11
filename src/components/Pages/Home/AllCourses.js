import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';

const AllCourses = () => {
    const[courses,setCourses]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div className='mt-12'>
            <h1 className='text-center text-5xl font-bold text-info '>All Courses: {courses.length}</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 mx-auto'>
            {
                courses.map(course=><CourseCard
                key={course.id}
                course={course}
                ></CourseCard>)
            }
            </div>
        </div>
    );
};

export default AllCourses;