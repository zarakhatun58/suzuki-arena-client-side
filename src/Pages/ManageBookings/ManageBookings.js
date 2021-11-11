import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ManageBookings.css';

const ManageBookings = () => {

    const [Bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/Bookings/')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete');
        if (proceed) {
            const url = `http://localhost:5000/Bookings/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remainingProducts = Bookings.filter(Booking => Booking._id !== id);
                        setBookings(remainingProducts);
                    }
                })
        }
    }
    return (
        <div className="manage-Booking-area py-5">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-12">
                        <div className="section-title text-center">
                            <h2>Manage Bookings</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="Booking-single">
                            <Table striped Bookinged>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>User Name</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        Bookings.map(Booking => <tr key={Booking._id}>
                                            <td>{Booking._id}</td>
                                            <td>{Booking.name}</td>
                                            <td>{Booking.price}</td>
                                            <td>{Booking.status}</td>
                                            <td>
                                                <Link to={`/update/${Booking._id}`}><button className="btn btn-primary">Update</button></Link>
                                                {/* to={`/products/update/${product._id}`} */}
                                                <button onClick={() => handleDelete(Booking._id)} className="btn btn-danger ms-2">Delete</button>
                                            </td>
                                        </tr>
                                        )}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageBookings;