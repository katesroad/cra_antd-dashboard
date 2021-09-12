export interface IMenu {
  access?: string[]
  name: string
  path: string
  key: string
  icon?: string | React.ReactNode
  subMenus?: IMenu[]
}
