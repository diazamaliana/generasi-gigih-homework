//import React from 'react';
//import { Redirect } from 'react-router-dom';
import { authorize } from '../../libraries/apiSpotify';
import { useSpotifyAuth } from '../../libraries/useSpotifyAuth';
import { Stack, Flex, Button, Text, VStack, useBreakpointValue,  Heading } from '@chakra-ui/react';

const Welcome = () => {  
  const { isAuthenticated } = useSpotifyAuth();  

  return (
    <Flex
    w={'full'}
    h={'100vh'}
    backgroundImage={
      'url(https://images.unsplash.com/photo-1420161900862-9a86fa1f5c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)'
    }
    backgroundSize={'cover'}
    backgroundPosition={'center center'}>
    <VStack
      w={'full'}
      justify={'center'}
      textAlign={'center'}
      px={useBreakpointValue({ base: 4, md: 8 })}
      bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
      <Stack maxW={'2xl'} align={'center'} spacing={6}>
        <Heading as="h1" size="4xl" lineHeight={1.2}>Listening is everything</Heading>
        <Text
          as="i"
          color={'white'}
          fontSize={useBreakpointValue({ base: '2md', md: '4md' })}>
          Millions of songs and podcasts. No credit card needed.
        </Text>
        <Stack direction={'row'}>
          { isAuthenticated ? (
            <p>Yoa are authorize</p>
          ):
          <Button
            onClick={authorize}
            bg={'#1db954'}
            color={'white'}
            _hover={{ bg: 'whiteAlpha.500' }}>
            Log In
          </Button>
          }    
        </Stack>
      </Stack>
    </VStack>
  </Flex>
  )
}

export default Welcome;