import { Row, Col, Input, Tooltip, Button } from 'antd';
import React from 'react';
import logo from '../asset/logo_arkademi.svg';
import icon_search from '../asset/icon_search.svg';
import icon_love from '../asset/icon_love.svg';
import useWindowSize from '../useWindowSize';

function Header() {
    const size = useWindowSize();
    return (
        <header style={{ fontFamily: 'Montserrat', height: size.width > 600 ? '53px' : '100px' }}>
            <Row align='middle' style={{ width: '100%', height: '100%', padding: size.width > 600 ? '0 100px' : '0 25px' }}>
                {size.width > 600 ? (
                    <>
                        <Col span={3}><img src={logo} alt="logo" style={{ paddingTop: "11px", paddingBottom: "17px" }} /></Col>
                        <Col span={15} style={{ paddingLeft: '30px' }}>
                            <Input
                                style={{
                                    width: '100%',
                                    borderRadius: '5px',
                                }}
                                placeholder="Cari kelas"
                                suffix={
                                    <Tooltip title="Extra information">
                                        <img src={icon_search} alt="cari" />
                                    </Tooltip>
                                }
                            />
                        </Col>
                        <Col span={2} style={{ textAlign: 'center' }}><img src={icon_love} alt="suka" /></Col>
                        <Col span={4}>
                            <Row style={{ width: '100%' }}>
                                <Col span={12} style={{ textAlign: 'left', paddingRight: '5px' }}><Button style={{ borderRadius: '5px', color: "#0977BE", fontWeight: 'bold' }} block>Masuk</Button></Col>
                                <Col span={12} style={{ textAlign: 'right', paddingLeft: '5px' }}><Button style={{ borderRadius: '5px', background: '#1E95DD', border: '1px solid #1E95DD', color: 'white', fontWeight: 'bold' }} block>Daftar</Button></Col>
                            </Row>
                        </Col>
                    </>
                ) : (
                    <>
                        <Col span={12}><img src={logo} alt="logo" style={{ paddingTop: "11px", paddingBottom: "17px" }} /></Col>
                        <Col span={2} style={{ textAlign: 'center' }}><img src={icon_love} alt="suka" /></Col>
                        <Col span={10}>
                            <Row style={{ width: '100%' }}>
                                <Col span={12} style={{ textAlign: 'left', paddingRight: '5px' }}><Button style={{ borderRadius: '5px', color: "#0977BE", fontWeight: 'bold', textAlign: 'center', padding: '0' }} block>Masuk</Button></Col>
                                <Col span={12} style={{ textAlign: 'right', paddingLeft: '5px' }}><Button style={{ borderRadius: '5px', background: '#1E95DD', border: '1px solid #1E95DD', color: 'white', fontWeight: 'bold', textAlign: 'center', padding: '0' }} block>Daftar</Button></Col>
                            </Row>
                        </Col>
                        <Col span={24} style={{paddingBottom: '15px'}}>
                            <Input
                                style={{
                                    width: '100%',
                                    borderRadius: '5px',
                                }}
                                placeholder="Cari kelas"
                                suffix={
                                    <Tooltip title="Extra information">
                                        <img src={icon_search} alt="cari" />
                                    </Tooltip>
                                }
                            />
                        </Col>
                    </>
                )}
            </Row>
        </header>
    );
}

export default Header;
