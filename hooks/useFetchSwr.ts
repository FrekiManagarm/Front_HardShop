import useSWR from 'swr'
import getSWRData from '@/helpers/get_swr_data'

export const useFetchSwr = (path: string, mounted: boolean) => {
    const API_URL = process.env.API_URL
    const fetcher = getSWRData(API_URL, path)
    const { data, error, mutate, isValidating, isLoading } = useSWR(mounted ? path : null, fetcher)

    return ({ data, error, mutate, isValidating, isLoading })
}