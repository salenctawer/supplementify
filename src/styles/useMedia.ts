import { useMediaQuery, useTheme } from "@mui/material"

const useMedia = () => {
    const theme = useTheme()

    const mdSize = useMediaQuery(theme.breakpoints.up('md'))

    const lgSize = useMediaQuery(theme.breakpoints.up('lg'))

    const xlSize = useMediaQuery(theme.breakpoints.up('xl'))

    const smSize = useMediaQuery(theme.breakpoints.up('sm'))

    return {
        smSize,
        mdSize,
        lgSize,
        xlSize,
    }
}

export default useMedia