import { Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { AiFillFolderAdd, AiFillHeart } from "react-icons/ai";
import { GrMail } from 'react-icons/gr'

export default function DesignAgency() {
    const Designs = [
        {
            id: 1,
            img: 'https://cdn.dribbble.com/userupload/3772713/file/still-fc903bb220a0746203642bc9bce89e08.png?compress=1&resize=450x338&vertical=top'
        },
        {
            id: 2,
            img: 'https://cdn.dribbble.com/userupload/3671932/file/still-4de2fb570ae94f73e6ce4bc171af9f76.png?compress=1&resize=450x338&vertical=top'
        },
        {
            id: 3,
            img: 'https://cdn.dribbble.com/userupload/3133357/file/still-c69d46f8a422543a46e860382fdab622.png?compress=1&resize=450x338&vertical=top'
        },
        {
            id: 4,
            img: 'https://cdn.dribbble.com/userupload/3234368/file/original-adf1462be3ec7a85f7d2a6bb8977e551.png?compress=1&resize=450x338&vertical=top'
        }
    ]
    return (
        <>
            <Box mt={{ base: '60px', md: '80px', lg: '120px' }} textAlign='center' lineHeight={{ base: '30px' }}>
                <Image src="https://cdn.dribbble.com/users/2959364/avatars/small/35be77ced39393359d8d5ef1ae3350b6.png?1638338792" alt="image" m='auto' width={{ base: '70px' }} />
                <Text mt={{ base: '20px' }} fontWeight='650' fontSize={{ base: '19px', lg: '20px' }}>Musemind - UX/UI Design Agency</Text>
                <Text>Crafting Digital Products for Startup, Specializing SaaS👌</Text>
                <Button mt={{ base: '20px' }} size='md' bg='#ea4c89' color='white' colorScheme='#ea4c89'><span style={{ marginRight: '5px' }}><GrMail /> </span>Hire Us</Button>
            </Box>

            <Box width={{ base: '95%', lg: '80%' }} m='auto' mt={{ base: '55px' }}>
                <Flex fontSize={{ base: '14px' }} justifyContent='space-between'>
                    <Text fontWeight='700'>More by Musemind - UX/UI Design Agency</Text>
                    <Text color='#ea4c89'>View Profile</Text>
                </Flex>

                <SimpleGrid columns={[1, 2, 2, 4]} rowGap={{ base: '40px' }} mt={{ base: '20px' }} columnGap={{ base: '0', md: '30px', lg: '50px' }}>
                    {Designs.length > 0 && Designs.map((elem) => {
                        return <Box key={elem.id}>
                            <Image src={elem.img} borderRadius='10px' cursor='pointer' className="DesignImage"/>
                            <div ml={{ base: '20px', md: '10px' }} gap='10px' className="ShowOnHover">
                                <Button size='sm' bg='white'  colorScheme='white' color='black' border='1px solid RGBA(0, 0, 0, 0.10)' fontSize={{ base: '20px', md: '22px' }}><AiFillFolderAdd /></Button>
                                <Button size='sm' bg='white' colorScheme='white' color='black' border='1px solid RGBA(0, 0, 0, 0.10)' fontSize={{ base: '20px', md: '22px' }}><AiFillHeart /></Button>
                            </div>
                        </Box>
                    })}
                </SimpleGrid>

            </Box>
        </>
    )
}