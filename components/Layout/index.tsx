import { Container, Flex, Text, Spacer} from "@chakra-ui/react"
import React, { ReactElement } from "react"

export interface LayoutProps {	
	children: React.ReactNode
}

export default function Layout({ children }: LayoutProps): ReactElement | null {
	return (
		<Container 
			height='100vh' 
			alignItems='center' 
			justifyContent='center'
		>
			<Flex 
				flex='1'
				padding='2em 0'
				direction='column'
			>
				{children}
			</Flex>
			<Spacer />
			<Text 
				display='flex' 
				alignItems='center' 
				justifyContent='center'
				color='red.800'
			>
				designed by tina, build by kndwin
			</Text>
		</Container>
	)
}
