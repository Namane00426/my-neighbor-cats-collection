import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CatDetailPage = () => {
    const { id } = useParams();
    const cats = useSelector(state => state.cats);
    const cat = cats.find(cat => cat.id.toString() === id);
    if (!cat) {
        return <div>Cat not found</div>;
    };

 return (
        <div>
            <h1>{cat.name}</h1>
            <p>{cat.description}</p>
        </div>
    );
};

export default CatDetailPage;