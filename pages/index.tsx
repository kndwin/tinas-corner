import Link from 'next/link'

import { Layout } from 'components'
import { Text, Box, Flex } from '@chakra-ui/react'

export default function IndexPage() {
	return (
		<Layout>
			<Text 
				fontSize='7xl'>
				tina's <span>corner</span>
			</Text>

			<Box 
				margin='6em 0'
				padding='1em' 
				color='#F58C86'
				background='#FFEBDD'
				fontFamily='monospace'
				fontWeight='bold'
			>
				Hello there! Welcome to my little corner where I share my teaching experience and resources with the world. Enjoy! 🙂
			</Box>

			<Flex direction='column'
				alignItems='center'
			>
				<Link href='my-teachers-experience'>
					<Box
						cursor='pointer'
						borderRadius='lg'
						width='80%'
						margin='1em 0'
						display='flex'
						alignItems='center'
						padding='2em' 
						background='#FFEBDD'
						shadow='xl'
					>
						<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M19 0.666656C12.0205 0.666656 1.71904 5.64802 0.741876 29.8389C0.657543 31.9197 2.33129 33.6667 4.41212 33.6667H9.33563C11.9207 35.9415 15.2995 37.3333 19 37.3333C22.7005 37.3333 26.0793 35.9415 28.6644 33.6667H33.5879C35.6687 33.6667 37.3442 31.9197 37.2617 29.8389C36.2827 5.64802 25.9795 0.666656 19 0.666656ZM11.6667 17.1667H26.3333C28.3592 17.1667 30 18.8075 30 20.8333V22.6667C30 28.7635 25.0969 33.6667 19 33.6667C12.9032 33.6667 8.00001 28.7635 8.00001 22.6667V20.8333C8.00001 18.8075 9.64085 17.1667 11.6667 17.1667Z" fill="#F58C86"/>
						</svg>

						<Text ml='5' fontSize='2xl' color='#F58C86' fontFamily='monospace' fontWeight='bold'>
							my teacher experience
						</Text>
					</Box>

				</Link>

				<Box
					borderRadius='lg'
					cursor='pointer'
					width='80%'
					margin='1em 0'
					padding='2em' 
					display='flex'
					background='#EFF6EE'
					shadow='lg'
				>
					<svg width="38" height="30" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M33.6667 4.00001H19L16.4077 1.40768C15.7202 0.720177 14.787 0.333344 13.8153 0.333344H4.33335C2.31668 0.333344 0.666683 1.98334 0.666683 4.00001V26C0.666683 28.0167 2.31668 29.6667 4.33335 29.6667H33.6667C35.6833 29.6667 37.3334 28.0167 37.3334 26V7.66668C37.3334 5.65001 35.6833 4.00001 33.6667 4.00001Z" fill="#9EBF8A"/>
					</svg>

					<Text ml='5' fontSize='2xl' color='#9EBF8A' fontFamily='monospace' fontWeight='bold'>
						<Link href="/about">
							<a>kids church resources</a>
						</Link>
					</Text>
				</Box>


				<Box
					cursor='pointer'
					shadow='lg'
					borderRadius='lg'
					width='80%'
					margin='1em 0'
					display='flex'
					padding='2em' 
					background='#D8E3FF'
				>
					<svg width="38" height="30" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M33.6667 4.00001H19L16.4077 1.40768C15.7202 0.720177 14.787 0.333344 13.8153 0.333344H4.33335C2.31668 0.333344 0.666683 1.98334 0.666683 4.00001V26C0.666683 28.0167 2.31668 29.6667 4.33335 29.6667H33.6667C35.6833 29.6667 37.3334 28.0167 37.3334 26V7.66668C37.3334 5.65001 35.6833 4.00001 33.6667 4.00001Z" fill="#6E8AD2"/>
					</svg>
					<Text ml='5' fontSize='2xl' color='#6E8AD2' fontFamily='monospace' fontWeight='bold'>
						<Link href="/about">
							<a>teaching resources</a>
						</Link>
					</Text>
				</Box>
			</Flex>
		</Layout>
	)
}
