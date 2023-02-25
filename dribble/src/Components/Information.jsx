import { Box, Text } from "@chakra-ui/react";

export default function Information() {
    return (
        <>
            <Box width={{ base: '95%', lg : '45%'}} m='auto' mt={{ base: '30px', md: '80px'}} fontWeight='700' fontSize={{ base: '17px', md: '22px'}}>
                <Text>Schedule a call at ☎️ 👉🏼 <span style={{ color: '#ea4c89' }}>Calendly.com</span></Text>

                <Box mt={{ base: '30px' }}>
                    <Text fontSize={{ base: '25px',md:'30px', lg: '35px'}}>Let's talk about your project..</Text>
                    <Text color='#ea4c89' fontSize={{ base: '24px',md:'28px', lg : '33px'}}>✉️<span style={{ textDecoration: 'underline' }}> hello@musemind.agency</span></Text>
                </Box>

                <Box  mt={{ base: '40px' }} >
                    <Text>Website 🌐 <span style={{ color: '#ea4c89' }}>www.musemind.agency</span></Text>
                    <Text >Explore Our Design Case Study Featuring ➡️ <span style={{ color: '#ea4c89' }}>Behance</span>
                    </Text>
                </Box>

                <Box  mt={{ base: '50px' }}>
                    <Text>Let's Check Our Others Dribbble Profile:</Text>
                    <Text color='#ea4c89'>musemind saas • musemind mobile • musemind branding</Text>
                </Box>

                <Box  mt={{ base: '30px' }}>
                    <Text>Follow us to see more exciting shots and insights on:</Text>
                    <Text fontSize={{base : '16px', md: '22px'}} color='#ea4c89'>Linkedin I Instagram I Twitter I Medium I Facebook</Text>
                </Box>
            </Box>
        </>
    )
}