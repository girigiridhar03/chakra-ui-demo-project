import { Box, Container, Text } from '@chakra-ui/react'
import React from 'react'

const MatterSection = () => {
  return (
    
     <Container maxW={'1200px'} py={'6rem'} px={['5','4rem','5rem','5rem','0']}>
        <Box px="5" borderLeft={'3px solid #CE4A46'}>
            <Text fontSize={['1.2rem','1.2rem','1.5rem','1.8rem','2rem']} fontWeight={['semibold','500']} lineHeight={['26px','26px','30px','40px']} textColor={'#565962'}>
              Our church incorporates God's family into our fellowship. We provide a warm,authentic community,welcoming new believers into the body Christ through baptism.
            </Text>
        </Box>
     </Container>
  )
}

export default MatterSection
