'use client'

import { FC } from "react"
import { useAppSelector } from "@/redux/hooks"

import styles  from './AppSidebar.module.scss'


export const AppSidebar: FC = () => {
    const sidebarAuthTabs = useAppSelector(state => state.sidebar.sidebarAuthTabs)
    const sidebarNonAuthTabs = useAppSelector(state => state.sidebar.sidebarNonAuthTabs)

    return <div className={styles.appSidebar}>fsdfsdf</div>
}