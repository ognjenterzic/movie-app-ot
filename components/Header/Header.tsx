import { Box, Text, Button } from '@chakra-ui/react';

export interface Props {
  title: string;
  overview: string;
  imgUrl: string;
}

const Header = (props: Props) => {
  const { title, overview, imgUrl } = props;

  return (
    <Box position="relative" w="100%" h="80vh">
      <Box position="absolute" w="100%" h="100%" zIndex="1">
        <Box mt="6rem" px="4rem" w="45rem">
          <Text fontSize="5xl">{title}</Text>
          <Text fontSize="xl" py="1rem">
            {overview}
          </Text>
          <Button bg="red" mt="1rem" w="10rem" _hover={{ bg: 'red.700' }}>
            Play
          </Button>
        </Box>
      </Box>
      <Box
        position="absolute"
        w="100%"
        h="100%"
        bottom="0"
        backgroundImage={imgUrl}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="50% 50%"
      />
      <Box
        position="absolute"
        bottom="0"
        w="100%"
        h="5rem"
        bgGradient="linear(to-b, transparent, black)"
      />
      <Box
        position="absolute"
        top="0"
        w="80%"
        h="100%"
        bgGradient="linear(to-l, transparent, black)"
      />
    </Box>
  );
};

export default Header;
