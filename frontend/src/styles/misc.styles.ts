import styled from 'styled-components'
import { TextColor } from '../consts'

export const CenterWrapper = styled.div`
  display: grid;
  place-items: center;
`
export const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 1600px;
  margin: 0px;
`

export const HorizontalWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: var(--gap-small);
  @media (max-width: 610px) {
    gap: 2px;
  }
`

export const HorizontalLineBottom = styled.div`
  width: 100%;
  height: 1px;
  padding-bottom: var(--gap-medium);
  border-bottom: 1px solid var(--background-blur1);
`

export const HorizontalWrapperSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;

  @media (max-width: 610px) {
    width: 95%;
  }
`

export const RelativeWrapper = styled.div<{ top?: string; left?: string }>`
  top: ${({ top }) => (top ? `${top}` : '0')};
  left: ${({ left }) => (left ? `${left}` : '0')};
  position: relative;
`
export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 1rem;
  background: transparent;

  background: linear-gradient(
    to bottom,
    var(--background0-main) 0%,
    transparent 12%,
    transparent 88%,
    var(--background0-main) 100%
  );

  border: 1px solid var(--background3-main);
  max-height: 90vh;

  border-radius: var(--border-radius2);
`
export const RowWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const GeneralWrapper = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh;
`
export const FlexStartWrapperOnly = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: var(--gap-medium);
  width: 100%;
`
export const FlexEndWrapperOnly = styled(FlexStartWrapperOnly)`
  justify-content: flex-end;
`

export const FlexStartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 82vh;
  min-width: 100%;
  @media (max-width: 1040px) {
    min-width: 600px;
  }
  @media (max-width: 610px) {
    min-width: 100%;
  }
`
export const HorizontalWrapperSpaceAround = styled(
  HorizontalWrapperSpaceBetween
)`
  justify-content: space-around;
`

interface TextProps {
  color: TextColor
}

const getColor = (color: TextColor): string => {
  switch (color) {
    case TextColor.SUCCESS:
      return 'var(--success1)'
    case TextColor.INFO:
      return 'var(--info1)'
    case TextColor.WARNING:
      return 'var(--warning1)'
    case TextColor.DANGER:
      return 'var(--danger1)'
    case TextColor.PRIMARY:
      return 'var(--background4-main)'
    case TextColor.SECONDARY:
      return 'var(--background2-main)'
    case TextColor.GOLD:
      return 'var(--gold2)'
    default:
      return 'inherit'
  }
}
const getAccentColor = (color: TextColor): string => {
  switch (color) {
    case TextColor.SUCCESS:
      return 'var(--success2)'
    case TextColor.INFO:
      return 'var(--info2)'
    case TextColor.WARNING:
      return 'var(--warning2)'
    case TextColor.DANGER:
      return 'var(--danger2)'
    case TextColor.GOLD:
      return 'var(--gold1)'
    default:
      return 'inherit'
  }
}

interface HighlightTextProps extends TextProps {
  hoverEffect?: boolean
}
export const HighlightText = styled.b<HighlightTextProps>`
  display: flex;
  align-items: center;
  color: ${({ color }) => getColor(color)};
  svg {
    color: ${({ color }) => getColor(color)};
  }
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ color, hoverEffect }) =>
      hoverEffect ? getAccentColor(color) : null};
    svg {
      color: ${({ color, hoverEffect }) =>
        hoverEffect ? getAccentColor(color) : null};
    }
  }
`

export const HomeTitle = styled.h1`
  font-weight: 700;
  font-size: var(--font-size-bigger);
  font-size: var(--font-size-big);
  font-family: 'Yeseva One', cursive;
`
