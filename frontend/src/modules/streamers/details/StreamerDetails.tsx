import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../reduxState/reduxHooks'
import { NavLink, useParams } from 'react-router-dom'
import { fetchStreamerById } from '../../../reduxState/stateSlices/streamer/streamerSlice'
import {
  DetailsWrapper,
  DetailsImage,
  TextWrapper,
  DetailsHeader,
  DetailsDescription
} from './streamerDetails.styled'
import { GeneralWrapper } from '../../../styles/misc.styles'
import { DropDownHeaderMisc, ListItemNav } from '../list/streamerList.styled'
import { ListItemErrorBoundary } from '../../misc/ErrorBoundary/ListItemErrorBoundary'
import DetailsErrorPlaceholder from './DetailsErrorPlaceholder'

const StreamerDetails: React.FC = () => {
  const dispatch = useAppDispatch()
  const streamers = useAppSelector(state => state.streamerState.streamers)
  const { streamerId } = useParams<{
    streamerId: string
  }>()

  const streamerChosen = streamers.find(streamer => streamer._id === streamerId)
  useEffect(() => {
    if (streamerId && !streamerChosen) dispatch(fetchStreamerById(streamerId))
  }, [dispatch, streamerId, streamers, streamerChosen])

  return (
    <GeneralWrapper>
      <ListItemErrorBoundary placeholder={DetailsErrorPlaceholder}>
        <DetailsWrapper>
          <DetailsImage
            src={streamerChosen?.pictureUrl}
            alt='Image of a streamer'
          />
          <TextWrapper>
            {' '}
            <DetailsHeader>{streamerChosen?.name}</DetailsHeader>
            <DetailsDescription>
              {streamerChosen?.description}
            </DetailsDescription>
            <DetailsDescription>{streamerChosen?.platform}</DetailsDescription>
          </TextWrapper>
          <ListItemNav>
            <NavLink to='/'>
              <DropDownHeaderMisc>Back to list</DropDownHeaderMisc>
            </NavLink>
          </ListItemNav>
        </DetailsWrapper>{' '}
      </ListItemErrorBoundary>
    </GeneralWrapper>
  )
}
export default StreamerDetails
