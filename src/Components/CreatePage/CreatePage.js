import { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bdayCake from '../Images/Birthday cake.png'
import './CreatePage.css'

function LandingPage() {

    const [event, setEvent] = useState({});

    const handleChange = (e) => {
        setEvent({ ...event, [e.target.title]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(event);
        localStorage.setItem("event", JSON.stringify(event));
        window.location.replace("/event");
    }

    const imageUpload = (e) => {
        const file = e.target.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            localStorage.setItem('media', reader.result)
        }
        reader.readAsDataURL(file);
    };


    return (
        <div className='createPage'>
            <Container className='py-5 px-5'>
                <Row className=''>
                    <Col lg={6} className="mx-auto">
                        <div className=''>
                            <Form onSubmit={(e) => handleSubmit(e)}>
                                <Form.Group className="mb-3" controlId="event">
                                    <label>Event name</label>
                                    <input title="event" type="text" placeholder="Enter Event" onChange={(e) => handleChange(e)}></input>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="host">
                                    <label>Event Host</label>
                                    <input title="host" type="text" placeholder="Enter Host" onChange={(e) => handleChange(e)}></input>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="date">
                                    <label>Event Date</label>
                                    <input title="date" type="date" onChange={(e) => handleChange(e)}></input>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="time">
                                    <label>Event Time</label>
                                    <input title="time" type="time" onChange={(e) => handleChange(e)}></input>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="location">
                                    <label>Location</label>
                                    <input title="street" className="mb-2" type="text" placeholder="Enter Street Name" onChange={(e) => handleChange(e)}></input>
                                    <input title="city" className="mb-2" type="text" placeholder="Enter City" onChange={(e) => handleChange(e)}></input>
                                    <input title="state" className="mb-2" type="text" placeholder="Enter State" onChange={(e) => handleChange(e)}></input>
                                    <input title="postCode" className="mb-2" type="text" placeholder="Enter Postcode" onChange={(e) => handleChange(e)}></input>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="media">
                                    <label>Location</label>
                                    <input title="media" className="mb-2" type="file" onChange={(e) => imageUpload(e)}></input>
                                </Form.Group>

                                <button className='submitButton mt-4' type="submit">🎉 Create my event</button>
                            </Form>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage