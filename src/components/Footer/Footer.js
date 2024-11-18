import React from 'react';
import { Container, Grid } from '@mui/material';
import styles from './Footer.module.css';
// import Image from 'next/image';
// import fb from '../../assets/footer/Facebook-Icon.png';
// import youtube from '../../assets/footer/YouTube.png';
// import twitter from '../../assets/footer/Twitter.png';
// import whatsApps from '../../assets/footer/WhatsApp.png';
// import instagram from '../../assets/footer/Instagram.png';
import Link from 'next/link';
const Footer = () => {
    const social = [
        {
            img: 'https://cdn.afnanilab.com/media-lib/afnanilab-assets-images/footer/Facebook-Icon.png',
            link: 'https://www.facebook.com/afnanilab/'
        },
        {
            img: 'https://cdn.afnanilab.com/media-lib/afnanilab-assets-images/footer/YouTube.png',
            link: 'https://www.facebook.com/afnanilab/'
        },
        {
            img: 'https://cdn.afnanilab.com/media-lib/afnanilab-assets-images/footer/Twitter.png',
            link: 'https://www.facebook.com/afnanilab/'
        },

        // 'https://cdn.afnanilab.com/media-lib/afnanilab-assets-images/footer/YouTube.png',
        // 'https://cdn.afnanilab.com/media-lib/afnanilab-assets-images/footer/Twitter.png',
        // 'https://cdn.afnanilab.com/media-lib/afnanilab-assets-images/footer/WhatsApp.png',
        // 'https://cdn.afnanilab.com/media-lib/afnanilab-assets-images/footer/Instagram.png',
    ];
    return (
        <>
            <div className={styles.footerContainer}>
                <div className={styles.footerMainContainer}>
                    <Container>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <div>
                                    {/* <h1>DUMBO</h1> */}
                                    <img src='https://herasweaters.com/public/uploads/logo.png' alt="Notebook" width="250" height="100" />
                                    <p>
                                        Pechain, Jampur, Sonargaon, Narayangonj, Bangladesh.<br />
                                        Office 1: +880 1881-500051<br />
                                        contact@herasweaters.com<br />
                                        info@herasweaters.com<br />
                                    </p>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <div>
                                    <h1>TIMES SQUARE</h1>
                                    <p>
                                        1460 Broadway <br />
                                        New York, NY 10036
                                    </p>
                                </div>
                            </Grid>
                            {/* <Grid item xs={12} sm={12} md={6} lg={4}>
                                <div>
                                    <h1>JOIN OUR SOCIAL COMMUNITY</h1>
                                    <div>
                                        {
                                            social.map((s, i) => (
                                                <a href={s.link} target='_blank' style={{ textDecoration: 'none' }}>
                                                    <img className={styles.socialAlignment} key={i} src={s.img} alt="social" />
                                                </a>
                                            ))
                                        }

                                    </div>
                                </div>
                            </Grid> */}
                        </Grid>
                    </Container>
                </div>
                <hr style={{ opacity: '0.1', backgroundColor: 'blue' }} />
                <div className={styles.footerMainNextContainer}>
                    <Container>
                        <div className={styles.footerNextBodyContainer}>
                            <p>Copyright © 2024, Hera Sweaters Limited. All Rights Reserved.</p>
                            <div className={styles.footerNextBody2Container}>
                                <p><Link href='/termsconditions'>TERMS OF SERVICES</Link></p>
                                <p>|</p>
                                <p><Link href='/privacypolicy'>PRIVACY POLICY</Link></p>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    );
};

export default Footer;