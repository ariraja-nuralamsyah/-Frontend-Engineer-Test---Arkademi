import { Row, Col, Dropdown, Space, Menu, Drawer } from 'antd';
import React, { useState } from 'react';
import arrow_down from '../asset/arrow_down.svg';
import { category } from '../data/data';
import useWindowSize from '../useWindowSize';
import { MenuOutlined } from '@ant-design/icons';

function Kategori() {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    const size = useWindowSize();

    const getItem = () => {
        let item = [];
        category.forEach((element, id) => {
            item.push({
                key: id,
                label: <p>{element}</p>
            })
        })
        return item;
    }

    return (
        <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
            {size.width > 600 ? (
                <Row>
                    <Col span={3} style={{ fontWeight: '700', fontSize: '14.5px' }}>
                        <Dropdown overlay={<Menu items={getItem()} />}>
                            <Space>
                                Kategori
                                <img src={arrow_down} alt='kategori' />
                            </Space>
                        </Dropdown>
                    </Col>
                    <Col span={21}>
                        <Row style={{ paddingLeft: '10px' }}>
                            {category.map((element, id) =>
                                <Col key={id} style={{ padding: '0 25px', fontWeight: 'bold' }}>{element}</Col>
                            )}
                        </Row>
                    </Col>
                </Row>
            ) : (
                <Row>
                    <Col span={4} style={{ fontWeight: '700', fontSize: '14.5px' }}>
                        <Dropdown overlay={<Menu items={getItem()} />}>
                            <Space>
                                Kategori
                                <img src={arrow_down} alt='kategori' />
                            </Space>
                        </Dropdown>
                    </Col>
                    <Col span={18}>
                        <Row style={{ paddingLeft: '10px' }}>
                            <Col span={5} style={{ padding: '0 25px', fontWeight: 'bold', textAlign: 'center' }}>{category[0]}</Col>
                            <Col span={5} style={{ padding: '0 25px', fontWeight: 'bold', textAlign: 'center' }}>{category[1]}</Col>
                            <Col span={14} style={{ padding: '0 25px', fontWeight: 'bold', textAlign: 'center' }}>{category[2]}</Col>
                        </Row>
                    </Col>
                    <Col span={2} style={{ textAlign: 'right' }}>
                        <MenuOutlined onClick={showDrawer} />
                        <Drawer title="Kategori lainnya" placement="right" onClose={onClose} visible={visible}>
                            {category.map((element, id) => (
                                <p key={id}>{element}</p>
                            ))}
                        </Drawer>
                    </Col>
                </Row>
            )
            }

        </div >
    );
}

export default Kategori;
