
import { Container, Grid } from '@mui/material';
import styles from './OurMission.module.css';

const OurMission = () => {

    return (
        <>
            <section className={styles.OurMissionMainContainer}>
                <div className={styles.OurMissionContainer}>
                    <Container>
                        <div className={styles.OurMissionHeader}>
                            <h1>Our Mission</h1>
                        </div>
                        <div className={styles.OurMissionBody}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                    <img
                                        src="https://images.pexels.com/photos/3706659/pexels-photo-3706659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="Paris"
                                        // width="500"
                                        // height="300"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                    <p>To provide quality services on time, based on best practices for the satisfaction of our Stakeholders.</p>
                                    <p>To foster friendly working environment through open communication and mutual respect.</p>
                                    <p>To encourage initiative, innovation and teamwork.</p>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    );
}


export default OurMission;