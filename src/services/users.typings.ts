/// <reference path="typings.ts" />
import { API } from 'services/typings'

export declare namespace UsersAPI {
  interface User {
    _id: string
    name: string
    email: string
  }

  type GetUsers = (params?: API.PageParams) => Promise<API.ApiRes<User[]>>
}
