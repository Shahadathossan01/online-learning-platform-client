import React from 'react';
import { Link } from 'react-router-dom';

const CourseCategory = ({category}) => {
    console.log(category)
    return (
        <div className='mt-4'>
            <Link className='btn btn-outline btn-success' to={`/documentation/${category.id}`}><button>{category.name}</button></Link>  
        </div>
    );
};

export default CourseCategory;