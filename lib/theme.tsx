import { extendTheme } from '@chakra-ui/react'
// import { mode } from '@chakra-ui/theme-tools'


const fonts = {
    heading: "Roboto" // this is right
}


const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const theme = extendTheme({ config, fonts })
export default theme