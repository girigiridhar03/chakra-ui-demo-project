import {
    Box,
    Card,
    CardBody,
    Flex,
    Heading,
    Image,
  } from "@chakra-ui/react";
  
  import React from "react";

const TeamSection = () => {
    return (
        <Box
          bg={"#F6F4F5"}
          py={"5rem"}
          px={["5", "1rem", "2rem", "0", "0"]}
        >
          <Heading textAlign={['0','0','center']} textColor={"#272B37"}>MEET OUR TEAM</Heading>
    
          <Flex  justifyContent={'center'} alignItems={'center'} gap={'1rem'} flexDirection={['column','row']} flexWrap={'wrap'} >
          <Card
              maxW="sm"
              borderRadius={"0"}
              bg={"transparent"}
              boxShadow={"none"}
              py={'1.5rem'}
              w={['auto','45%','20%']}
            >
              <CardBody p={"0"} h={'100%'}>
                <Image h={'100%'} w={'auto'} src="https://ld-wt73.template-help.com/wt_prod-30129/images/person/person-1-458x538.jpg" />
              </CardBody>
            </Card>
            <Card
              maxW="sm"
              borderRadius={"0"}
              bg={"transparent"}
              boxShadow={"none"}
              py={'1.5rem'}
              w={['auto','45%','20%']}
            >
              <CardBody p={"0"}>
                <Image src="https://ld-wt73.template-help.com/wt_prod-30129/images/person/person-2-458x538.jpg" />
              </CardBody>
            </Card>
            <Card
              maxW="sm"
              borderRadius={"0"}
              bg={"transparent"}
              boxShadow={"none"}
              py={'1.5rem'}
              w={['auto','45%','20%']}
            >
              <CardBody p={"0"}>
                <Image src="https://ld-wt73.template-help.com/wt_prod-30129/images/person/person-3-458x538.jpg" />
              </CardBody>
            </Card>
            <Card
              maxW="sm"
              borderRadius={"0"}
              bg={"transparent"}
              boxShadow={"none"}
              py={'1.5rem'}
              w={['auto','45%','20%']}
            >
              <CardBody p={"0"}>
                <Image src="https://ld-wt73.template-help.com/wt_prod-30129/images/person/person-4-458x538.jpg" />

              </CardBody>
            </Card>
          </Flex>
        </Box>
      );
}

export default TeamSection
