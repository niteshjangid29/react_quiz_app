import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './Dashboard.css'

const Dashboard = ({score}) => {

    const navigate = useNavigate();

    useEffect(()=>{
        if(!score){
            navigate('/dashboard');
        }
    }, [score, navigate]);

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div className='resultCard'>
                            <div className='resultCategory'>
                                <span>1.</span>
                                <h3>Category</h3>
                                <span>Easy</span>
                            </div>
                            <div className='date'>
                                <span>20:41</span>
                                <span>Friday</span>
                                <span>11/02/2022</span>
                            </div>
                            <div className='resultScore'>
                                <h3>Score: 2.5/10</h3>
                            </div>
                        </div>
                        <div className='resultCard'>
                            <div className='resultCategory'>
                                <span>1.</span>
                                <h3>Cartoon and Animations</h3>
                                <span>Medium</span>
                            </div>
                            <div className='date'>
                                <span>20:41</span>
                                <span>Friday</span>
                                <span>11/02/2022</span>
                            </div>
                            <div className='resultScore'>
                                <h3>Score: {score}/10</h3>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Dashboard
