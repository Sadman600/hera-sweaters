import { Container, Grid } from '@mui/material';
import styles from './WelcomeHeraGroup.module.css';
import SendIcon from '@mui/icons-material/Send';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
// import { purple, yellow } from '@mui/material/colors';

// const ColorButton = styled(Button)(({ theme }) => ({
//     color: theme.palette.getContrastText(purple[500]),
//     backgroundColor: yellow[500],
//     '&:hover': {
//       backgroundColor: purple[700],
//     },
//   }));

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '15px 32px',
    border: 'none',
    lineHeight: 1.5,
    backgroundColor: '#ffb606',
    borderColor: '#0063cc',
    fontFamily: [
        '"Poppins"',
        'sans-serif',
    ].join(','),
    '&:hover': {
        backgroundColor: '#FFB606',
        borderColor: '#FFB606',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#FFB606',
        borderColor: '#FFB606',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});

const WelcomeHeraGroup = () => {
    return (
        <>
            <section className={styles.WelcomeMainContainer}>
                <div className={styles.WelcomeContainer}>
                    <Container>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <img
                                    src='https://images.pexels.com/photos/4492087/pexels-photo-4492087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                    width={500}
                                    height={600}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <h2>WELCOME TO </h2>
                                <h1>Hera Sweaters</h1>
                                <p>Hera Group is a local giant, which owns and operates multiple corporations that have exemplary performance record. It has expanded its operational interests in sectors that have experienced maximum commercial success in the country. The company has major investments in the Textile Industry, RMG Sector, Property and development, and Logistic business. Out of all the Group’s business concerns two are Public Limited Companies listed with both, Dhaka Stock Exchange Limited (DSE) and Chittagong Stock Exchange Limited (CSE) with consistent performance.</p>
                                <p>It has adopted effective Corporate Social Responsibility (CSR) programs to make a positive impact in our community while maximizing business value of our shareholders and stakeholders.</p>
                                {/* <p>We are dedicated towards keeping our clients satisfied through our top-quality finished goods which are delivered in a timely manner.</p> */}
                                <div style={{ marginTop: '48px' }}>
                                    {/* <ColorButton variant="contained" endIcon={<SendIcon />}>Custom CSS</ColorButton> */}
                                    <BootstrapButton variant="contained" endIcon={<ArrowForwardIosIcon />} disableRipple>
                                        AboutUs
                                    </BootstrapButton>
                                    {/* <Button variant="contained" endIcon={<SendIcon />}>
                                        Send
                                    </Button> */}
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default WelcomeHeraGroup;