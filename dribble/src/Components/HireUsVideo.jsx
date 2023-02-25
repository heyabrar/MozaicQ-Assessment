import { Box } from "@chakra-ui/react";

export default function HireUsVideo() {
    return (
        <>
            <Box width={{ base: '95%', lg: '45%' }} m='auto' mt={{ base: '30px' }}>
                <video autoPlay loop muted style={{ borderRadius: '5px' }}>
                    <source src="https://cdn.dribbble.com/userupload/4712235/file/original-d47d82220ea984760e99c5429294ae3a.mp4" />
                </video>
            </Box>
        </>
    )
}