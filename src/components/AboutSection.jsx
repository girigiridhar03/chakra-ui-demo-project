import { Box, Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const AboutSection = () => {
  return (
    <Box px={["5", "4rem", "5rem", "0", "0"]}>
      <Flex bg={"#F6F4F5"} flexDirection={['column','column','column','row']}>
        <Image
          src="https://ld-wt73.template-help.com/wt_prod-30129/images/image-19-837x551.jpg"
          alt="image"
          h={['auto','auto','300px','450px','auto']}
          w={['auto','auto','auto','400px','50%']}
          objectFit={'cover'}
        />
        <Box
          py={["1.4rem",'1.4rem','1.4rem','2.8rem','9rem']}
          px={["5",'5','5','3rem','3rem','10rem']}
          display={"flex"}
          flexDirection={"column"}
          gap={['1rem','1rem','1rem','1.5rem','2.5rem']}
        >
          <Heading
            textColor={"#272B37"}
            fontWeight={"semibold"}
            fontSize={["1.5rem",'1.5rem','1.5rem','1.9rem','3rem']}
          >
            ABOUT OUR CHURCH
          </Heading>
          <Text fontSize={[".9rem",'1rem','1rem','1.1rem']} textColor={"#272B37"}>
            At Charia Church, we want the love that Christ showed on the cross
            to flow out of our lives, impacting the community.
          </Text>
          <Text fontSize={[".9rem",'1rem','1rem','1.1rem']} textColor={"#272B37"}>
            We come from all different backgrounds and cultures but are united
            in the pursuit and worship of Christ. Above all else, we want to
            glorify God. We strongly believe that God does His work through the
            local church and that it is a vital part of the Christian life.
            Please join us as we come together and let the Gospel transform us!
          </Text>

          <Stack direction="row" spacing={4} align="center">
            <Button bg="#CF4A46" _hover={'none'} _active={'none'} variant="solid" textColor={'whitesmoke'} borderRadius={'none'} fontSize={['.9rem']}>
              DONATE NOW
            </Button>
            <Button colorScheme="black" variant="outline" borderRadius={'none'} fontSize={['.9rem']}>
              READ MORE
            </Button>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default AboutSection;
