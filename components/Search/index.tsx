'use client';

import styles from './Search.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useInput } from '../../hooks/useInput';
import { useGetJokesQuery } from '../../redux/api/moviesApi';
import { useDebounce } from '../../hooks/useDebounce';

import cn from 'classnames';
import firasans from '../../utils/fonts/firasans';

import Input from '../Input';
import JokeCardList from '../MovieCardList';
import montserrat from '../../utils/fonts/montserrat';
import useAutoFocus from '../../hooks/useAutoFocus';

function Search() {
    const [search, setSearch] = useState('');
    const inputRef = useAutoFocus();
    const input = useInput();
    const debounced = useDebounce(input.value);

    useEffect(() => {
        if (debounced.length > 3) {
            setSearch(debounced);
        }
    }, [debounced]);

    const { data } = useGetJokesQuery(search);
    const dataResult = data?.movies?.Search?.slice(0, 8);
    const totalJokes = data?.movies?.Search?.length;

    return (
        <>
            <section className={styles.section}>
                <Input
                    refik={inputRef}
                    type='text'
                    placeholder='Search'
                    className={cn(styles.input, firasans.className)}
                    {...input}
                />
                {totalJokes ? (
                    <div className={cn(styles.counter, montserrat.className)}>
                        Found movies: {totalJokes}
                    </div>
                ) : (
                    ''
                )}
            </section>
            <div>{dataResult && <JokeCardList cards={dataResult} />}</div>
        </>
    );
}

export default Search;
