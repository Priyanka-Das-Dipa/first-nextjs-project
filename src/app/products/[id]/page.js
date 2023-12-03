import React from 'react';

const DynamicPage = ({params, searchParams}) => {
    // console.log(params);
    // console.log(searchParams);
    return (
        <div>
            This is Product dynamic page <strong>{params.id}</strong>  !!!
            This is Search Params <strong>{searchParams.category}</strong>  !!!
            
        </div>
    );
};

export default DynamicPage;