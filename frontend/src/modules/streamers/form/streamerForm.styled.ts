import styled from 'styled-components'

export const FormWrapper = styled.div`
  display: grid;
  place-items: flex-start center;
  border: 1px solid var(--background-blur1);

  width: 520px;
  height: 590px;
  padding: var(--gap-huge);
  border-radius: 10px;

  margin-top: 1rem;
  @media screen and (max-width: 960px) {
    max-width: 100%;
    width: 100%;
    margin: 0;
    padding: 0.5rem;
  }
`
export const FormTitleHeader = styled.h3`
  margin: 1rem 0 0;

  font-weight: 700;
  font-size: var(--font-size-bigger);
  font-size: 2rem;
  font-family: 'Yeseva One', cursive;
`
export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (max-width: 760px) {
    max-width: 90%;
  }
`
export const InputsWrapper = styled.div`
  display: grid;
  place-items: center;
  background: var(--background1-main);
  border: 1px solid var(--background-blur1);
  border-radius: 0 0 var(--border-radius1) var(--border-radius1);
  &:first-of-type {
    border-radius: var(--border-radius1) var(--border-radius1) 0 0;
    border-bottom: none;
  }
  &:nth-of-type(2) {
    border-radius: 0;
    border-bottom: none;
  }
  &:last-of-type {
    margin-bottom: var(--gap-medium);
    border-radius: 0 0 var(--border-radius1) var(--border-radius1);
    border-bottom: 1px solid var(--background-blur1);
  }
`
export const FormLabel = styled.label`
  margin-bottom: var(--gap-small);
  width: 100%;
  text-transform: uppercase;

  font-size: var(--font-size-verySmall);
  padding: 16px 16px 0;
`
export const Input = styled.input`
  max-width: 100%;
  width: 100%;
  padding: var(--padding-medium-large);
  color: var(--background4-main);
  outline: 0;
  font-size: var(--font-size-small-plus);
  transition: all 0.3s ease-out;
  border: none;
  background: none;
  &:focus {
    color: var(--background4-main);
  }
  &::placeholder {
    color: var(--background3-main);
  }
`
export const TextArea = styled.textarea`
  max-width: 100%;
  width: 100%;
  height: 100px;
  padding: var(--padding-medium-large);
  color: var(--background4-main);
  outline: 0;
  font-size: var(--font-size-small-plus);
  transition: all 0.3s ease-out;
  border: none;
  background: none;
  resize: none;
  &:focus {
    color: var(--background4-main);
  }
  &::placeholder {
    color: var(--background3-main);
  }
`
export const FormSelect = styled.select`
  max-width: 100%;
  width: 100%;
  height: 40px;
  padding: var(--padding-medium);
  color: var(--background4-main);
  outline: 0;
  font-size: var(--font-size-medium);
  transition: all 0.3s ease-out;
  border: none;
  background: none;
  border-radius: var(--border-radius-medium);

  background-repeat: no-repeat;
  background-position: right center;
  background-size: 16px;
  &:hover,
  &:focus {
    color: var(--background4-main);
    border: 1px solid var(--accent-color);
  }
`
export const FormSelectOption = styled.option`
  color: var(--background4-main);
  background-color: var(--background1-main);
`
export const SettingsWrapper = styled.div`
  display: grid;
  place-items: center;
  border-radius: var(--border-radius1);
  border: 1px solid var(--background-blur1);
  padding: var(--padding-medium);

  flex: 1;
  margin: 1rem 0;
`
