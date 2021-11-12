import React from 'react';
import { Container, Row } from 'react-bootstrap';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date())
    return (
        <Row container spacing={2}>
            <Container item xs={12} sm={5}>
                <p
                    date={date}
                    setDate={setDate}
                ></p>
            </Container>
            <Container item xs={12} sm={7}>
                {/* <PlaceOrder date={date}></PlaceOrder> */}
            </Container>
        </Row>
    );
};

export default DashboardHome;