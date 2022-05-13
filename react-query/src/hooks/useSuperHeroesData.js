import { useQuery, useMutation, useQueryClient } from 'react-query';

// import axios from 'axios';
import { request } from '../utils/axios-utils'

const fetchSuperHeroes = () => {
    // return axios.get('http://localhost:4000/superheroes')
    return request({ url: '/superheroes' })
}

const addSuperHero = (hero) => {
    // return axios.post(`http://localhost:4000/superheroes`, hero)
    return request({ url: '/superheroes', method: 'post', data: hero })
}

export const useSuperHeroesData = (onSuccess, onError) => {
    return useQuery('super-heroes', fetchSuperHeroes, {
        // cacheTime: 5000,
        // staleTime: 5000,

        // refetchOnMount: true,       // Will refetch data when component is mounted && if the data is stale.
        // refetchOnMount: false    // Will not refetch data when component is mounted.
        // refetchOnMount: 'always' // The query will always refetch on mount.

        // refetchOnWindowFocus: true,     // The query will refetch on window focus if the data is stale.
        // refetchOnWindowFocus: false,    // The query will not refetch on window focus.
        // refetchOnWindowFocus: 'always', // The query will always refetch on window focus.

        // refetchInterval: false, // default
        // refetchInterval: 2000,  // Will fetch data after every 2 seconds.
        // refetchIntervalInBackground: true, // Will fetch data in background even the browser is not in focus.

        // enabled: false, // Set to false to disable this query from automatically running.

        onSuccess: onSuccess,
        onError: onError,

        // select: (data) => {
        //     const superHeroNames = data.data.map((hero) => hero.name)
        //     return superHeroNames;
        // }
    });
}

export const useAddSuperHeroData = () => {

    const queryClient = useQueryClient()

    return useMutation(addSuperHero, {
        // onSuccess: (data) => {
        //     // queryClient.invalidateQueries('super-heroes')
        //     queryClient.setQueryData('super-heroes', (oldQueryData) => {
        //         return {
        //             ...oldQueryData,
        //             data: [...oldQueryData.data, data.data],
        //         }
        //     })
        // }

        onMutate: async (newHero) => {
            await queryClient.cancelQueries('super-heroes')
            const previousHeroData = queryClient.getQueryData('super-heroes', (oldQueryData) => {
                return {
                    ...oldQueryData,
                    data: [...oldQueryData.data, { id: oldQueryData?.data?.length + 1, ...newHero }],
                }
            })
            return {
                previousHeroData,
            }
        },
        onError: (_error, _hero, context) => {
            queryClient.setQueryData('super-heroes', context.previousHeroData)
        },
        onSettled: () => {
            queryClient.invalidateQueries('super-heroes')
        },
    })
}