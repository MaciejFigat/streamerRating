import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ListWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  margin: 0;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`
export const ListItem = styled(motion.div)<{
  $isActive: boolean
  $hasError?: boolean
}>`
  display: grid;

  place-items: space-around;
  min-height: fit-content;
  min-width: 318px;
  min-height: 126px;
  padding: 0.75rem 1rem;
  margin: 0;
  border-radius: var(--border-radius1);
  border: 1px solid
    ${({ $isActive }) =>
      $isActive ? 'var(--background3-main)' : 'var(--background-blur2)'};
  border-color: ${({ $hasError }) => $hasError && 'var(--danger1)'};
`
export const ListContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  gap: var(--gap-big);
`
export const ColumnFadeout = styled.div`
  position: sticky;
  top: 0px;
  height: 1rem;
  width: 100%;
  background: linear-gradient(
    180deg,
    var(--background1-main) 0%,
    transparent 100%
  );
  opacity: 0.8;
`
export const ColumnFadeoutBottom = styled(ColumnFadeout)`
  bottom: 0px;
  background: linear-gradient(
    180deg,
    transparent 10%,
    var(--background1-main) 100%
  );
`
export const ColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 130px;
  gap: 0.85rem;
`
export const StreamerWrapper = styled.div`
  position: relative;
  display: grid;

  padding: 0rem 1.25rem 0rem;
  overflow-y: scroll;
  &:nth-child(6) {
    grid-column: span 2;
  }
  &:last-child {
    grid-column: span 2;
  }
  ::-webkit-scrollbar {
    width: 0.5em;
    margin: -0.3em;
    background: transparent;
    @media screen and (max-width: 1020px) {
      width: 0em;
    }
  }

  ::-webkit-scrollbar-corner {
    background: none;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(
      to bottom,
      var(--background1-main),
      var(--background3-main),
      var(--background1-main)
    );
    border-radius: 2px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 2px;
  }
`

export const ListPar = styled.p`
  color: var(--background4-main);
  font-size: var(--font-size-medium-plus);
  font-weight: 700;
  margin: 0;
  margin-bottom: 0;
  max-width: 75%;
`
export const ListDesc = styled.p`
  color: var(--background4-main);
  font-size: var(--font-size-medium);
  font-weight: 500;
  margin: 0;
`
export const VoteButton = styled.button<{ $isActive: boolean }>`
  display: grid;
  cursor: pointer;
  place-items: center;
  height: 38px;
  width: 38px;
  background: ${({ $isActive }) =>
    $isActive ? 'var(--background-secondary2)' : 'var(--background-blur1)'};
  color: ${({ $isActive }) =>
    $isActive ? 'var(--background1-main)' : 'var(--background4-main)'};
  border-radius: 50%;
  transition: background-color 200ms border-color 150ms;
  border: 1px solid var(--background-blur1);
  &:hover {
    border-color: var(--background-blur2);
  }
  &:active {
    background: var(--background-blur2);
  }
`
export const ListItemNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* margin-right: 1rem; */
  font-size: 1.05rem;
  letter-spacing: 0.075em;
  font-weight: 700;
  text-transform: uppercase;
`
export const UrlButtonPadding = styled.div`
  padding: 0.5rem;
`
export const DropDownHeaderMisc = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  user-select: none;
  height: 34px;
  border-radius: var(--border-radius2);
  width: 130px;
  border: 1px solid var(--background-blur1);
  padding: 0.4rem 0.4rem 0.2rem 0.4rem;
  font-weight: 700;
  font-size: var(--font-size-small-plus);

  color: var(--background4-main);
  background: var(--background1-main);
  transition: all 0.3s ease-out;
  text-align: center;

  &:hover {
    color: var(--background4-main);
    border-color: var(--background-secondary1);
    background: transparent;
  }
  &:active {
    color: var(--background4-main);
    border-color: var(--background-secondary2);
    background: transparent;
  }
`
