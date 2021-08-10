import { Link } from 'react-router-dom'
//import style from './style.module.css'
//import { IoHomeOutline, IoAddCircleOutline } from "react-icons/io5"
import {    FiHome,  FiPlus } from 'react-icons/fi';
import { FaSpotify } from "react-icons/fa";
import {  Box,  CloseButton,  Flex, Text, Drawer, DrawerContent,   useDisclosure } from '@chakra-ui/react';
import { NavItem, Navbar } from '../Navbar'

const LinkItems = [
  { name: 'Home', icon: FiHome, to:'/home'},
  { name: 'Create Playlist', icon: FiPlus, to:'/create-playlist' },
]


export default function SidebarWithHeader ({children}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={'navy.400'}>
        <SidebarContent
          onClose={() => onClose}
          display={{ base: 'none', md: 'block' }}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full">
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        {/* mobilenav */}
        <Navbar onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }} p="4">
          {children}
        </Box>
    </Box>

    // <>
    // <aside className={style.sidebar}>
    //   <ul >
    //     <Link to="/home" className={style.menu}>
    //       <li><IoHomeOutline fontSize="1.3em"/><span> Home </span></li>
    //     </Link>
    //     <Link to="/create-playlist" className={style.menu}>
    //       <li><IoAddCircleOutline fontSize="1.3em"/><span>Create Playlist </span></li>        
    //     </Link>
    //   </ul>    
    // </aside>
    // </> 
  )
}

export const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={'navy.300'}
      borderRight="1px"
      borderRightColor={'navy.500'}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="14" justifyContent="space-between">
        <Text as={FaSpotify} fontSize="2xl"></Text>
        <Text fontSize="2xl" fontWeight="600">Spotigi</Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} to={link.to}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};