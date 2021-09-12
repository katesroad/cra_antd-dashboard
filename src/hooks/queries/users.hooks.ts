import { useQuery } from 'react-query'
import { API } from 'services/typings'
import { getUsers } from 'services/users.services'
import { getUserListKey, getUserMenuKey } from './query-key'

export const useGetUsers = (params?: API.PageParams) => {
  const queryKey = getUserListKey()
  const qureryFn = () => getUsers(params)

  return useQuery(queryKey, qureryFn)
}
