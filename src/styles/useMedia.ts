import { useMediaQuery, useTheme } from "@mui/material"

const useMedia = () => {
    const theme = useTheme()

    const mdSize = useMediaQuery(theme.breakpoints.up('md'))

    const lgSize = useMediaQuery(theme.breakpoints.up('lg'))

    return {
        mdSize,
        lgSize,
    }
}

export default useMedia