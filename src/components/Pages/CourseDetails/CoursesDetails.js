import React from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import CourseCategory from './CourseCategory';

const CoursesDetails = () => {
    const course=useLoaderData()
    const {courses_category,id,photoURL,summery,title}=course
    console.log(courses_category)
    return (
            <div className='text-center'>
                <h1 className='text-5xl mt-12 font-bold mb-5'>{title}</h1>
                <p className='text-xl mb-5 font-bold '>{summery}</p>
                <h1 className='text-5xl mt-12 font-bold mb-5'>Course Category</h1>
                <div>
                    {
                        courses_category.map(category=><CourseCategory
                        key={category.id}
                        category={category}
                        ></CourseCategory>)
                    }
                </div>

            </div>
        
    );
};

export default CoursesDetails;