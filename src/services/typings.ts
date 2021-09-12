export declare namespace API {
  interface PageParams {
    size: number
    page: number
  }

  interface ApiRes<T> {
    data?: T
    ok: boolean
    msg?: string
  }
}
