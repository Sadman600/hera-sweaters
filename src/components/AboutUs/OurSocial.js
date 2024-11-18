
import { Container, Grid } from '@mui/material';
import styles from './OurSocial.module.css';

const OurSocial = () => {

    return (
        <>
            <section className={styles.OurSocialMainContainer}>
                <div className={styles.OurSocialContainer}>
                    <Container>
                        <div className={styles.OurSocialHeader}>
                            <h1>Social</h1>
                        </div>
                        <div className={styles.OurSocialBody}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                    <img
                                        src="https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="Paris"
                                    // width="500"
                                    // height="300"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                    <p>“Social Happiness” means enabling everyone in our eco-system to flourish with respect. To ensure this, we will strive to expand the prosperity, wellbeing, and recognition of every one of our partners – including our workers, their families, and the network of stakeholders through unwavering commitment and coordinated efforts.</p>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    );
}


export default OurSocial;