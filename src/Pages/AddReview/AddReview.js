import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './AddReview.css';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
const {user} =useAuth()

    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/review', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-Booking py-5 text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title mb-4">
                        <h2 className="text-danger"> Add Your Favorite Feedback with Rating</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="single-add-Booking">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className="form-control mb-3" {...register("email")} value={user?.email} required />
                                <input className="form-control mb-3" {...register("name")} value={user?.displayName} required />
                                <input className="form-control mb-3" type="number" {...register("rating")} placeholder="rating(0-5)" required />
                                <textarea className="form-control mb-3" {...register("comment")} placeholder="comment" required />
                                <input className="btn btn-primary" type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;