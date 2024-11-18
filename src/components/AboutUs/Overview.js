
import { Container } from '@mui/material';
import styles from './Overview.module.css';

const OverView = () => {

    return (
        <>
            <section className={styles.OverviewMainContainer}>
                <div className={styles.OverviewContainer}>
                    <Container>
                        <div className={styles.OverviewHeader}>
                            <h1>Overview</h1>
                        </div>
                        <div className={styles.OverviewBody}>
                            <p>
                                In 2016, a group of like-minded entrepreneurs, already successfully engaged in various other businesses, felt inclined to undertake something new and challenging - a new business venture driven by innovation and foresight.

                                That is how Hera Sweaters Limited (HSL), a Next-Generation Green Sweater Factory, came into being. The idea was to produce quality products by a team of committed and satisfied professionals, where profit would be a logical sequence.

                                HSL would cares for its dedicated team, the shared values, the uncompromising quality of products, and the vibrant community in which HSL thrives.

                                From July 1, 2018, Hera Sweaters Limited started its journey with the goal of -“Taking quality to the next level.”

                                We are a LEED GOLD Certified Green Sweater Factory.

                                400 German STOLL Jacquard knitting Machines and a team of around 1,300 skilled people are giving their best efforts to fulfill our shared goal.

                                As thought leaders, we are trying to innovate and experiment with new ideas.

                                HSL believes that a company cannot consider itself truly remarkable unless it makes an effort to pay back what it receives from the community and the environment.
                            </p>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    );
}


export default OverView;