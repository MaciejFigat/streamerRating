import React from 'react'
import { DropDownHeaderMisc, ListItem, NavList } from './nav.styled'
import { NavLink } from 'react-router-dom'

const itemVariants = {
  closed: {
    y: 10,
    opacity: 0
  },
  open: {
    y: 0,
    opacity: 1
  }
}

const Nav: React.FC = () => {
  return (
    <NavList>
      {' '}
      <ListItem variants={itemVariants}>
        {' '}
        <NavLink to='/'>
          <DropDownHeaderMisc>List</DropDownHeaderMisc>
        </NavLink>
      </ListItem>
      <ListItem variants={itemVariants}>
        {' '}
        <NavLink to='/about'>
          <DropDownHeaderMisc>Add</DropDownHeaderMisc>
        </NavLink>
      </ListItem>
    </NavList>
  )
}
export default Nav
