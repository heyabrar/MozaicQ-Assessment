import { Box, Flex, IconButton, Stack, Text, Image, Input, useDisclosure, Button, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Link } from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon, SearchIcon } from '@chakra-ui/icons';

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box bg='black' color='white' padding='12px' fontSize='13px' textAlign='center' display={{ base: 'none', md: 'block' }} >
                <Text><b>📚LAST CHANCE! </b> Registration for our 16 week Product Design course closes on Monday, February 27. <b style={{ color: '#ea4c89' }}>Sign up now before spots run out!</b></Text>
            </Box>
            <Box px={4} mb={20} className='ChackraNavBar' shadow='sm' padding='10px'>
                <Flex h={16} alignItems='center'>
                    <IconButton color='black' size='md' bg='white' icon={isOpen ? <CloseIcon /> : <HamburgerIcon fontSize='30px' color='#6e6d7a' />} aria-label='Open Menu' display={{ md: 'none' }} onClick={isOpen ? onClose : onOpen} />

                    <Flex width={{ base: "20%", md: '13%', lg: '10%' }} justifyContent={'center'} m='auto'>
                        <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Dribbble_Text_Logo_Script.svg/2560px-Dribbble_Text_Logo_Script.svg.png' width='80px' m='auto' />
                    </Flex>

                    <Flex as={'nav'} display={{ base: 'none', md: 'flex' }} spacing={4} gap='10px' w={{ base: '', md: '90%', lg: '95%' }} alignItems='center' justifyContent='space-between'>
                        <Flex justifyContent='space-around' width='40%' color='#6e6d7a' fontWeight='600'>
                            <Text>Inspiration</Text>
                            <Text>Find Work</Text>
                            <Text>Learn Design</Text>
                            <Text>Go Pro</Text>
                            <Text>Hire Designers</Text>
                        </Flex>

                        <Flex gap='20px'>
                            <Button size='sm' bg='white' colorScheme='white' color='#6e6d7a'>Sign in</Button>
                            <Button size='sm' bg='#ea4c89' color='white' colorScheme='#ea4c89'>Sign up</Button>
                        </Flex>
                    </Flex>

                </Flex>
                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }} >
                        <Stack as={'nav'} spacing={4}>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    children={<SearchIcon color='gray.300' />}
                                />
                                <Input type='text' placeholder='Search' focusBorderColor='#ea4c89'/>
                            </InputGroup>
                            <Text>Inspiration</Text>
                            <Text>Find Work</Text>
                            <Text>Learn Design</Text>
                            <Text>Go Pro</Text>
                            <Text>Hire Designers</Text>
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}