import { Continer, Heading, SimpleGrid, Divider, Container} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbDEL from '../public/images/DEL.png'



const Works = () => {
    return (
        <Container mt={20}>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="DEL" title="DEL - Disaster and Emergency Locator" thumbnail={thumbDEL}>
                    Disaster and Emergency Locator or DEL is a mobile application that applies modern tracking technology to emergency situations that involve public safety.
                    </WorkGridItem>

                    
                </Section>
            </SimpleGrid>


        </Container>
    )
}
export default Works