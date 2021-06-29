import { Box, Container, Flex, Text, Spacer} from "@chakra-ui/react"
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
			<Flex height='100%' 
				padding='2em 0'
				direction='column'
			>
				{children}
				<Spacer flexDirection='column'/>
				<Box>
					<Text 
						margin='3em 0'
						display='flex' 
						fontFamily='monospace'
						alignItems='center' 
						justifyContent='center'
						color='#F58C86'
					>
						designed by tina, build by kndwin
					</Text>
				</Box>
			</Flex>
		</Container>
	)
}
