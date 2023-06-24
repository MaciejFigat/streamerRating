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
export const ListItem = styled(motion.div)`
  display: grid;
  place-items: space-around;

  min-height: fit-content;

  min-width: 318px;
  min-height: 376px;
  padding: 0.75rem 1rem;
  margin: 0;
  border-radius: var(--border-radius1);
  border: 1px solid var(--background-blur2);
`
export const StreamerColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem 1rem;
  padding: 2rem 1.25rem;
`
