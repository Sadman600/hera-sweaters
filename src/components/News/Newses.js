import React from 'react';
import styles from './Newses.module.css';
import { Container, Grid } from '@mui/material';
import News from './News';

const Newses = () => {
    return (
        <>
            <section className={styles.newsesMainContainer}>
                <div className={styles.newsesContainer}>
                    <Container>
                        <Grid container spacing={2}>
                            {
                                newsblogs.map((newsblog,i) => (
                                    <Grid item xs={12} sm={12} md={6} lg={4}>
                                        <News key={i} newsblog={newsblog} />
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Container>
                </div>
            </section>
        </>
    )
};

export default Newses;


const newsblogs = [
    {
        id: 1,
        newsslug: 'how-to-start-your-own-business',
        title: 'How to Start Your Own Business',
        author: 'John Doe',
        date: '2024-10-01',
        content: 'Learn the essential steps to successfully launch and manage your own business in today’s competitive market.',
        img:'https://images.pexels.com/photos/1369476/pexels-photo-1369476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        id: 2,
        newsslug: 'top-10-marketing-strategies',
        title: 'Top 10 Marketing Strategies for 2024',
        author: 'Jane Smith',
        date: '2024-10-10',
        content: 'Discover the top marketing strategies that can help you stay ahead in 2024, from social media to content marketing.',
        img:'https://images.pexels.com/photos/242492/pexels-photo-242492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        id: 3,
        newsslug: 'importance-of-work-life-balance',
        title: 'The Importance of Work-Life Balance',
        author: 'Emma Wilson',
        date: '2024-09-15',
        content: 'Explore why maintaining a healthy work-life balance is critical for productivity, health, and overall well-being.',
        img:'https://images.pexels.com/photos/2872418/pexels-photo-2872418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        id: 4,
        newsslug: 'beginner-guide-to-crypto',
        title: 'A Beginner’s Guide to Cryptocurrency',
        author: 'Liam Johnson',
        date: '2024-08-20',
        content: 'Understand the basics of cryptocurrency, blockchain technology, and how to safely get started with crypto investing.',
        img:'https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 5,
        newsslug: 'eco-friendly-business-practices',
        title: 'Eco-Friendly Business Practices for Sustainability',
        author: 'Olivia Brown',
        date: '2024-07-30',
        content: 'Learn about eco-friendly practices you can implement to make your business more sustainable and environmentally responsible.',
        img:'https://images.pexels.com/photos/723072/pexels-photo-723072.jpeg?auto=compress&cs=tinysrgb&w=600'
    }

];