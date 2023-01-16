import {
  Box,
  AspectRatio,
  Img,
  Text,
  Flex,
  Heading,
  DrawerBody,
  Wrap,
} from '@chakra-ui/react';
import React from 'react';
import CardComponent from '../components/CardComponent';
import Header from '../components/Header';
import db from '../api/db';
import Footer from '../components/Footer';

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
            brightness="90%"
          />
        </AspectRatio>
      </Box>
      <Heading
        p={4}
        textAlign={'center'}
        color={'black'}
        as={'h1'}
        fontSize={{ base: '2xl', md: '4xl' }}
      >
        DESTAQUES
      </Heading>
      <Flex gap={10} wrap={'wrap'} justify={'center'} align={'center'}>
        {db.map(db => (
          <CardComponent
            key={db.id}
            imageURL={db.imageURL}
            isNew={db.isNew}
            name={db.name}
            price={db.price}
            rating={db.rating}
            numReviews={db.numReviews}
          />
        ))}
      </Flex>
      <Footer />
    </div>
  );
}

export default Home;
