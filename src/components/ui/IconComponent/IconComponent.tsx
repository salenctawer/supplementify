import { FC } from 'react'
import * as MuiIcons from '@mui/icons-material'

import styles from './IconComponents.module.scss'

export type IconNames = keyof typeof MuiIcons
export type IconProps = {
    iconName: IconNames
}

export const IconComponent: FC<IconProps> = ({iconName}) => {
    const Icon = MuiIcons[iconName]
    return <Icon className={styles.icon} />
}