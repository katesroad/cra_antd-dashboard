import { API } from 'services/typings'
import { UsersAPI } from 'services/users.typings'
import request from 'services/umi-request'

export const getUsers: UsersAPI.GetUsers = (params?: API.PageParams) => {
  const conf = params ? { params } : {}
  return request.get('/users', conf)
}