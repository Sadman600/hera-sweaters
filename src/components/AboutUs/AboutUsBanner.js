
import { Container, Grid } from '@mui/material';
import styles from './AboutUsBanner.module.css';

const AboutUsBanner = () => {

    return (
        <>
            <section className={styles.AboutUsBannerMainContainer}>
                <div className={styles.AboutUsBannerContainer}>
                    <Container>
                        <div className={styles.AboutUsBannerHeader}>
                            <h1>About US</h1>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    );
}


export default AboutUsBanner;