import style from "./style.module.css";
import Button from "../../Button";
import {  IconButton,  Flex,  HStack,  Icon, Text } from '@chakra-ui/react';
import {  FiMenu,  FiPower } from 'react-icons/fi';
import Profile from "../../Profile";
import { Link }from 'react-router-dom';
import { useSpotifyAuth } from '../../../libraries/useSpotifyAuth';
//import { authorize } from '../../../libraries/apiSpotify';
import { FaSpotify } from "react-icons/fa";

export  const NavItem  = ({icon, to = "/", children, ...rest }) => {
  return (
    <Link  to={to} style={{ textDecoration: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'navy.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

export const Navbar = ({ onOpen, ...rest }) => {
  const { user } = useSpotifyAuth();  
    return (
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        bg={'navy.300'}
        borderBottomWidth="1px"
        borderBottomColor={'navy.600'}
        justifyContent={{ base: 'space-between', md: 'flex-end' }}
        {...rest}>
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />
        
        <Text as={FaSpotify}  display={{ base: 'flex', md: 'none' }} fontSize="2xl"></Text>
        <Text
          display={{ base: 'flex', md: 'none' }}
          fontSize="2xl"
          fontWeight="bold">
          Spotigi
        </Text>
  
        <HStack spacing={{ base: '0', md: '6' }}>
          <Profile userData={user} />
          <IconButton
            size="md"
            variant="outline"
            aria-label="open menu"
            icon={<FiPower />}
          />
        </HStack>
      </Flex>
      // <div className={style.Navbar}>
      //   <div className={style.logo}>
      //     <h3><FaSpotify />  Spotigi</h3>
      //   </div>
      //   {isAuthenticated ? (
      //     <div className={style.user}>
      //       <Profile userData={user} />
      //     </div>
      //   ) : (
      //      <>
      //       <Button 
      //         type="button"
      //         buttonStyle="btn--primary--solid"
      //         buttonSize="btn--medium" 
      //         onClick={authorize}
      //         >Login</Button> 
      //     </>)
      //   }       
      // </div>
    );
  };
  