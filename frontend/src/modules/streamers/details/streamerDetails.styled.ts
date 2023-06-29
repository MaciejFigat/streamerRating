import styled from 'styled-components'

export const DetailsWrapper = styled.div`
  display: grid;
  place-items: flex-start center;
  border: 1px solid var(--background-blur1);

  width: 520px;
  height: 690px;
  padding: var(--gap-huge);
  border-radius: 10px;
  background: var(--background-gradient1);
  @media screen and (max-width: 960px) {
    max-width: 100%;
    width: 100%;
    margin: 0;
    padding: 0.5rem;
  }
`
export const DetailsImage = styled.img`
  width: 80%;
  height: auto;
  border-radius: var(--border-radius1);
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: fit-content;
  width: 100%;
  gap: var(--gap-medium);
`
export const DetailsHeader = styled.h3`
  font-size: var(--font-size-bigger);
  font-weight: 400;
`
export const DetailsDescription = styled.p`
  font-size: var(--font-size-medium);
  font-weight: 600;
`
