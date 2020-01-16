import React from 'react';
import { Link } from 'react-router-dom';

const CategoryIndexItem = ({ category }) => {
    // console.log(`hello here is ${category.id}`);
    return (
        <Link to={`/createTask/${category.category_name}`} className='catgory' >
            {category.category_name}
        </Link>
    );

};

export default CategoryIndexItem;