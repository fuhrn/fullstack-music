import useSWR from 'swr'
import fetcher from './fetcher'

// custom hooks
// "I would never make a client side react app without using something like swr or react query, any of those two"
// "before I was using redux, bunks, sagas, things like that"
// and this works with graphql as well
export const useMe = () => {
  const { data, error } = useSWR('/me', fetcher)
  
  // console.log('useMe: ', data)
  return {
    user: data,
    isLoading: !data && !error,
    isError: error,
  }
}

export const usePlaylist = () => {
  const { data, error } = useSWR("/playlist", fetcher);

  return {
    playlists: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  };
};