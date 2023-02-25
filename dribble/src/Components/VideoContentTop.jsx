import { Box, Text } from "@chakra-ui/react";

export default function VideoContentTop() {
    return (
        <>
            <Box width={{base :'95%', lg: '45%'}} margin='auto' mt={{base : '25px'}} fontSize={{base : '17px', md : '21px', lg: '20px'}} fontWeight='490'>
                <Text>While we designed this website, Information architecture and visual hierarchy was the most essential
                    part of the e-commerce website UX process. We ensured the user could quickly and intuitively navigate the site with
                    such a varied product assortment.
                </Text>

                <Text mt={{base :'30px'}}>Do you like the design? We would love to know!</Text>

                <Text mt={{base : '30px'}} color='#ea4c89'><b>👉 Follow Webflow link to see it live</b></Text>
            </Box>
        </>
    )
}