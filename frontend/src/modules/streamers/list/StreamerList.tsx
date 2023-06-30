import React, { useEffect } from 'react'
import socketIOClient from 'socket.io-client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import {
  ListItem,
  ListContentWrapper,
  ListPar,
  StreamerWrapper,
  VoteButton,
  ListItemNav,
  DropDownHeaderMisc,
  ColumnFadeout,
  ColumnWrapper,
  ColumnFadeoutBottom
} from './streamerList.styled'
import { useAppDispatch, useAppSelector } from '../../../reduxState/reduxHooks'
import {
  HighlightText,
  HorizontalLineBottom,
  HorizontalWrapperSpaceAround
} from '../../../styles/misc.styles'
import { TextColor, VoteType } from '../../../consts'
import {
  fetchAllStreamers,
  fetchStreamerById,
  voteOnStreamer
} from '../../../reduxState/stateSlices/streamer/streamerSlice'
import { setUserId } from '../../../reduxState/stateSlices/user/userSlice'
import { nanoid } from '@reduxjs/toolkit'
import { IStreamer } from '../../../interfaces'
import { NavLink } from 'react-router-dom'
import { ListItemErrorBoundary } from '../../misc/ErrorBoundary/ListItemErrorBoundary'
import { WrongItemPlaceholder } from './WrongItemPlaceholder'

const StreamerList: React.FC = () => {
  const dispatch = useAppDispatch()
  const streamers = useAppSelector(state => state.streamerState.streamers)
  const userId = useAppSelector(state => state.user.userId)

  const voteHandler = (streamerId: string, voteType: VoteType) => {
    dispatch(voteOnStreamer({ streamerId, voteType, userId }))
  }

  interface IVoteEmitData {
    streamerId: string
    voteType: VoteType
  }

  useEffect(() => {
    const ENDPOINT = import.meta.env.VITE_ENDPOINT
    const socket = socketIOClient(ENDPOINT)
    socket.on('connect', () => {
      console.log('Connected to server')
    })

    socket.on('vote', (data: IVoteEmitData) => {
      console.log('Connected to server')
      console.log(data)
      dispatch(fetchStreamerById(data.streamerId))
    })
    socket.on('createStreamer', (data: { streamerId: string }) => {
      console.log('New streamer created!', data)

      dispatch(fetchStreamerById(data.streamerId))
    })
    socket.on('disconnect', () => {
      console.log('Disconnected from server')
    })

    // Disconnect when the component unmounts
    return () => {
      socket.disconnect()
    }
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchAllStreamers())
  }, [dispatch])

  //* Mock userID
  useEffect(() => {
    if (userId === '') dispatch(setUserId(nanoid()))
  }, [dispatch, userId])

  function userHasCreated (streamer: IStreamer, userId: string): boolean {
    return streamer.createdBy === userId
  }
  function userHasUpvoted (streamer: IStreamer, userId: string): boolean {
    return streamer.upvotedBy?.includes(userId) ?? false
  }
  function userHasDownvoted (streamer: IStreamer, userId: string): boolean {
    return streamer.downvotedBy?.includes(userId) ?? false
  }
  return (
    <StreamerWrapper>
      <ColumnFadeout />
      <ColumnWrapper>
        {streamers.map(streamer => (
          <ListItemErrorBoundary
            key={streamer._id}
            placeholder={WrongItemPlaceholder}
          >
            <ListItem $isActive={userHasCreated(streamer, userId)}>
              <ListContentWrapper>
                <ListPar>{streamer.name}</ListPar> <HorizontalLineBottom />
                <HorizontalWrapperSpaceAround>
                  <ListItemNav>
                    <NavLink to={`/details/${streamer._id}`}>
                      <DropDownHeaderMisc>Details</DropDownHeaderMisc>
                    </NavLink>
                  </ListItemNav>
                  <HighlightText color={TextColor.SUCCESS}>
                    {' '}
                    <VoteButton
                      $isActive={userHasUpvoted(streamer, userId)}
                      onClick={() =>
                        voteHandler(streamer._id ?? '', VoteType.UPVOTE)
                      }
                    >
                      <FontAwesomeIcon icon={faArrowUp} />
                    </VoteButton>
                    &nbsp;{streamer.upvotes}
                  </HighlightText>

                  <HighlightText color={TextColor.WARNING}>
                    {' '}
                    <VoteButton
                      $isActive={userHasDownvoted(streamer, userId)}
                      onClick={() =>
                        voteHandler(streamer._id ?? '', VoteType.DOWNVOTE)
                      }
                    >
                      <FontAwesomeIcon icon={faArrowDown} />
                    </VoteButton>
                    &nbsp;{streamer.downvotes}
                  </HighlightText>
                </HorizontalWrapperSpaceAround>
              </ListContentWrapper>
            </ListItem>
          </ListItemErrorBoundary>
        ))}{' '}
      </ColumnWrapper>
      <ColumnFadeoutBottom />
    </StreamerWrapper>
  )
}
export default StreamerList
