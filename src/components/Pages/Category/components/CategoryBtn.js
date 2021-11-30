import React from 'react';

const CategoryBtn = (props) => {
    return (
        <>
             <button className='btn btn-warning core-category-btn my-3'>{props.title}</button>
        </>
    );
};

export default CategoryBtn;
