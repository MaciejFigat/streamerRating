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
  min-height: 376px;
  padding: 0.75rem 1rem;
  margin: 0;
  border-radius: var(--border-radius1);
  border: 1px solid
    ${({ $isActive }) =>
      $isActive ? 'var(--background-secondary2)' : 'var(--background-blur2)'};
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
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem 1rem;
  padding: 2rem 1.25rem;
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
