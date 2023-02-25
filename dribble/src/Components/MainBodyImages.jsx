import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react"

export default function MainBodyImages ( ){
    const Images = [
        {
            id : 1,
            img : 'https://cdn.dribbble.com/userupload/3766246/file/original-46b792c59a03bb20bba8da72862395ab.png?compress=1&resize=1200x900&vertical=center'
        },
        {
            id : 2,
            img : 'https://cdn.dribbble.com/userupload/3766245/file/original-3aca2119da224274d0edccc80340337d.png?compress=1&resize=1200x900&vertical=center'
        },
        {
            id : 3,
            img : 'https://cdn.dribbble.com/userupload/3766247/file/original-be54fd84827b5318b5447540d46ba3c8.png?compress=1&resize=1200x900&vertical=center'
        },
        {
            id : 4,
            img : 'https://cdn.dribbble.com/userupload/3766250/file/original-94d316f53c726d3656d1d47d0c184963.png?compress=1&resize=1200x900&vertical=center'
        },
        {
            id : 5,
            img : 'https://cdn.dribbble.com/userupload/3766251/file/original-ed6adf6d7773772c546617178ace5c8f.png?compress=1&resize=1200x900&vertical=center'
        }
    ]
    return (
        <>
        <SimpleGrid width={{base : '100%', md : '95%'}} margin='auto' rowGap={{base : '35px', md : '70px'}} mt={{base : '40px', md: '60px'}}>
            {Images.length > 0 && Images.map((elem)=>{
                return <Box key={elem.id} margin='auto'>
                    <Image src={elem.img} alt='img' borderRadius={{base : '5px', md: '10px'}} width={{base : '100%', lg :'87%'}} m='auto'/>
                </Box>
            })}
        </SimpleGrid>

        <Box textAlign={{base : 'left',lg: 'center'}} fontSize={{base : '25px', md : '32px'}} fontWeight='700' width={{base : '95%'}} m='auto' mt={{base : '30px', md: '50px', lg: '60px'}} >
            <Text>We appreciate your interest, <i>Dribbblers! </i> 😍</Text>
        </Box>
        </>
    )
}