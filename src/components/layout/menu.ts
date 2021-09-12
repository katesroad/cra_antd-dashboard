import {
  HomeOutlined,
  LineChartOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { IMenu } from 'components/layout/menu.typings'

export const APP_MENUS: IMenu[] = [
  {
    access: ['admin'],
    name: 'Admin',
    key: 'admin',
    path: '/admin',
    icon: HomeOutlined,
    subMenus: [
      {
        access: ['admin'],
        name: 'Analytics',
        key: 'analytics',
        path: '/admin/analytics',
        icon: LineChartOutlined,
      },
      {
        access: ['admin'],
        name: 'Users',
        key: 'users',
        path: '/admin/users',
        icon: UserOutlined,
      },
    ],
  },
]
