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
export const ListItem = styled(motion.div)<{ $isActive: boolean }>`
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
      $isActive ? 'var(--success2)' : 'var(--background-blur2)'};
`
export const ListContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  gap: var(--gap-big);
`
export const StreamerColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;\
  grid-auto-rows: 130px; 
  gap: 0.85rem;
  padding: 0rem 1.25rem;
  height: 100vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0.75em;
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
    background: var(--background-blur2);

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

  margin-right: 1rem;
  font-size: 1.05rem;
  letter-spacing: 0.075em;
  font-weight: 700;
  text-transform: uppercase;

  @media (max-width: 1020px) {
    flex-direction: column;
    align-content: flex-start;
    font-size: 1.15rem;
    margin-right: 0.25rem;
    margin-left: 1.25rem;
  }
  @media (max-width: 620px) {
    margin-right: 0.25rem;
    margin-left: 0.25rem;
  }
`
export const DropDownHeaderMisc = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  user-select: none;
  height: 34px;
  border-radius: var(--border-radius2);
  width: 150px;
  border: 1px solid var(--background-blur1);
  padding: 0.2rem 0.4rem 0.2rem 0.5rem;
  font-weight: 700;
  font-size: 0.75rem;
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
