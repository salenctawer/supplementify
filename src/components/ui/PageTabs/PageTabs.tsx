'use client'

import { Tabs, Tab } from "@mui/material"
import { useState } from "react"


export const PageTabs = () => {
    const [tabValue, setTabValue] = useState('short_term')

    const handleChange = (newValue: string) => {
        console.log(newValue)
        setTabValue(newValue)
    }

    return <Tabs value={tabValue} onChange={() => handleChange}>
        <Tab value="short_term" label="LAST MONTH" />
        <Tab value="medium_term" label="LAST 6 MONTHS" />
        <Tab value="long_term" label="ALL TIME" />
    </Tabs>
}

export default PageTabs