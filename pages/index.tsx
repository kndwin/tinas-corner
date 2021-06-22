import Link from 'next/link'

import { Layout } from 'components'
import { Text, Box, Flex } from '@chakra-ui/react'

export default function IndexPage() {
	return (
		<Layout>
			<Text 
				color='red.800'
				fontSize='7xl'>
				tina's <span>corner</span>
			</Text>

			<Box 
				margin='2em 0'
				padding='2em' 
				background='orange.50'
			>
				Hello there! Welcome to my little corner where I share my teaching experience and resources with the world. Enjoy! 🙂
			</Box>

			<Flex direction='column'
				alignItems='center'
			>
				<Box
					borderRadius='lg'
					width='80%'
					margin='1em 0'
					padding='2em' 
					background='orange.100'
					shadow='xl'
				>
					<Text fontSize='2xl'>
						<Link href="/about">
							<a>my teacher experience</a>
						</Link>
					</Text>
				</Box>


				<Box
					borderRadius='lg'
					width='80%'
					margin='1em 0'
					padding='2em' 
					display='flex'
					background='green.100'
					shadow='lg'
				>
					<Text fontSize='2xl'>
						<Link href="/about">
							<a>kids church resources</a>
						</Link>
					</Text>
				</Box>


				<Box
					shadow='lg'
					borderRadius='lg'
					width='80%'
					margin='1em 0'
					padding='2em' 
					background='blue.100'
				>
					<Text fontSize='2xl'>
						<Link href="/about">
							<a>teaching resources</a>
						</Link>
					</Text>
				</Box>
			</Flex>
		</Layout>
	)
}
