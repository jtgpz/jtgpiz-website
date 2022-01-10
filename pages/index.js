import NextLink from 'next/link'

import { Container, 
    Box, 
    Heading, 
    Image, 
    useColorModeValue,
    Progress,
    Icon,
    HStack,
    VStack,
    Flex,
    Center,
    Circle,
    Square,
    Button
    
} from '@chakra-ui/react'

import { ChevronRightIcon } from '@chakra-ui/icons'

import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { DiHtml5, DiJsBadge, DiWordpress, DiCss3} from "react-icons/di";


const Page = () => {
    return <Container>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'darkAlpha.200')} p={4} align="center" color="white" mt={15} mb={2}>
            
        </Box>

        <Box display={{ md: 'flex'}} mb={6}>
            <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
                James Pizarro
            </Heading>
                <p>jtgiz &#123; Developer / Designer &#125; </p>
             </Box>
             <Box flexShrink={0} 
                mt={{ base: 4, md:0 }} 
                ml={{ md:6 }} 
                align="center">
                    <Image borderColor={'whiteAlpha.800'} 
                    borderWidth={4} borderStyle="solid" 
                    maxWidth="200px" display="inline-block" 
                    borderRadius="full" 
                    src="/images/devprofile.jpg" 
                    alt="Profile Picture" />
             </Box>
         </Box>  
         <Section delay={0.1}>
             <Heading as="h3" variant="section-title">
                 About Me
             </Heading>

             <Paragraph>
                 James is a freelance and a full-stack web developer based in the Philippines who has a passion for building things and being creative on everything. He is currently pursuing a Bachelor&#39;s degree in Information Technology, specializing in database management, in Mapua University Philippines. 
             </Paragraph>
            <Box align="center" my={4} >
                <NextLink href="/works" >
                    <Button rightIcon={<ChevronRightIcon/>} colorScheme="orange">
                        See Portfolio
                    </Button>
                </NextLink>
            </Box>


         </Section>

         <Section delay={0.5}>
            <Heading
                as="h3" variant="section-title"
                >Skills
            </Heading>
            <HStack spacing='24px'>
                <Box >
                    <Center w='50px' h='50px' p={1} >
                        <DiHtml5 size='100px'/>
                    </Center>
                </Box>
                <Box>
                    <Center w='40px' h='40px' p={1}>
                        <DiJsBadge size='100px'/>
                    </Center>
                </Box>
                <Box >
                    <Center w='40px' h='40px'>
                        <DiWordpress size='100px' p={1} />
                    </Center>
                </Box>

                <Box >
                    <Center w='40px' h='40px'>
                        <DiCss3 size='100px' p={1} />
                    </Center>
                </Box>
            </HStack>
         </Section>
    </Container>
}

export default Page