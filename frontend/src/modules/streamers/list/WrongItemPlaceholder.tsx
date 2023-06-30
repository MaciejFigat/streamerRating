import {
  DropDownHeaderMisc,
  ListContentWrapper,
  ListItem,
  ListPar
} from './streamerList.styled'
import { HorizontalLineBottom } from '../../../styles/misc.styles'

type ErrorMessage = {
  name: string
  message: string
}
interface PlaceholderProps {
  errorMessage: ErrorMessage
  resetFunction: () => void
}
export const WrongItemPlaceholder: React.FC<PlaceholderProps> = ({
  errorMessage,
  resetFunction
}) => (
  <ListItem $isActive={false} $hasError>
    <ListContentWrapper>
      <ListPar>Something went wrong!</ListPar> {errorMessage?.name}{' '}
      {errorMessage?.message} <HorizontalLineBottom />
      {resetFunction ? (
        <DropDownHeaderMisc onClick={resetFunction}>
          Try again
        </DropDownHeaderMisc>
      ) : null}
    </ListContentWrapper>
  </ListItem>
)
