import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { CiBasketball } from 'react-icons/ci'
import { BsFacebook, BsInstagram, BsPinterest, BsTwitter } from 'react-icons/bs'

export default function Footer() {
    return (
        <>
            <Flex width={{base : '95%', lg:  '90%'}} m='auto' mt='100px' direction={{base : 'column',lg:'row'}} rowGap='20px'>
                <Box width={{base : '', md: '40%',lg : '20%'}}>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Dribbble_Text_Logo_Script.svg/2560px-Dribbble_Text_Logo_Script.svg.png" alt="logo" width={{ base: '100px' }} />
                    <Text mt={{base : '20px'}}>Dribbble is the world’s leading community for creatives to share, grow, and get hired.</Text>
                    <Flex mt={{base : '20px'}}fontSize={{base : '22px'}} gap={{base : '20px'}}>
                        <Text><CiBasketball /></Text>
                        <Text><BsTwitter /></Text>
                        <Text><BsFacebook /></Text>
                        <Text><BsInstagram /></Text>
                        <Text><BsPinterest /></Text>
                    </Flex>
                </Box>

                <SimpleGrid columns={[2,3,3,5]} width={{base: '', lg : '80%'}} >
                    <Box lineHeight={{base :'35px'}}>
                        <Text fontWeight='600'>For designers</Text>
                        <Text>Go Pro!</Text>
                        <Text>Explore design work</Text>
                        <Text>Design blog</Text>
                        <Text>Overtime podcasts</Text>
                        <Text>Playoffs</Text>
                        <Text>Weekly Warm-Up</Text>
                        <Text>Refer a Friend</Text>
                        <Text>Code of conduct</Text>
                    </Box>

                    <Box lineHeight={{base :'35px'}}>
                        <Text fontWeight={600}>Hire designers</Text>
                        <Text>Post a job opening</Text>
                        <Text>Post a freelance project</Text>
                        <Text>Search for designers</Text>
                        <Text fontWeight={600}>Brands</Text>
                        <Text>Advertise with us</Text>
                    </Box>


                    <Box lineHeight={{base :'35px'}}>
                        <Text fontWeight={600}>Company</Text>
                        <Text>About!</Text>
                        <Text>Careers</Text>
                        <Text>DSupport</Text>
                        <Text>Media kit</Text>
                        <Text>Testimonials</Text>
                        <Text>API</Text>
                        <Text>Terms of service</Text>
                        <Text>Privacy policy</Text>
                        <Text>Cookie policy</Text>
                    </Box>


                    <Box lineHeight={{base :'35px'}}>
                        <Text fontWeight={600}>Directories</Text>
                        <Text>Design jobs!</Text>
                        <Text>Designers for hire</Text>
                        <Text>Freelance designers for hire</Text>
                        <Text>Tags</Text>
                        <Text>Places</Text>
                        <Text fontWeight={600}>Design assets</Text>
                        <Text>Dribbble Marketplace</Text>
                        <Text>Creative Market</Text>
                        <Text>Fontspring</Text>
                        <Text>Font Squirrel</Text>
                    </Box>


                    <Box lineHeight={{base :'35px'}}>
                        <Text fontWeight={600}>Design Resources</Text>
                        <Text>Freelancing</Text>
                        <Text>Design Hiring</Text>
                        <Text>Design Portfolio  </Text>
                        <Text>Design Education</Text>
                        <Text>Creative Process</Text>
                        <Text>Design Industry Trends</Text>
                    </Box>
                </SimpleGrid>
            </Flex>

            <Text align='center' mt='60px' marginBottom='20px'>© 2023 Dribbble. All rights reserved.</Text>
        </>
    )
}