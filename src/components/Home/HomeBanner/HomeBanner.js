'use client'
import React, { useEffect, useState } from 'react';
import styles from './HomeBanner.module.css';
import { Box, Grid, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import HorizontalRuleRoundedIcon from '@mui/icons-material/HorizontalRuleRounded';
// import Buttons from '@/components/Form/Button/Button';
import Button from '@mui/material/Button';

const HomeBanner = () => {

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrolled > 60) {

            setVisible(true)
        }
        else if (scrolled <= 60) {
            setVisible(false)
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
    }, [])

    return (
        <>
            <section className={styles.HomeBannerMainContainer}>
                <Box sx={{
                    // marginTop: visible ? { xs: '295px', md: '170px' } : ''
                    marginTop: visible ? { xs: '190px', md: '170px' } : { xs: '295px', md: '170px' }
                    // marginTop: visible ? { xs: '190px' } : { xs: '295px' }
                }}>
                    <Carousel
                        IndicatorIcon={
                            <HorizontalRuleRoundedIcon
                                sx={{
                                    fontSize: { md: '72px' },
                                }}
                                fontSize='large' />
                        }
                        // IndicatorIcon={false}
                        activeIndicatorIconButtonProps={{
                            style: {
                                color: '#FFB606',
                            }
                        }}
                    >
                        {
                            items.map((item, i) => (
                                <div key={i} className={styles.HomeBannerContainer}>
                                    {/* <img src="https://herasweaters.com/public/uploads/slider-10.png" alt="Notebook" /> */}
                                    {/* <img src="https://herasweaters.com/public/uploads/slider-7.jpg" alt="Notebook" /> */}
                                    <img src={item.img} alt="Notebook" />
                                    <div className={styles.HomeBannerContent}>
                                        <div>
                                            <h1>{item.name}</h1>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Carousel>
                </Box>
            </section>

        </>
    );
};

export default HomeBanner;

const items = [
    {
        id: 1,
        img: 'https://as2.ftcdn.net/v2/jpg/06/92/07/03/1000_F_692070304_02Ah98Ayvv2uXZbBulYKHQCjlJL8o6mu.jpg',
        name: "HERA SWEATERS LIMITED",
        description: "Taking Quality to the Next Level."
    },
    {
        id: 2,
        img: 'https://as1.ftcdn.net/v2/jpg/10/54/44/48/1000_F_1054444885_Y7ANvN1VIJFN8oeYKdMbi0U4FA77CS9B.jpg',
        name: "OUR MONTHLY PRODUCTIO CAPACITY",
        description: "We have 400 German STOLL Jacquard knitting Machines!"
    },
    {
        id: 3,
        img: 'https://as1.ftcdn.net/v2/jpg/10/14/04/78/1000_F_1014047820_1kLhm34DaPhlzE4WlgB6dnBregSFL1t6.jpg',
        name: "Markets Worldwide",
        description: "We are Serving Worldwide Markets"
    },
   
    // {
    //     id: 2,
    //     img: 'https://qafys.deenschool.io/Home/Image.png',
    //     name: "Random Name #1",
    //     description: "Probably the most random thing you have ever seen!"
    // },
];