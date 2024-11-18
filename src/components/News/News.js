import React from 'react';
import styles from './News.module.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';


const News = ({ newsblog }) => {
    const {newsslug, title, content, img } = newsblog;
    return (
        <>
            <div className={styles.newsMainContainer}>


                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={`${img}`}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {content}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small"><Link href={`/news/${newsslug}`}>Read More</Link></Button>
                    </CardActions>
                </Card>


            </div>
        </>
    )
};

export default News;