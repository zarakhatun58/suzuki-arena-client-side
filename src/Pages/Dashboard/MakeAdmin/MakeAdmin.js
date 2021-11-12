import React, { useState } from 'react';
import { Alert, Button, Form  } from 'react-bootstrap';
import icon from '../../../image/icons/icon3.jpg'
import './MakeAdmin.css';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    
    
    
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    
    const handleAdminSubmit = e => {
        const user = { email };
        
        fetch('https://arcane-river-42711.herokuapp.com/makeAdmin', {
            method: 'PUT',
            headers: {
               
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setEmail('')
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }

    return (
        <div className="admin">
    
        <img  className="adIcon"
                    src={icon} alt=""/>
       
             <h4 className="text-success mt-2">Make an Admin <span><i class="fas fa-user-plus"></i></span></h4>
             
             <Form onSubmit={handleAdminSubmit}>
             <input className="w-50 "
             type="email"
             placeholder="email"
             onBlur={handleOnBlur}
             >       
             </input>
             <Button type="submit" variant="success">Make Admin</Button>
             </Form>
             
             
            {success && <Alert variant="success">Made Admin successfully!</Alert>}
        </div>
        
    );
};

export default MakeAdmin;