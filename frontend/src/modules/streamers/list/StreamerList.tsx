import React from 'react'
import {
  ListDesc,
  ListItem,
  ListContentWrapper,
  ListPar,
  ListWrapper,
  StreamerColumnWrapper,
  VoteButton
} from './streamerList.styled'
import { useAppDispatch, useAppSelector } from '../../../reduxState/reduxHooks'
import {
  HighlightText,
  HorizontalLineBottom,
  HorizontalWrapperSpaceAround
} from '../../../styles/misc.styles'
import { TextColor, VoteType } from '../../../consts'
import { voteOnStreamer } from '../../../reduxState/stateSlices/streamer/streamerSlice'

const StreamerList: React.FC = () => {
  const dispatch = useAppDispatch()
  const streamers = useAppSelector(state => state.streamerState.streamers)

  const voteHandler = (streamerId: string, voteType: VoteType) => {
    dispatch(voteOnStreamer({ streamerId, voteType }))
  }

  return (
    <StreamerColumnWrapper>
      {' '}
      {streamers.map(streamer => (
        <ListWrapper key={streamer._id}>
          <ListItem>
            <ListContentWrapper>
              <HorizontalLineBottom />
              <ListPar>Name: {streamer.name}</ListPar>{' '}
              <ListDesc>Desc:{streamer.description}</ListDesc>
              <HorizontalLineBottom />
              <HorizontalWrapperSpaceAround>
                <HighlightText color={TextColor.SUCCESS}>
                  {' '}
                  <VoteButton
                    onClick={() =>
                      voteHandler(streamer._id ?? '', VoteType.UPVOTE)
                    }
                  >
                    U
                  </VoteButton>
                  &nbsp;{streamer.upvotes}
                </HighlightText>

                <HighlightText color={TextColor.WARNING}>
                  {' '}
                  <VoteButton
                    onClick={() =>
                      voteHandler(streamer._id ?? '', VoteType.DOWNVOTE)
                    }
                  >
                    D
                  </VoteButton>
                  &nbsp;{streamer.downvotes}
                </HighlightText>
              </HorizontalWrapperSpaceAround>
            </ListContentWrapper>
          </ListItem>
        </ListWrapper>
      ))}{' '}
    </StreamerColumnWrapper>
  )
}
export default StreamerList
