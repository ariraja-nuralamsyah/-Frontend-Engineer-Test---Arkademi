import { Carousel, Row, Col } from 'antd';
import React from 'react';
import { bigCarousel, miniCarousel, bigCarouselMobile } from '../data/data';
import { settings } from './arrowCarousel';
import useWindowSize from '../useWindowSize';

function Carousell() {
    const size = useWindowSize();
    const contentStyle = {
        width: '100%',
        height: '100%',
        lineHeight: '300px',
        textAlign: 'center',
        borderRadius: '10px',
    };

    const contentStyle2 = {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        background: '#364d79',
        borderRadius: '10px',
    };

    const getMiniCarousel = () => {
        let object = [];
        let data = [];
        miniCarousel.forEach(element => {
            object.push(element);
            if (object.length === 3) {
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
            <Carousel afterChange={""} arrows {...settings}>
                {size.width > 600 ? bigCarousel.map((element,id) => (
                    <div key={id}>
                        <img src={element} style={contentStyle} alt={element} />
                    </div>
                )) : bigCarouselMobile.map((element, id) => (
                    <div key={id}>
                        <img src={element} style={contentStyle} alt={element} />
                    </div>
                ))}
            </Carousel>
            <Carousel afterChange={""} arrows {...settings} style={{ paddingTop: '20px' }}>
                {size.width < 600 ? miniCarousel.map((element2, id) => (
                    <div key={id}>
                        <Row>
                            <Col span={24}>
                                <img src={element2} style={contentStyle2} alt={id} />
                            </Col>
                        </Row>
                    </div>
                )) : getMiniCarousel().map((element,id) => (
                    <div key={id}>
                        <Row gutter={[10, 10]}>
                            {element.map((element2, id) => (
                                <Col key={id} span={8}><img src={element2} style={contentStyle2} alt={id} /></Col>
                            ))}
                        </Row>
                    </div>
                ))}
            </Carousel>
        </>
    );
}

export default Carousell;
