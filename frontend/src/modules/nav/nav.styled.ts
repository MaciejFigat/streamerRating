import styled from 'styled-components'
import { motion } from 'framer-motion'

export const NavList = styled.ul`
  position: sticky;
  top: 0;
  list-style: none;
  display: flex;
  height: 100vh;
  margin: 0;
  width: 200px;
  min-width: 200px;
  background: var(--background-blur1);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 1.75rem;
`

export const ListItem = styled(motion.div)`
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
