import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { RiArrowDropDownFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import '../components/Navbar.css'

import React, { useState } from "react";
import IconSVG from "./IconSVG";

const Navbar = () => {
   let[icons,setIcon] = useState("Menu");
   let[left,setLeft] = useState("0")

   const handleOnClick = () =>{
       setIcon("Cross");
       setLeft("1")
       if(icons === "Cross"){
        setIcon("Menu")
        setLeft("0")
       }
   }

  return (
    <>
      {/* small to lager NavBar */}
      <Box
        position={"absolute"}
        top="0"
        left="0"
        zIndex={"9999"}
        w="100%"
        display={["flex", "flex", "flex", "flex", "none"]}
        alignItems="center"
        px="5"
        py={"1.5rem"}
        bg="transparent"
        justifyContent="space-between"
        textColor="white"
      >
        <Box position={'fixed'} zIndex={0} bg={'black'} w='310px'   top={'-30px'}  bottom={'0'}  display={'flex'} flexDirection={'column'} py={'10rem'} gap={'2rem'} px={'2.5rem'}  fontSize={['1.2rem','1.2rem','1.5rem']} fontWeight={'semibold'} className={`${left === "0" ? "hideMenu" : "activeMenu" }`} 
        >
                <Text>About</Text>
                <Text>Donations</Text>
                <Text>Pages</Text>
                <Text>Sermons</Text>
                <Text>Shop</Text>
                <Text>Contact Us</Text>
            </Box>

        <Box flex="1" display="flex" alignItems="center" gap=".3rem" zIndex={9999}>
          <Box onClick={handleOnClick} fontSize={["40px", "40px", "40px", "45px"]} cursor={"pointer"}  zIndex={9999}>
            {icons === "Menu" ? <IoMenu className="menuIcon"  /> : <RxCross2 />}
           
           
          </Box>
          <Box
            flex={[1, 1, 1]}
            display="flex"
            justifyContent={[0, 0, "center"]}
            alignItems="center"
            gap={[".3rem", ".3rem", ".5rem", ".8rem"]}
            cursor={"pointer"}
            zIndex={99999}
          >
            <IconSVG />
          </Box>
        </Box>

        <Flex gap={["0.6rem", "0.7rem", "1rem"]} align="center">
          <Box fontSize={["1.3rem", "1.3rem", "1.6rem"]} cursor={"pointer"}>
            <FaShoppingCart />
          </Box>
          
           
           <Menu>
                <MenuButton  as={Button}  bg={'transparent'} textColor={'white'} fontSize={'1.5rem'} _hover={'none'} _active={'none'} borderRadius={'50%'}>
                <IoMenu />
                </MenuButton>
                <MenuList px={'1rem'} py={'1rem'}>
                  <MenuGroup  textColor={'black'}>
                    <MenuItem textColor={'#CF4A46'} fontSize={'1.3rem'} fontWeight={'bold'}>FREE CONSULTATION</MenuItem>
                    <MenuItem textColor={'#5F5F5F'} fontSize={'1.5rem'} fontWeight={'semibold'}>800.567.1234</MenuItem>
                    <MenuItem textColor={'#5F5F5F'} fontSize={'1.1rem'} fontWeight={'semibold'}>info@demolink.org</MenuItem>
                    <MenuItem textColor={'#5F5F5F'}  fontSize={'1.1rem'} fontWeight={'semibold'}>355 S Grand Ave, <br />
                    Los Angeles, CA 90071</MenuItem>
                  </MenuGroup>
                </MenuList>
              </Menu>
        </Flex>
      </Box>

      {/* Extra large Navbar */}
      <Box
        display={["none", "none", "none", "none", "flex"]}
        w={"100%"}
        position={"absolute"}
        top={"0"}
        left={"0"}
        py={"4rem"}
        px={"6rem"}
        textColor={"white"}
        fontWeight={"bold"}
        fontSize={"1rem"}
        justifyContent={"space-between"}
      >
        <Box display={"flex"} alignItems={"center"} gap={"5rem"}>
          <IconSVG />
          <Box display={"flex"} alignItems={"center"} gap={"1rem"}>
            <Box cursor={"pointer"}>
              <Popover isLazy>
                <PopoverTrigger>
                  <Text
                    display={"flex"}
                    flexDirection={"row-reverse"}
                    alignItems={"center"}
                  >
                    <RiArrowDropDownFill
                      fontSize={"1.5rem"}
                      fontWeight={"bold"}
                    />
                    About
                  </Text>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverHeader fontWeight="semibold" textColor={"black"}>
                    Team Member
                  </PopoverHeader>
                  <PopoverArrow />
                  <PopoverCloseButton />
                </PopoverContent>
              </Popover>
            </Box>

            <Box cursor={"pointer"}>
              <Popover isLazy>
                <PopoverTrigger>
                  <Text
                    display={"flex"}
                    flexDirection={"row-reverse"}
                    alignItems={"center"}
                  >
                    <RiArrowDropDownFill fontSize={"1.5rem"} />
                    DONATIONS
                  </Text>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverHeader fontWeight="semibold" textColor={"black"}>
                    Single Dontaion
                  </PopoverHeader>
                  <PopoverArrow />
                  <PopoverCloseButton />
                </PopoverContent>
              </Popover>
            </Box>

            <Box cursor={"pointer"}>
              <Popover isLazy>
                <PopoverTrigger>
                  <Text
                    display={"flex"}
                    flexDirection={"row-reverse"}
                    alignItems={"center"}
                  >
                    <RiArrowDropDownFill fontSize={"1.5rem"} />
                    PAGES
                  </Text>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverHeader fontWeight="semibold" textColor={"black"}>
                    Blog
                  </PopoverHeader>
                  <PopoverHeader fontWeight="semibold" textColor={"black"}>
                    404
                  </PopoverHeader>
                  <PopoverHeader fontWeight="semibold" textColor={"black"}>
                    Typography
                  </PopoverHeader>
                  <PopoverHeader fontWeight="semibold" textColor={"black"}>
                    Coming soon
                  </PopoverHeader>
                  <PopoverHeader fontWeight="semibold" textColor={"black"}>
                    Search Results
                  </PopoverHeader>
                  <PopoverArrow />
                  <PopoverCloseButton />
                </PopoverContent>
              </Popover>
            </Box>

            <Box cursor={"pointer"}>
              <Popover isLazy>
                <PopoverTrigger>
                  <Text
                    display={"flex"}
                    flexDirection={"row-reverse"}
                    alignItems={"center"}
                  >
                    <RiArrowDropDownFill fontSize={"1.5rem"} />
                    SERMONS
                  </Text>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverHeader fontWeight="semibold" textColor={"black"}>
                    Sermons Catogries
                  </PopoverHeader>
                  <PopoverHeader fontWeight="semibold" textColor={"black"}>
                    single Sermons
                  </PopoverHeader>
                  <PopoverArrow />
                  <PopoverCloseButton />
                </PopoverContent>
              </Popover>
            </Box>

            <Box cursor={"pointer"}>
              <Popover isLazy>
                <PopoverTrigger>
                  <Text
                    display={"flex"}
                    flexDirection={"row-reverse"}
                    alignItems={"center"}
                  >
                    <RiArrowDropDownFill fontSize={"1.5rem"} />
                    SHOP
                  </Text>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverHeader fontWeight="semibold" textColor={"black"}>
                    Single Product
                  </PopoverHeader>
                  <PopoverHeader fontWeight="semibold" textColor={"black"}>
                    Check Out
                  </PopoverHeader>
                  <PopoverHeader fontWeight="semibold" textColor={"black"}>
                    Cart
                  </PopoverHeader>
                  <PopoverArrow />
                  <PopoverCloseButton />
                </PopoverContent>
              </Popover>
            </Box>

            <Box cursor={"pointer"}>CONTACT US</Box>
          </Box>
        </Box>

        <Box display={"flex"} alignItems={"center"} gap={"3rem"}>
          <Box fontSize={["1.6rem"]} cursor={"pointer"}>
            <FaShoppingCart />
          </Box>

          <Box display={"flex"} alignItems={"center"} gap={".8rem"}>
            Donate
           
              <Menu>
                <MenuButton  as={Button}  bg={'transparent'} textColor={'white'} fontSize={'1.5rem'} _hover={'none'} _active={'none'} borderRadius={'50%'}>
                <IoMenu />
                </MenuButton>
                <MenuList px={'1rem'} py={'1rem'}>
                  <MenuGroup  textColor={'black'}>
                    <MenuItem textColor={'#CF4A46'} fontSize={'1.3rem'} fontWeight={'bold'}>FREE CONSULTATION</MenuItem>
                    <MenuItem textColor={'#5F5F5F'} fontSize={'1.5rem'} fontWeight={'semibold'}>800.567.1234</MenuItem>
                    <MenuItem textColor={'#5F5F5F'} fontSize={'1.1rem'} fontWeight={'semibold'}>info@demolink.org</MenuItem>
                    <MenuItem textColor={'#5F5F5F'}  fontSize={'1.1rem'} fontWeight={'semibold'}>355 S Grand Ave, <br />
                    Los Angeles, CA 90071</MenuItem>
                  </MenuGroup>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Box>
    </>
  );
};

export default Navbar;
