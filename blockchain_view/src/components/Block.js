import { Container, Heading, Input, Text, Textarea, Box, Button } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { mineBlock } from '../blockchain/block';
import { DIFFICULTY } from '../blockchain/util/constants';
import { hashBlock } from '../blockchain/util/hash';

function Block() {
    const [blockNumber, setBlockNumber] = useState(1);
    const [nonce, setNonce] = useState(0);
    const [data, setData] = useState("");
    const [sha256, setSha256] = useState();
    const [isValid, setIsValid] = useState(false);
    useEffect(() => {
        const hashedData = hashBlock({ blockNumber, nonce, data });
        const checkIsValid = hashedData.substr(0, DIFFICULTY) === '0'.repeat(DIFFICULTY);
        setIsValid(checkIsValid);
        setSha256(hashedData);
    }, [blockNumber, nonce, data])
    function handleMine() {
        const { hashedData, nonce } = mineBlock({ blockNumber, data });
        setNonce(nonce);
        setSha256(hashedData);
    }

    return (
        <Container maxW="80%" mt="6">
            <Heading mb="10">Block</Heading>
            <Box bg={isValid ? "green.100" : "red.100"} padding="6" borderRadius="md">
                <Text>Block Number:</Text>
                <Textarea bg="white" mb="2" value={blockNumber} onChange={(e) => {
                    setBlockNumber(Number(e.target.value));
                }} />
                <Text>nonce:</Text>
                <Textarea bg="white" mb="2" value={nonce} onChange={(e) => {
                    setNonce(Number(e.target.value));
                }} />
                <Text>Data:</Text>
                <Textarea bg="white" mb="2" onChange={(e) => {
                    setData(e.target.value);
                }} />
                <Text>Hash:</Text>
                <Input bg="white" mb="2" value={sha256} />
                <Button colorScheme="blue" onClick={handleMine}>Mine</Button>
            </Box>
        </Container>
    )
}

export default Block
