import React from 'react'

import {
  ListItem,
  ListWrapper,
  StreamerColumnWrapper
} from './streamerList.styled'

const StreamerList: React.FC = () => {
  return (
    <StreamerColumnWrapper>
      {' '}
      <ListWrapper>
        <ListItem>1</ListItem>
      </ListWrapper>{' '}
      <ListWrapper>
        <ListItem>2</ListItem>
      </ListWrapper>{' '}
      <ListWrapper>
        <ListItem>3</ListItem>
      </ListWrapper>{' '}
      <ListWrapper>
        <ListItem>4</ListItem>
      </ListWrapper>{' '}
      <ListWrapper>
        <ListItem>5</ListItem>
      </ListWrapper>{' '}
      <ListWrapper>
        <ListItem>6</ListItem>
      </ListWrapper>{' '}
      <ListWrapper>
        <ListItem>7</ListItem>
      </ListWrapper>{' '}
      <ListWrapper>
        <ListItem>8</ListItem>
      </ListWrapper>{' '}
    </StreamerColumnWrapper>
  )
}
export default StreamerList
