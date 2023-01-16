import React from 'react';
import {
  Flex,
  Text,
  Link,
  Stack,
  InputGroup,
  Input,
  InputRightElement,
  Show,
  Hide,
} from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';
import MenuMobile from './MobileMenu';

function Header() {
  return (
    <div className="">
      <Flex
        justify={'space-around'}
        align={'center'}
        padding={5}
        bg={'black'}
        wrap={'wrap'}
        gap={5}
      >
        <Hide below="md">
          <Stack direction={'row'} gap={5} wrap={'wrap'} align={'center'}>
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
        </Hide>

        <Show below="md">
          <MenuMobile />
        </Show>

        <Stack>
          <InputGroup>
            <Input placeholder="Pesquisar Item" maxW={'max-content'} />
            <InputRightElement
              pointerEvents="none"
              children={<RiSearchLine color="green.500" />}
            />
          </InputGroup>
        </Stack>
      </Flex>
    </div>
  );
}

export default Header;
