import { ChakraProvider, extendTheme } from "@chakra-ui/react"
// 1. Import `extendTheme`

const theme = extendTheme({
	styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "#FFFDF9",
				height: '100vh'
      }
    },
  },
})


export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
