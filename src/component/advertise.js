import { Row, Col, Card, Carousel, Tag } from 'antd';
import React from 'react';
import trending from '../asset/trending.png';
import flashSale from '../asset/flashSale.png';
import rating from '../asset/rating.png';
import clock from '../asset/clock.svg';
import { advertise } from '../data/data';
import { settings } from './arrowCarousel';
import useWindowSize from '../useWindowSize';

function Advertise(props) {
    const size = useWindowSize();
    const getAdvertise = (adv) => {
        let object = [];
        let data = [];
        adv.forEach(element => {
            object.push(element);
            if (object.length === 5) {
                data.push(object);
                object = [];
            }
        })
        if (object.length !== 0) {
            data.push(object);
        }
        return data
    }

    return (
        <>
            {props.name === "Trending" ? (
                <div style={{ paddingTop: '30px' }}>
                    <Row align="middle">
                        <Col><img src={trending} alt="trending" /></Col>
                        <Col className='advertise' style={{ paddingLeft: '15px' }}>Trending</Col>
                    </Row>
                </div>
            ) : props.name === "Flash Sale" ? (
                <div style={{ paddingTop: '30px' }}>
                    <Row align="middle">
                        <Col><img src={flashSale} alt="flashSale" /></Col>
                        <Col className='advertise' style={{ paddingLeft: '15px' }}>Flash Sale</Col>
                        <Col>
                            <Row>
                                <Col>
                                    <span style={{
                                        paddingLeft: '15px',
                                        fontSize: '15px',
                                        color: '#5A5C60',
                                    }}>Berakhir dalam
                                    </span>
                                </Col>
                                <Col style={{ paddingLeft: '10px' }}><Tag icon={<img src={clock} alt="clock" />} style={{ background: 'linear-gradient(225.66deg, #FFAA5D -30.42%, #F63C3C 91.94%)', color: "white", borderRadius: '12px', fontSize: '15px', height: '100%' }}>&nbsp;08 : 52 : 05</Tag></Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            ) : props.name === "Terbaru" ? (
                <div style={{ paddingTop: '60px' }}>
                    <Row align="middle">
                        <Col span={10}><span className="advertise">Terbaru</span></Col>
                        <Col span={14} style={{ textAlign: "right" }}><span style={{
                            fontWeight: 800,
                            fontSize: '15px',
                            color: '#2BA0E7'
                        }}>Lihat Semua</span></Col>
                    </Row>
                </div>
            ) : props.name === "Bisnis" ? (
                <div style={{ paddingTop: '60px' }}>
                    <Row align="middle">
                        <Col span={10}><span className="advertise">Bisnis</span></Col>
                        <Col span={14} style={{ textAlign: "right" }}><span style={{
                            fontWeight: 800,
                            fontSize: '15px',
                            color: '#2BA0E7'
                        }}>Lihat Semua</span></Col>
                    </Row>
                </div>
            ) : props.name === "Pengembangan Karier" ? (
                <div style={{ paddingTop: '60px' }}>
                    <Row align="middle">
                        <Col span={10}><span className="advertise">Pengembangan Karier</span></Col>
                        <Col span={14} style={{ textAlign: "right" }}><span style={{
                            fontWeight: 800,
                            fontSize: '15px',
                            color: '#2BA0E7'
                        }}>Lihat Semua</span></Col>
                    </Row>
                </div>
            ) : ""}
            {size.width > 600 ? (
                <>
                    <Carousel afterChange={""} arrows {...settings} style={{ paddingTop: '23px' }}>
                        {getAdvertise(advertise.filter(element => element.type === props.name)).map((element2,id) => (
                            <div key={id}>
                                <Row gutter={[10, 10]}>
                                    {element2.map((element3,id) => (
                                        <Col key={id}>
                                            <Card
                                                style={{
                                                    width: 221,
                                                    borderRadius: '10px',
                                                    overflow: 'hidden',
                                                    height: 262,
                                                    boxShadow: "0px 3px 3px 0px rgba(0, 0, 0, 0.13)"
                                                }}
                                                cover={
                                                    <img
                                                        alt="example"
                                                        src={element3.image}
                                                    />
                                                }
                                            >
                                                <div style={{
                                                    paddingTop: '10px',
                                                    paddingLeft: '20px',
                                                    paddingRight: '20px'
                                                }}>
                                                    <span style={{
                                                        fontWeight: 700,
                                                        fontSize: '10px',
                                                        color: '#94969B',
                                                        mixBlendMode: 'normal',
                                                        opacity: '0.9',
                                                    }}>{element3.from}</span>
                                                    <br />
                                                    <span style={{
                                                        fontWeight: 700,
                                                        fontSize: '12px',
                                                        color: '#1C1D20',
                                                    }}>{element3.title}</span>
                                                    <br />
                                                    <Row align="middle">
                                                        <Col><img src={rating} alt='rating' /></Col>
                                                        <Col style={{ paddingLeft: '5px' }}>
                                                            <span style={{
                                                                fontWeight: 700,
                                                                fontSize: '10px',
                                                                color: '#3E3F43',
                                                                mixBlendMode: 'normal',
                                                                opacity: '0.9',
                                                            }}>{`${element3.rating} ${element3.reviewer > 1000 ? '(>1000)' : element3.reviewer}`}
                                                            </span>
                                                        </Col>
                                                    </Row>
                                                    {element3.discount !== "" ? (
                                                        <Row align="middle">
                                                            <Col><Tag color="error" style={{
                                                                fontWeight: 800,
                                                                fontSize: '10px',
                                                                color: '#F94759',
                                                                padding: '0 2px',
                                                            }}>{element3.discount}</Tag></Col>
                                                            <Col style={{ paddingLeft: '3px' }}>
                                                                <span style={{
                                                                    fontWeight: 500,
                                                                    fontSize: '10px',
                                                                    color: '#94969B',
                                                                    textDecorationLine: 'line-through',
                                                                }}>Rp.{element3.original_price}
                                                                </span>
                                                            </Col>
                                                        </Row>
                                                    ) : <br />}
                                                    <span style={{
                                                        fontWeight: 900,
                                                        fontSize: '16px',
                                                        color: '#1C1D20',
                                                    }}>Rp.{element3.discount !== "" ? element3.price : element3.original_price}</span>
                                                </div>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        ))}
                    </Carousel>
                </>
            ) : (
                <div className='horizontal-scroll-wrapper' style={{ paddingTop: "30px" }}>
                    {advertise.map((element3,id) => (
                        <div key={id} style={{ display: 'inline-block', padding: '0 5px' }}>
                            <Card
                                style={{
                                    width: 221,
                                    borderRadius: '10px',
                                    overflow: 'hidden',
                                    whiteSpace: 'initial',
                                    height: 262,
                                    boxShadow: "0px 3px 3px 0px rgba(0, 0, 0, 0.13)"
                                }}
                                cover={
                                    <img
                                        alt="example"
                                        src={element3.image}
                                    />
                                }
                            >
                                <div style={{
                                    paddingTop: '10px',
                                    paddingLeft: '20px',
                                    paddingRight: '20px'
                                }}>
                                    <span style={{
                                        fontWeight: 700,
                                        fontSize: '10px',
                                        color: '#94969B',
                                        mixBlendMode: 'normal',
                                        opacity: '0.9',
                                    }}>{element3.from}</span>
                                    <br />
                                    <span style={{
                                        fontWeight: 700,
                                        fontSize: '12px',
                                        color: '#1C1D20',
                                    }}>{element3.title}</span>
                                    <br />
                                    <Row align="middle">
                                        <Col><img src={rating} alt='rating' /></Col>
                                        <Col style={{ paddingLeft: '5px' }}>
                                            <span style={{
                                                fontWeight: 700,
                                                fontSize: '10px',
                                                color: '#3E3F43',
                                                mixBlendMode: 'normal',
                                                opacity: '0.9',
                                            }}>{`${element3.rating} ${element3.reviewer > 1000 ? '(>1000)' : element3.reviewer}`}
                                            </span>
                                        </Col>
                                    </Row>
                                    {element3.discount !== "" ? (
                                        <Row align="middle">
                                            <Col><Tag color="error" style={{
                                                fontWeight: 800,
                                                fontSize: '10px',
                                                color: '#F94759',
                                                padding: '0 2px',
                                            }}>{element3.discount}</Tag></Col>
                                            <Col style={{ paddingLeft: '3px' }}>
                                                <span style={{
                                                    fontWeight: 500,
                                                    fontSize: '10px',
                                                    color: '#94969B',
                                                    textDecorationLine: 'line-through',
                                                }}>Rp.{element3.original_price}
                                                </span>
                                            </Col>
                                        </Row>
                                    ) : <br />}
                                    <span style={{
                                        fontWeight: 900,
                                        fontSize: '16px',
                                        color: '#1C1D20',
                                    }}>Rp.{element3.discount !== "" ? element3.price : element3.original_price}</span>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            )
            }
        </>
    );
}

export default Advertise;
