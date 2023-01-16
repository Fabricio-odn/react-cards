import React from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Stack,
  Link,
  Text,
  Box,
} from '@chakra-ui/react';
import { RiMenuFill } from 'react-icons/ri';

export default function MenuMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div>
      <Box display={'flex'} alignItems={'center'} gap={2}>
        <RiMenuFill
          ref={btnRef}
          onClick={onOpen}
          size={20}
          color={'#fff'}
          cursor={'pointer'}
        />
        <Text
          as={'b'}
          color={'#fff'}
          ref={btnRef}
          onClick={onOpen}
          cursor={'pointer'}
          fontSize={12}
        >
          MENU
        </Text>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bgColor={'black'} color={'#fff'}>
          <DrawerCloseButton />
          <DrawerHeader>Informações</DrawerHeader>

          <DrawerBody>
            <Stack direction={'column'} gap={1}>
              <Link href="/">
                <Text as={'b'}>ACESSÓRIOS</Text>
              </Link>
              <Link href="/">
                <Text as={'b'}>BONÉS</Text>
              </Link>
              <Link href="/">
                <Text as={'b'}>CALÇADOS</Text>
              </Link>
              <Link href="/">
                <Text as={'b'}>ROUPAS</Text>
              </Link>
              <Link href="/">
                <Text as={'b'}>SKATES</Text>
              </Link>
              <Link href="/">
                <Text as={'b'}>MARCAS</Text>
              </Link>
              <Link href="/">
                <Text as={'b'}>PROMOÇÕES</Text>
              </Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
