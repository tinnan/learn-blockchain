import { Container, Heading, Input, Text, Textarea, Box, Button } from '@chakra-ui/react'
import React from 'react'

function Sha256Hash() {
    return (
        <>
            <Heading mb="10">SHA256 Hash</Heading>
            <Container>
                <Box bg="green.100" padding="6" borderRadius="md">
                    <Text>Data:</Text>
                    <Textarea bg="white" mb="2" />
                    <Text>SHA256 print:</Text>
                    <Input bg="white" mb="2" />
                    <Button colorScheme="blue">Calculate SHA256</Button>
                </Box>
            </Container>
        </>
    )
}

export default Sha256Hash
