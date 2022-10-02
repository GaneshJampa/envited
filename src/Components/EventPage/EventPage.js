import { useEffect, useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import calender from '../Images/calender.svg';
import location from '../Images/location.svg';
import './EventPage.css'

function LandingPage() {

    const desktopImg = () => {
        return <img className='desktopCrPageImg' src={localStorage.getItem('media')} />
    }

    const mobileImg = () => {
        return <img className='mobileCrPageImg mb-3 mx-auto' src={localStorage.getItem('media')} />
    }

    const eventDet = () => {
        const { event, host, date, time, street, city, state, postCode } = JSON.parse(localStorage.getItem('event'));

        return (
            <>
                <div className='heading'>{event}</div>
                <p className='para'>Hosted by {host}</p>
            </>
        )
    }


    return (
        <div className='createPage'>
            <Container className='py-5 px-5'>
                <Row className=''>

                    {

                        <>
                            <Col lg={6}>
                                <div className=''>
                                    {mobileImg()}
                                    {eventDet()}
                                </div>
                            </Col>
                            <Col lg={6}>
                                {desktopImg()}
                            </Col>
                        </>
                    }
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage