import { Container, Heading, Input, Text, Textarea, Box, Button } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { sha256Hash } from '../blockchain/util/hash';

function Sha256Hash() {
    const [data, setData] = useState("");
    const [sha256, setSha256] = useState();
    useEffect(() => {
        const hashedData = sha256Hash(data);
        setSha256(hashedData);
    }, [data])

    function updateData(e) {
        const formData = e.target.value;
        setData(formData);
    }
    return (
        <>
            <Heading mb="10">SHA256 Hash</Heading>
            <Container maxW="80%">
                <Box bg="green.100" padding="6" borderRadius="md">
                    <Text>Data:</Text>
                    <Textarea bg="white" mb="2" onChange={updateData} />
                    <Text>SHA256 print:</Text>
                    <Input bg="white" mb="2" value={sha256} />
                    <Button colorScheme="blue">Calculate SHA256</Button>
                </Box>
            </Container>
        </>
    )
}

export default Sha256Hash
