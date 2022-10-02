import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import landingPage from '../Images/landingPage.svg'
import './LandingPage.css'

function LandingPage() {
    return (
        <div className='landingPage'>
            <Container className='py-5 px-5'>
                <Row className=''>
                    <Col lg={6} className='desktopImg'>
                        <img src={landingPage} />
                    </Col>
                    <Col lg={6}>
                        <div className='allign'>
                            <div>
                                <div className='heading'>
                                    Imagine if
                                </div>
                                <div className='gradientHeading'>
                                    Snapchat
                                </div>
                                <div className='heading'>
                                    had events.
                                </div>

                                <p className='mt-3 para'>Easily host and share events with your friends across any social media.</p>

                                <img className='mobileImg mt-5 mx-auto' src={landingPage} />

                                <Link to='/create'>
                                    <button className='createButton mt-4'>🎉 Create my event</button>  
                                </Link>
                                
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage