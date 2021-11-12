import React from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from 'react-rating';

library.add(fullStar, emptyStar);

const SingleReview= ({review}) => {
    const {name, rating, comment} = review;
    return (
        <div className="col-lg-4 text-center">
        <div className="card mb-3 single-service p-3">
           
            <div className="d-flex justify-content-between my-3">
                 <h5 className="my-3 text-danger ">{name}</h5>
            </div>

            <h5 className="text-success">Rating: {rating}</h5>
            <Rating
                    readonly
                    style={{ color: "goldenrod" }}
                    initialRating={rating}
                    emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                    fullSymbol={<FontAwesomeIcon icon={fullStar} />}
                />
            <p className="text-justify">{comment}</p>
           
        </div>
    </div>
    );
};

export default SingleReview;