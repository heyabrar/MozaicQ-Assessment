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
                        <Text cursor='pointer'><CiBasketball /></Text>
                        <Text cursor='pointer'><BsTwitter /></Text>
                        <Text cursor='pointer'><BsFacebook /></Text>
                        <Text cursor='pointer'><BsInstagram /></Text>
                        <Text cursor='pointer'><BsPinterest /></Text>
                    </Flex>
                </Box>

                <SimpleGrid columns={[2,3,3,5]} width={{base: '', lg : '80%'}} >
                    <Box lineHeight={{base :'35px'}}>
                        <Text fontWeight='600' cursor='pointer'>For designers</Text>
                        <Text cursor='pointer'>Go Pro!</Text>
                        <Text cursor='pointer'>Explore design work</Text>
                        <Text cursor='pointer'>Design blog</Text>
                        <Text cursor='pointer'>Overtime podcasts</Text>
                        <Text cursor='pointer'>Playoffs</Text>
                        <Text cursor='pointer'>Weekly Warm-Up</Text>
                        <Text cursor='pointer'>Refer a Friend</Text>
                        <Text cursor='pointer'>Code of conduct</Text>
                    </Box>

                    <Box lineHeight={{base :'35px'}}>
                        <Text fontWeight={600}>Hire designers</Text>
                        <Text cursor='pointer'>Post a job opening</Text>
                        <Text cursor='pointer'>Post a freelance project</Text>
                        <Text cursor='pointer'>Search for designers</Text>
                        <Text fontWeight={600} cursor='pointer'>Brands</Text>
                        <Text cursor='pointer'>Advertise with us</Text>
                    </Box>


                    <Box lineHeight={{base :'35px'}}>
                        <Text fontWeight={600} cursor='pointer'>Company</Text>
                        <Text cursor='pointer'>About!</Text>
                        <Text cursor='pointer'>Careers</Text>
                        <Text cursor='pointer'>DSupport</Text>
                        <Text cursor='pointer'>Media kit</Text>
                        <Text cursor='pointer'>Testimonials</Text>
                        <Text cursor='pointer'>API</Text>
                        <Text cursor='pointer'>Terms of service</Text>
                        <Text cursor='pointer'>Privacy policy</Text>
                        <Text cursor='pointer'>Cookie policy</Text>
                    </Box>


                    <Box lineHeight={{base :'35px'}}>
                        <Text fontWeight={600}>Directories</Text>
                        <Text cursor='pointer'>Design jobs!</Text>
                        <Text cursor='pointer'>Designers for hire</Text>
                        <Text cursor='pointer'>Freelance designers for hire</Text>
                        <Text cursor='pointer'>Tags</Text>
                        <Text cursor='pointer'>Places</Text>
                        <Text fontWeight={600} cursor='pointer'>Design assets</Text>
                        <Text cursor='pointer'>Dribbble Marketplace</Text>
                        <Text cursor='pointer'>Creative Market</Text>
                        <Text cursor='pointer'>Fontspring</Text>
                        <Text cursor='pointer'>Font Squirrel</Text>
                    </Box>


                    <Box lineHeight={{base :'35px'}}>
                        <Text fontWeight={600} cursor='pointer'>Design Resources</Text>
                        <Text cursor='pointer'>Freelancing</Text>
                        <Text cursor='pointer'>Design Hiring</Text>
                        <Text cursor='pointer'>Design Portfolio  </Text>
                        <Text cursor='pointer'>Design Education</Text>
                        <Text cursor='pointer'>Creative Process</Text>
                        <Text cursor='pointer'>Design Industry Trends</Text>
                    </Box>
                </SimpleGrid>
            </Flex>

            <Text align='center' mt='60px' marginBottom='20px'>© 2023 Dribbble. All rights reserved.</Text>
        </>
    )
}