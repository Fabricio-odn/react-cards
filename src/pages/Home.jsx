import { Box, AspectRatio, Img, Text } from '@chakra-ui/react';
import React from 'react';
import Header from '../components/Header';

function Home() {
  return (
    <div>
      <Header />
      <Box maxH={'xl'} overflow={'hidden'}>
        <AspectRatio ratio={6 / 2}>
          <Img
            src="https://images.wallpaperscraft.com/image/single/skateboard_skate_skater_205475_1280x720.jpg"
            alt="Homem com Skate fazendo manobra"
            objectFit={'cover'}
            filter="auto"
            brightness="70%"
          />
        </AspectRatio>
      </Box>
    </div>
  );
}

export default Home;
