import * as MuiIcons from '@mui/icons-material'

export type Icon = keyof typeof MuiIcons

export interface SidebarTabItemData {
    name: string
    routeName: string
    icon: Icon,
}
