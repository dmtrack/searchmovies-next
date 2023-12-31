'use client'; // Error components must be Client components

import { useEffect } from 'react';
import Typography from '../../components/Typography';
import firasans from '../../utils/fonts/firasans';
import styles from '../../components/Layout/Layout.module.scss';

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <>
            <section className={styles.section}>
                <div className={styles.topContainer}>
                    <Typography
                        variant='h3'
                        align='center'
                        className={firasans.className}
                        color='dark-blue'>
                        404 | Page is not found..
                    </Typography>
                </div>
            </section>
        </>
    );
}
