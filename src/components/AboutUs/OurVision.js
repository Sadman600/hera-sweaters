
import { Container, Grid } from '@mui/material';
import styles from './OurVision.module.css';

const OurVision = () => {

    return (
        <>
            <section className={styles.OurVisionMainContainer}>
                <div className={styles.OurVisionContainer}>
                    <Container>
                        <div className={styles.OurVisionHeader}>
                            <h1>Our Vision</h1>
                        </div>
                        <div className={styles.OurVisionBody}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                    <div className={styles.OurVisionBodyRight}>
                                        <p>To be the most respected apparel company in Bangladesh</p>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                    <img
                                        src="https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="Paris"
                                    // width="500"
                                    // height="300"
                                    />
                                </Grid>

                            </Grid>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    );
}


export default OurVision;