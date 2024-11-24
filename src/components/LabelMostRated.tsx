import { Box, Flex } from '@chakra-ui/react';

export const LabelMostRated = () => {
    return(
        <Flex py={2} px={4} direction={["column", "row"]} w="100%" justify="space-between" bg="bg-surface" boxShadow="sm">
                <Flex alignItems="center" wrap="wrap">
                    <Flex flexGrow={1} justify="center" >
                        <Box ml={[4, 0]} fontSize='4xl' fontWeight='bold'>Most Rated</Box>
                    </Flex>
                </Flex>
        </Flex>
    );
}