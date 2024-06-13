import { Box,    Button,    Container,    Heading, Text } from '@chakra-ui/react'
import React from 'react'

const BgSection = () => {
  return (
    <Box bg={'url(https://ld-wt73.template-help.com/wt_prod-30129/images/background/bg-4-1920x930.jpg)'} w={'100%'} h={'100vh'} bgSize={'cover'} bgPosition={'center'}  bgRepeat="no-repeat" textColor={'white'} display={'flex'} justifyContent={'center'} alignItems={'center'} px={['5rem','5rem','6rem']} flexDirection={'column'} py={'1.5rem'}>

        <Box display={'flex'} flexDirection={'column'} gap={'.5rem'} alignItems={'flex-start'} mt={'auto'}>
            <Box fontSize={['1rem','1.1rem','1.3rem','1.3rem','1.5rem']} >
            <Text fontStyle={'italic'} fontWeight={'400'}>Embrace Your Faith</Text>
            </Box>
            <Heading fontSize={['2.5rem','2.5rem','2.5rem','2.5rem','5rem']} fontWeight={'500'}>SHARE THE LOVE</Heading>
            <Container maxW={'1200px'} px='0' fontSize={['1rem','1rem','1.1rem','1.5rem']} pr={[0,'5rem','15rem','30rem','40rem']} >
            <Text>At our church,we help people to find their way back to God.We accomplish this by reaching people far from God.</Text>
            </Container>
           <Button  display={'block'} mt={'1.5rem'} borderRadius={'none'} fontSize={['auto','auto','1.3rem']} fontWeight={'500'}>SEE MORE</Button>
        </Box>

        <Box display={'block'} mt={'auto'} textAlign={'center'}>
            <Heading fontSize={['1.2rem','1.2rem','1.6rem']} fontWeight={['500']}>355 S Grand Ave, Los Angeles, CA 90071</Heading>
            <Box  fontSize={['.9rem','.9rem','1.3rem']} pt={'1rem'} px={['2.5rem']}>
            <Text fontWeight={'300'}>Feel free to visit our firm’s office at any time.</Text>
            </Box>
        </Box>
    </Box>
  )
}

export default BgSection
