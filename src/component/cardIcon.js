import { Row, Col, Card } from 'antd';
import React from 'react';
import { iconCard } from '../data/data';
import useWindowSize from '../useWindowSize';

function CardIcon(props) {
    const size = useWindowSize();
    const card = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        overflow: 'hidden',
        padding: '20px',
        boxShadow: "0px 3px 3px 0px rgba(0, 0, 0, 0.13)"
    }

    const getIconCard = (card) => {
        let object = [];
        let data = [];
        card.forEach(element => {
            object.push(element);
            if (object.length === 7) {
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
            <div style={{ paddingTop: '50px', paddingBottom: '25px' }}>
                {iconCard.filter(element => element.type === props.name).length > 10 ? (
                    <div style={{ paddingTop: '60px', paddingBottom: '25px' }}>
                        <Row align="middle">
                            <Col span={10}><span className="advertise">{props.name}</span></Col>
                            <Col span={14} style={{ textAlign: "right" }}><span style={{
                                fontWeight: 800,
                                fontSize: '15px',
                                color: '#2BA0E7'
                            }}>Lihat Semua</span></Col>
                        </Row>
                    </div>
                ) : (
                    <span className="advertise">{props.name}</span>
                )}
            </div>

            <Row gutter={[5, 5]} style={{ paddingTop: '10px', width: '100%' }}>
                {size.width > 600 ? getIconCard(iconCard.filter(element => element.type === props.name)).map((element2,id) => (
                    <Row gutter={[10, 10]} style={{ flexFlow: 'nowrap', paddingTop: '10px' }} key={id}>
                        {element2.map((element3,id) => (
                            <Col flex={'1 0 14.3%'} key={id}>
                                <Card style={card}>
                                    <Row>
                                        <Col span={24}>
                                            <Row justify='space-around'>
                                                <img src={element3.image} alt={element3.name} />
                                            </Row>
                                        </Col>
                                        <Col span={24}>
                                            <Row justify='space-around'>
                                                <span style={{
                                                    fontWeight: 600,
                                                    fontSize: '10px',
                                                    textAlign: 'center',
                                                }}>{element3.name}</span>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )) : iconCard.filter(element => element.type === props.name).map((element3,id) => (
                    <Col span={props.name === "Lembaga" ? 8 : 24} key={id}>
                        <Card style={card}>
                            {props.name === "Lembaga" ? (
                                <>
                                    <Row justify='space-around'>
                                        <img src={element3.image} alt={element3.name} />
                                    </Row>
                                    <Row justify='space-around' style={{paddingTop: '10px'}}>
                                        <span style={{
                                            fontWeight: 600,
                                            fontSize: '10px',
                                            textAlign: 'center',
                                        }}>{element3.name}</span>
                                    </Row>
                                </>
                            ) : (
                                <>
                                    <Row align="middle">
                                        <Col span={4}><img src={element3.image} alt={element3.name} /></Col>
                                        <Col span={20} style={{paddingLeft: "45px"}}>
                                            <span style={{
                                                fontWeight: 600,
                                                fontSize: '10px',
                                                textAlign: 'center',
                                            }}>{element3.name}</span>
                                        </Col>
                                    </Row>
                                </>
                            )}
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default CardIcon;
