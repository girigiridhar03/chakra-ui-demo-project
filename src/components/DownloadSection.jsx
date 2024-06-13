import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { TiTick } from "react-icons/ti";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const DownloadSection = () => {
  return (
    <Box px={["5", "4rem", "5rem", "0", "0"]}>
      <Flex
        bg={"#F6F4F5"}
        flexDirection={["column", "column", "column", "row"]}
      >
        <Image
          src="https://ld-wt73.template-help.com/wt_prod-30129/images/image-13-837x551.jpg"
          alt="image"
          h={["auto", "auto", "300px", "450px", "auto"]}
          w={["auto", "auto", "auto", "400px", "50%"]}
          objectFit={"cover"}
        />
        <Box
          py={["1.4rem", "1.4rem", "1.4rem", "2.8rem", "9rem"]}
          px={["5", "5", "5", "3rem", "3rem", "10rem"]}
          display={"flex"}
          flexDirection={"column"}
          gap={["1rem", "1rem", "1rem", "1.5rem", "2.5rem"]}
        >
          <Heading
            textColor={"#272B37"}
            fontWeight={"semibold"}
            fontSize={["1.5rem", "1.5rem", "1.5rem", "1.9rem", "3rem"]}
          >
            DOWNLOAD THE APP
          </Heading>
          <Text
            fontSize={[".9rem", "1rem", "1rem", "1.1rem"]}
            textColor={"#272B37"}
          >
            To stay connected with our church and receive the latest news and
            updates from us, download the free Charia Church app that offers:
          </Text>

          <List spacing={3}>
            <ListItem>
              <ListIcon as={TiTick } color="#CF4A46" />
              Simple Donations
            </ListItem>
            <ListItem>
              <ListIcon as={TiTick} color="#CF4A46" />
              Sermons
            </ListItem>
            <ListItem>
              <ListIcon as={TiTick } color="#CF4A46" />
              Event Notifications
            </ListItem>
            {/* You can also use custom icons from react-icons */}
            <ListItem>
              <ListIcon as={TiTick} color="#CF4A46" />
              Prayer Requests
            </ListItem>
            <ListItem>
              <ListIcon as={TiTick} color="#CF4A46" />
              The Bible
            </ListItem>
          </List>

          <Stack direction="row" spacing={4} align="center">
          
            <Button
              colorScheme="black"
              variant="outline"
              borderRadius={"none"}
              fontSize={[".9rem"]}
              display={'flex'} alignItems={'center'} gap={'.3rem'}
            >
          <Text fontSize={'1.2rem'} textColor={'#CF4A46'}>
            <FaApple />
            </Text>
             APPLE STORE
            </Button>
            <Button
              colorScheme="black"
              variant="outline"
              borderRadius={"none"}
              fontSize={[".9rem"]}
              display={'flex'} alignItems={'center'} gap={'.3rem'}
            >
             <Text fontSize={'1.2rem'} textColor={'#CF4A46'}>
            <IoLogoGooglePlaystore  />
             </Text>
              PLAY STORE
            </Button>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default DownloadSection;
