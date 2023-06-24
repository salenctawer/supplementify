'use client'

import { FC, useEffect } from "react"
import { useAppSelector } from "@/redux/hooks"

import { IconComponent } from "@/components/ui/IconComponent/IconComponent"

import styles  from './AppSidebar.module.scss'


export const AppSidebar: FC = () => {
    const sidebarTabs = useAppSelector(state => state.sidebar.sidebarAuthTabs)


    return <div className={styles.sidebar}>
        {sidebarTabs.map((item) => (
            <div className={styles.item} key={item.name}>
                <IconComponent iconName={item.icon}/>
                <div className={styles.itemText}>{item.name}</div>
            </div>
        ))}
    </div>
}