import styled from 'styled-components'
export const DirButton = styled.button`
  position: relative;
  border: 1px solid var(--background3-main);
  color: var(--background4-main);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0.75rem 3rem;
  border-radius: var(--border-radius2);
  background: var(--background2-main);
  font-size: var(--font-size-big);
  font-weight: 600;
  transition: background-color 500ms;
  overflow: hidden;
  /* new stacking context  */
  isolation: isolate;
  a {
    transition: color 250ms;
    color: var(--background4-main);
  }
  &:hover {
    a {
      color: var(--background-secondary1);
    }
  }
  &:active {
    a {
      color: var(--background1-main);
    }
  }
  &:hover,
  :focus-visible {
    background: var(--background-blur2);
  }

  span {
    position: absolute;
    width: 33.333%;
    height: 100%;
    z-index: -1;
  }

  span:first-of-type {
    left: 0;
    top: 0;
  }
  span:last-of-type {
    right: 0;
    top: 0;
  }

  &:before {
    position: absolute;
    content: '';

    background: var(--background-secondary1);
    width: 10%;
    aspect-ratio: 1;
    border-radius: 50%;
    inset: 0;
    margin: auto;
    z-index: -1;
    transition: transform 1000ms 200ms, opacity 200ms;
    opacity: 0;
  }

  &:active:before {
    transform: scale(20);
    opacity: 0.7;
    transition: transform 1000ms, opacity 500ms;
  }

  &:has(span:first-of-type:hover) {
    &:before {
      margin-left: 0;
    }
  }
  &:has(span:last-of-type:hover) {
    &:before {
      margin-right: 0;
    }
  }

  &:has(span:first-of-type:hover):before,
  &:has(span:last-of-type:hover):before {
    transition: transform 500ms, opacity 250ms;
  }
`
