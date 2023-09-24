import React from "react";
import { Link } from "react-router-dom";


function PageNotFound() {

    return (
        <>
    
            <div className="error-wrapper">
                <h3>Sorry Page Not Found </h3>
                <Link to=".." relative="path">Back to Home</Link>
            </div>
          
        </>
    )
}

export default PageNotFound;