import React from 'react'
import {
  DetailsDescription,
  DetailsHeader,
  DetailsWrapper,
  TextWrapper
} from './streamerDetails.styled'
import { DropDownHeaderMisc, ListItemNav } from '../list/streamerList.styled'

type ErrorMessage = {
  name: string
  message: string
}
interface PlaceholderProps {
  errorMessage: ErrorMessage
  resetFunction: () => void
}

const DetailsErrorPlaceholder: React.FC<PlaceholderProps> = ({
  errorMessage,
  resetFunction
}) => {
  return (
    <DetailsWrapper>
      <TextWrapper>
        {' '}
        <DetailsHeader>Something went wrong!</DetailsHeader>
        <DetailsDescription>{errorMessage?.name}</DetailsDescription>
        <DetailsDescription>{errorMessage?.message}</DetailsDescription>
      </TextWrapper>
      <ListItemNav>
        {resetFunction ? (
          <DropDownHeaderMisc onClick={resetFunction}>
            Try again
          </DropDownHeaderMisc>
        ) : null}
      </ListItemNav>
    </DetailsWrapper>
  )
}
export default DetailsErrorPlaceholder
