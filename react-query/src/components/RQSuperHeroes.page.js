import React from 'react'

import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes')
}

const RQSuperHeroesPage = () => {
    // Query cache has default time for 5 minutes
    // We can change the cache time by passing an object to use query hook
    const { isLoading, data, isError, error, isFetching } = useQuery('super-heroes', fetchSuperHeroes, {
        cacheTime: 5000,
    });
    console.log("🚀 ~ file: RQSuperHeroes.page.js ~ line 13 ~ RQSuperHeroesPage ~ isLoading", isLoading)
    console.log("🚀 ~ file: RQSuperHeroes.page.js ~ line 13 ~ RQSuperHeroesPage ~ isFetching", isFetching)

    if (isLoading) {
        return <h2>Loading....</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <>
            <h2>RQ Super Heroes Page</h2>
            {
                data?.data.map((hero) => {
                    return <div key={hero.name}>{hero.name}</div>
                })
            }
        </>
    )
}

export default RQSuperHeroesPage;