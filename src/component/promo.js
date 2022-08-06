import { Row, Col, Card } from 'antd';
import React from 'react';
import useWindowSize from '../useWindowSize';

function Promo() {
    const size = useWindowSize();
    const card = {
        borderRadius: '10px',
        overflow: 'hidden',
        padding: '20px',
        boxShadow: "0px 3px 3px 0px rgba(0, 0, 0, 0.13)",
        height: '200px'
    }
    return (
        <>
            <div style={{ paddingTop: '60px', paddingBottom: '25px' }}>
                <span className="advertise">Promo Spesial Untukmu</span>
            </div>
            {size.width > 600 ? (
                <Row gutter={[10, 10]} style={{ flexFlow: 'nowrap' }}>
                    <Col span={8}>
                        <Card style={{ ...card, background: '#0977BE' }} />
                    </Col>
                    <Col span={8}>
                        <Card style={{ ...card, background: '#2BA0E7' }} />
                    </Col>
                    <Col span={8}>
                        <Card style={{ ...card, background: '#22BB3E' }} />
                    </Col>
                </Row>
            ) : (
                <div className='horizontal-scroll-wrapper' style={{ paddingTop: "30px" }}>
                    <div style={{ display: 'inline-block', padding: '0 5px', width: '80%' }}>
                        <Card style={{ ...card, background: '#0977BE'  }} />
                    </div>
                    <div style={{ display: 'inline-block', padding: '0 5px', width: '80%' }}>
                        <Card style={{ ...card, background: '#2BA0E7' }} />
                    </div>
                    <div style={{ display: 'inline-block', padding: '0 5px', width: '80%' }}>
                        <Card style={{ ...card, background: '#22BB3E' }} />
                    </div>
                </div>
            )}
        </>
    );
}

export default Promo;

