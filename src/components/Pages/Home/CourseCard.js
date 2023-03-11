import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({course}) => {
    const {id,photoURL,title,summery}=course
    return (
        <div className="card w-80 bg-base-100 drop-shadow-2xl mt-12 mx-auto mb-12 h-100 rounded-xl ">
            <figure>
                <img className='w-full h-60 mask mask-parallelogram rounded-4xl' src={photoURL} alt="Shoes" />
            </figure>
                <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p>{summery.slice(0,100)}.....</p>
                    <div className="card-actions justify-center">
                        <Link to={`/courses/${id}`}><button className="btn btn-primary">Details</button></Link>
                        <Link to={`/enrollnow/${id}`}  className="btn btn-primary">Enroll Now</Link>
                    </div>
                </div>
        </div>
    );
};

export default CourseCard;