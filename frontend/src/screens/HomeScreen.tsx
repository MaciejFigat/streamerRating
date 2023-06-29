import React from 'react'
import StreamerList from '../modules/streamers/list/StreamerList'
import StreamerForm from '../modules/streamers/form/StreamerForm'
import {
  CenterWrapper,
  ColumnWrapper,
  GridWrapper
} from '../styles/misc.styles'

const HomeScreen: React.FC = () => {
  return (
    <CenterWrapper>
      <GridWrapper>
        <ColumnWrapper>
          <StreamerForm />
          <StreamerList />
        </ColumnWrapper>
      </GridWrapper>
    </CenterWrapper>
  )
}
export default HomeScreen
