import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import React from "react";

const ImageSection = () => {
  return (
    <Box
      mt={"5rem"}
      bg={"#F6F4F5"}
      py={"5rem"}
      px={["5", "1rem", "2rem", "0", "0"]}
    >
      <Heading textAlign={['0','0','center']} textColor={"#272B37"}>WHAT WE OFFER</Heading>

      <Flex  justifyContent={'center'} alignItems={'center'} gap={'1rem'} flexDirection={['column','row']} flexWrap={'wrap'} >
        <Card
          maxW="sm"
          borderRadius={"0"}
          bg={"transparent"}
          boxShadow={"none"}
          py={'1.5rem'}
          w={['auto','45%','20%']}
        >
          <CardBody p={"0"}>
            <Image  src="https://ld-wt73.template-help.com/wt_prod-30129/images/image-18-425x338.jpg" />
            <Stack mt="6" spacing="3" textAlign={"center"}>
              <Text textColor={"#CE4A46"}>Explore the Bible with Us</Text>
              <Heading size="md">Bible Readings</Heading>
            </Stack>
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
            <Image src="https://ld-wt73.template-help.com/wt_prod-30129/images/image-12-425x338.jpg" />
            <Stack mt="6" spacing="3" textAlign={"center"}>
              <Text textColor={"#CE4A46"}>Take Part</Text>
              <Heading size="md">Our Events</Heading>
            </Stack>
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
            <Image src="https://ld-wt73.template-help.com/wt_prod-30129/images/image-1-425x338.jpg" />
            <Stack mt="6" spacing="3" textAlign={"center"}>
              <Text textColor={"#CE4A46"}>Loactions</Text>
              <Heading size="md">Our Church</Heading>
            </Stack>
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
            <Image src="https://ld-wt73.template-help.com/wt_prod-30129/images/image-8-425x338.jpg" />
            <Stack mt="6" spacing="3" textAlign={"center"}>
              <Text textColor={"#CE4A46"}>Join Our Communities</Text>
              <Heading size="md">Our Groups</Heading>
            </Stack>
          </CardBody>
        </Card>
      </Flex>
    </Box>
  );
};

export default ImageSection;
