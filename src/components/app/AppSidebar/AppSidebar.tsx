'use client'

import React, { FC, useEffect } from "react"
import { useAppSelector } from "@/redux/hooks"
import { useRouter } from 'next/navigation'
import { SidebarTabItemData } from "@/types/SidebarData"

import { IconComponent } from "@/components/ui/IconComponent/IconComponent"
import { Button } from "@mui/material"

import styles from './AppSidebar.module.scss'
import { ColorModeContext } from "@/styles/themeBuilder"


export const AppSidebar: FC = () => {
    const { toggleColorMode } = React.useContext(ColorModeContext)
    const router = useRouter()
    const sidebarTabs = useAppSelector(state => state.sidebar.sidebarAuthTabs)

    const onItemClick = (item: SidebarTabItemData) => {
        if(!item.routeName) {
           return toggleColorMode()
        }

        router.push(item.routeName)
    }

    return <div className={styles.sidebar}>
        {sidebarTabs.map((item) => (
            <Button onClick={() => onItemClick(item)} className={styles.item} key={item.name}>
                <IconComponent iconName={item.icon} />
                <div className={styles.itemText}>{item.name}</div>
            </Button>
        ))}
    </div>
}

export default AppSidebar