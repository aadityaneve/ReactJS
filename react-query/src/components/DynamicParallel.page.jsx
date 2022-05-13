import React from 'react'

import { useQueries } from 'react-query'
import axios from 'axios'

const fetchSuperHero = (heroId) => {
    return axios.get(`http://localhost:4000/superheroes/${heroId}`);
}

const DynamicParallelPage = ({ heroIds }) => {

    const queryResults = useQueries(
        heroIds.map((id) => {
            return {
                queryKey: ['super-hero', id],
                queryFn: () => fetchSuperHero(id),
            }
        })
    )
    console.log("🚀 ~ file: DynamicParallel.page.jsx ~ line 20 ~ DynamicParallelPage ~ queryResults", { queryResults })

    return (
        <div>DynamicParallelPage</div>
    )
}

export default DynamicParallelPage