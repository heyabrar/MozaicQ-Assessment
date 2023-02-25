import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { AiFillHeart, AiFillFolderAdd } from 'react-icons/ai'

export default function VideoComponent() {
    return (
        <>
            <Flex width={{ base: '100%', lg: '50%' }} margin='auto' justifyContent='space-between' alignItems='center' padding='10px' mt={{base :'-50px'}}>
                <Flex gap='20px' >
                    <Box>
                        <Image src="https://cdn.dribbble.com/users/2959364/avatars/small/35be77ced39393359d8d5ef1ae3350b6.png?1638338792" width={{ base: '50px', md: '60px', lg: '50px' }} />
                    </Box>

                    <Box>
                        <Text fontSize={{ base: '18px', md : '20px', lg : '16px'}}><b>E-Commerce Website Design - Multi Product</b></Text>
                        <Text fontSize={{ base: '14px', md : '16px', lg: '16px' }}><span className="Musemind">Musemind - UX/UI Design Agency •</span> Follow • <span style={{ color: '#ea4c89' }}>Hire Us</span></Text>
                    </Box>
                </Flex>

                <Flex gap='10px' display={{ base: 'none', lg: 'flex' }}>
                    <Button size='sm' bg='white' colorScheme='white' color='#6e6d7a'>Save</Button>
                    <Button size='sm' bg='#ea4c89' color='white' colorScheme='#ea4c89'><span><AiFillHeart /></span> Like</Button>
                </Flex>
            </Flex>

            <Flex display={{ base: 'flex', lg: 'none' }} ml={{base:'20px',md:'10px'}} gap='10px'>
                <Button  size='sm' bg='white' border='1px solid RGBA(0, 0, 0, 0.10)' fontSize={{base :'20px', md : '22px'}}><AiFillFolderAdd /></Button>
                <Button size='sm' bg='white' border='1px solid RGBA(0, 0, 0, 0.10)' fontSize={{base :'20px', md : '22px'}}><AiFillHeart /></Button>
            </Flex>

            <Box width={{ base: '100%', md :'95%', lg: '65%' }} margin='auto' mt='20px'>
                <video autoPlay loop muted style={{ borderRadius: '10px' }}>
                    <source src="https://cdn.dribbble.com/userupload/3766216/file/original-c36f589e560e44128fd7bd184d1e87e5.mp4" type="video/mp4" />
                </video>
            </Box>
        </>
    )
}