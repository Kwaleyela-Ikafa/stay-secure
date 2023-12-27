import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    IconButton
  } from '@chakra-ui/react'

  import {
    AddIcon,
    ExternalLinkIcon,
    RepeatIcon,
    HamburgerIcon,
    EditIcon
  } from '@chakra-ui/icons';

function NavMenu() {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<HamburgerIcon />}
        variant='outline'
      />
      <MenuList color={'black'}>
        <MenuItem>About Us</MenuItem>
        <MenuItem>Services</MenuItem>
        <MenuItem>Request a Quote</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default NavMenu;



