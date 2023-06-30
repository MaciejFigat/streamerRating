import React from 'react'
import { GeneralWrapper } from '../styles/misc.styles'
import {
  DropDownHeaderMisc,
  ListItemNav
} from '../modules/streamers/list/streamerList.styled'
import { NavLink } from 'react-router-dom'

const NotFoundScreen: React.FC = () => {
  return (
    <GeneralWrapper>
      Not Found! I'm a 404 placeholder, how am I doing?
      <ListItemNav>
        <NavLink to='/'>
          <DropDownHeaderMisc>Take me home</DropDownHeaderMisc>
        </NavLink>
      </ListItemNav>
    </GeneralWrapper>
  )
}
export default NotFoundScreen
