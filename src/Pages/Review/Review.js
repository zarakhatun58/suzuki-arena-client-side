import React,{useEffect, useState} from 'react';
import { Spinner } from 'react-bootstrap';
import SingleReview from './SingleReview';



const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://arcane-river-42711.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div className="text-center">
            
            <div className="container">
            <hr/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title mb-4">
                            <h3 className="text-danger">All Customer Reviews Show Here</h3>
                        </div>
                    </div>
                </div>
                {
                    reviews.length === 0 ?
                    <Spinner animation="border" />
                    :
                    <div className="row">
                    {
                        reviews.map(review => <SingleReview
                        key={review._id}
                        review={review}
                        ></SingleReview>)
                    }
                </div>
                }
            </div>
        </div>
    );
};

export default Review;