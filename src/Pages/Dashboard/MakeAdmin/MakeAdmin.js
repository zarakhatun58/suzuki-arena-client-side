import React, { useState } from 'react';
import { Alert, Button, Form, Container } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();
    
    
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://stark-caverns-04377.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }

    return (
        <div>
             <h2>Make an Admin</h2>
            <Form onSubmit={handleAdminSubmit}>
                <Container 
                    className="width:50%"
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" >
                    </Container>
                <Button type="submit" variant="contained">Make Admin</Button>
            </Form>
            {success && <Alert variant="success">Made Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;