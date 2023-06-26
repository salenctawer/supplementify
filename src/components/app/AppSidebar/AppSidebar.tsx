'use client'

import { FC, useEffect } from "react"
import { useAppSelector } from "@/redux/hooks"
import { useRouter } from 'next/navigation'
import { SidebarTabItemData } from "@/types/SidebarData"

import { IconComponent } from "@/components/ui/IconComponent/IconComponent"
import { Button } from "@mui/material"

import styles from './AppSidebar.module.scss'


export const AppSidebar: FC = () => {
    const router = useRouter()
    const sidebarTabs = useAppSelector(state => state.sidebar.sidebarAuthTabs)

    const onItemClick = (item: SidebarTabItemData) => {
        if(!item.routeName) {
           return console.log('change theme')
        }

        return router.push(item.routeName)
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