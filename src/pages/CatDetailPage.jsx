import React from "react";
import { useParams } from "react-router-dom";

const CatDetailPage = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>Cat Detail Page</h1>
            <p>Cat ID: {id}</p>
        </div>
    );
};

export default CatDetailPage;