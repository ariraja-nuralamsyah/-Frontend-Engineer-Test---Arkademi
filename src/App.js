import './App.css';
import 'antd/dist/antd.css';
import "@fontsource/montserrat";
import { Layout, Button, Row, Col, Divider } from 'antd';
import React from 'react';
import Header from './component/header';
import Kategori from './component/kategori';
import Carousell from './component/carousel';
import Advertise from './component/advertise';
import CardIcon from './component/cardIcon';
import Promo from './component/promo';
import arkademi from './asset/arkademi.png';
import logo from './asset/logo_arkademi_blue.png';
import logoGroup from './asset/logoGroup.png';
import Testimoni from './component/testimoni';
import metodePembayaran from './asset/metodePembayaran.png';
import sosmed from './asset/sosmed.png';
import store from './asset/store.png';
import useWindowSize from './useWindowSize';

const { Content, Footer } = Layout;

function App() {
  const size = useWindowSize();
  return (
    <Layout>
      <Header />
      <Content className='site-layout' style={{ marginTop: size.width > 600 ? '53px' : '100px' }}>
        <div style={{ padding: size.width > 600 ? '0 100px' : '0 25px' }}>
          <Kategori />
          <Carousell />
          <Row
            justify="space-around"
            align="middle"
            style={{ paddingTop: '25px' }}>
            <Button style={{ borderRadius: '5px' }}>
              <b>Lihat Semua Spesialisasi</b>
            </Button>
          </Row>
          <Advertise name="Trending" />
          <Advertise name="Flash Sale" />
          <CardIcon name="Kategori Terpopuler" />
          <Row
            justify="space-around"
            align="middle"
            style={{ paddingTop: '25px' }}>
            <Button style={{ borderRadius: '5px', border: '1px solid #2BA0E7', color: '#2BA0E7' }}>
              <b>Lihat Semua Kategori</b>
            </Button>
          </Row>
          <Promo />
          <CardIcon name="Lembaga" />
          <Advertise name="Terbaru" />
          <Advertise name="Bisnis" />
          <Advertise name="Pengembangan Karier" />
        </div>
        <div style={{ background: 'linear-gradient(180deg, #F3F5F7 0%, #FFFFFF 100%)', width: '100%', marginTop: '100px' }}>
          <Testimoni />
          <div style={{ padding: size.width > 600 ? '0 100px' : '0 25px', width: '100%' }}>
            <Row style={{ paddingTop: '50px', paddingBottom: '50px' }}>
              <Col xs={24} xl={8} style={{ height: '100%' }}><img src={arkademi} alt="arkademi" style={{ width: '100%' }} /></Col>
              <Col xs={24} xl={16}>
                <Row>
                  <Col span={24}><img src={logo} alt="logo" /></Col>
                  <Col span={24} style={{ paddingTop: '10px' }}><span style={{ fontWeight: 600, fontSize: '11px', color: '#333539' }}>Arkademi adalah massive open online course (MOOC) platform karya anak bangsa Indonesia. Pembelajaran di Arkademi dikhususkan untuk skill based learning atau pembelajaran berbasis keahlian yang diantarkan melalui kelas belajar dan kursus online melalui aplikasi Arkademi berbasis mobile app dan web. Di Arkademi setiap individu dan lembaga kursus dapat membuka dan mengkomersialkan kelas onlinenya dan menjangkau siswa dari seluruh Indonesia.</span></Col>
                  <Col span={24} style={{ paddingTop: '25px' }}><span style={{ fontWeight: 900, fontSize: '14px', color: 'black' }}><b>Akselerator</b></span></Col>
                  <Col span={24} style={{ paddingTop: '10px' }}><span style={{ fontWeight: 400, fontSize: '11px', color: '#5A5C60' }}>Arkademi adalah bagian program inkubasi dan akselerator dari perusahaan top-level dunia: SOSV MOX (Mobile Only Accelerator), Amazon Web Service (Edstart Program) dan Y Combinator (Startup School) yang dipilih dari tech startup edukasi terbaik dunia.</span></Col>
                  <Col span={24} style={{ paddingTop: '15px' }}><img src={logoGroup} alt="logoGroup" style={{ width: '100%' }} /></Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
        <Divider />
        <div style={{ padding: size.width > 600 ? '0 100px' : '0 25px', width: '100%' }}>
          <Row style={{ paddingBottom: '40px' }}>
            <Col xs={24} sm={24} xl={5}>
              <Row>
                <Col span={24} style={{
                  paddingTop: '30px'
                }}><span style={{
                  fontWeight: 900,
                  fontSize: '15px',
                  color: 'black',
                }}><b>Kategori Populer</b></span>
                </Col>
                <Col span={24} style={{
                  paddingTop: '15px',
                  fontWeight: 600,
                  fontSize: '12px',
                  color: '#5A5C60',
                }}>
                  <p>Keuangan</p>
                  <p>Perpajakan</p>
                  <p>Bisnis</p>
                  <p>Marketing</p>
                  <p>Kewirausahaan</p>
                  <p>Investasi</p>
                </Col>
              </Row>
            </Col>
            <Col xs={24} sm={24} xl={5}>
              <Row>
                <Col span={24} style={{
                  paddingTop: '30px'
                }}><span style={{
                  fontWeight: 900,
                  fontSize: '15px',
                  color: 'black',
                }}><b>Lainnya</b></span>
                </Col>
                <Col span={24} style={{
                  paddingTop: '15px',
                  fontWeight: 600,
                  fontSize: '12px',
                  color: '#5A5C60',
                }}>
                  <p>Panduan</p>
                  <p>FAQ</p>
                  <p>Tentang Kami</p>
                  <p>Karier</p>
                  <p>Privacy Policy</p>
                </Col>
              </Row>
            </Col>
            <Col xs={24} sm={24} xl={8}>
              <Row>
                <Col span={24} style={{
                  paddingTop: '30px'
                }}><span style={{
                  fontWeight: 900,
                  fontSize: '15px',
                  color: 'black',
                }}><b>Metode Pembayaran</b></span>
                </Col>
                <Col span={24} style={{
                  paddingTop: '15px',
                  fontWeight: 600,
                  fontSize: '12px',
                  color: '#5A5C60',
                }}>
                  <img src={metodePembayaran} alt="Metode Pembayaran" />
                </Col>
              </Row>
            </Col>
            <Col xs={24} sm={24} xl={6}>
              <Row>
                <Col span={24} style={{
                  paddingTop: '30px'
                }}><span style={{
                  fontWeight: 900,
                  fontSize: '15px',
                  color: 'black',
                }}><b>Ikuti Kami</b></span>
                </Col>
                <Col span={24} style={{
                  paddingTop: '15px',
                  fontWeight: 600,
                  fontSize: '12px',
                  color: '#5A5C60',
                }}>
                  <Row>
                    <Col span={24}><img src={sosmed} alt="Social Media" /></Col>
                    <Col span={24} style={{
                      fontWeight: 900,
                      fontSize: '15px',
                      color: 'black',
                      paddingTop: '20px'
                    }}><b>Arkademi Mobile App</b></Col>
                    <Col span={24} style={{ paddingTop: '15px' }}><img src={store} alt="Store" style={{ width: '100%' }} /></Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer style={{ height: '60px', padding: '5px' }}>
        {size.width > 600 ? (
          <Row align='middle' style={{ padding: '0 100px', height: '100%' }}>
            <Col xl={19} style={{
              fontWeight: 400,
              fontSize: '13px',
              color: '#94969B'
            }}>© 2022 PT Arkademi Daya Indonesia</Col>
            <Col xl={3} style={{
              fontWeight: 600,
              fontSize: '12px',
              color: '#5A5C60',
              textAlign: 'right'
            }}>Ketentuan Layanan</Col>
            <Col xl={2} style={{
              fontWeight: 600,
              fontSize: '12px',
              color: '#5A5C60',
              textAlign: 'right'
            }}>Kontak</Col>
          </Row>
        ): (
          <Row align='middle' style={{ padding: '5 25px', width: '100%', height: '100%' }}>
            <Col span={24} style={{
              fontWeight: 400,
              fontSize: '10px',
              color: '#94969B',
              textAlign: 'center'
            }}>© 2022 PT Arkademi Daya Indonesia</Col>
            <Col span={12} style={{
              fontWeight: 600,
              fontSize: '12px',
              color: '#5A5C60',
              textAlign: 'right'
            }}>Ketentuan Layanan</Col>
            <Col span={12} style={{
              fontWeight: 600,
              fontSize: '12px',
              color: '#5A5C60',
              textAlign: 'center'
            }}>Kontak</Col>
          </Row>
        )}

      </Footer>
    </Layout >
  );
}

export default App;
