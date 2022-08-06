import { Row, Col, Card, Avatar, Carousel } from 'antd';
import React from 'react';
import kutip from '../asset/kutip.png';
import { testimoni } from '../data/data';
import useWindowSize from '../useWindowSize';

function Testimoni() {
    const size = useWindowSize();
    return (
        <>
            <Row justify='space-around' style={{ paddingTop: '50px', paddingBottom: '30px' }}>
                <span style={{
                    textAlign: 'center',
                    fontWeight: 800,
                    fontSize: '40px',
                    color: '#C0C2C6',
                }}>Testimoni</span>
            </Row>
            {size.width > 600 ? (
                <>
                    <Row gutter={[20, 20]} style={{ padding: size.width > 600 ? '0 100px' : '0 25px' }}>
                        {testimoni.map((element,id) => (
                            <Col span={8} key={id} >
                                <Card style={{ borderRadius: '14px', overflow: 'hidden' }}>
                                    <Row style={{ padding: '30px' }}>
                                        <Col span={24}><img src={kutip} alt="kutip" style={{ width: '10%' }} /></Col>
                                        <Col span={24} style={{ paddingTop: '15px' }}>{element.review}</Col>
                                        <Col span={4} style={{ paddingTop: '15px' }}><Avatar src="https://joeschmoe.io/api/v1/random" size="large" /></Col>
                                        <Col span={20} style={{ paddingTop: '15px' }}>
                                            <Row>
                                                <Col span={24}><span style={{ fontWeight: 700, fontSize: '14px', color: '#333539' }}>{element.from}</span></Col>
                                                <Col span={24}><span style={{ fontWeight: 600, fontSize: '11px', color: '#94969B' }}>{element.status}</span></Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </>)
                : (
                    <Carousel className='carousel-testimoni' style={{ padding: '0 25px' }}>
                        {testimoni.map((element,id) => (
                            <Row key={id}>
                                <Col spam={24}>
                                    <Card style={{ borderRadius: '14px', overflow: 'hidden' }}>
                                        <Row style={{ padding: '30px' }}>
                                            <Col span={24}><img src={kutip} alt="kutip" style={{ width: '10%' }} /></Col>
                                            <Col span={24} style={{ paddingTop: '15px' }}>{element.review}</Col>
                                            <Col span={4} style={{ paddingTop: '15px' }}><Avatar src="https://joeschmoe.io/api/v1/random" size="large" /></Col>
                                            <Col span={20} style={{ paddingTop: '15px' }}>
                                                <Row>
                                                    <Col span={24}><span style={{ fontWeight: 700, fontSize: '14px', color: '#333539' }}>{element.from}</span></Col>
                                                    <Col span={24}><span style={{ fontWeight: 600, fontSize: '11px', color: '#94969B' }}>{element.status}</span></Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            </Row>
                        ))}
                    </Carousel>
                )}
        </>
    );
}

export default Testimoni;
