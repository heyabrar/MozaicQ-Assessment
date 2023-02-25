import { Box } from "@chakra-ui/react";

export default function VideoComponent() {
    return (
        <>
            <Box border='2px solid red' width={{base : '100%'}} margin='auto'>
                <video autoPlay loop muted>
                    <source src="https://cdn.dribbble.com/userupload/3766216/file/original-c36f589e560e44128fd7bd184d1e87e5.mp4" type="video/mp4" />
                </video>
            </Box>
        </>
    )
}