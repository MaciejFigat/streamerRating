import React, { useState } from 'react'
import { createStreamer } from '../../../reduxState/stateSlices/streamer/streamerSlice'
import { useAppDispatch, useAppSelector } from '../../../reduxState/reduxHooks'
import { TPlatform, TextColor } from '../../../consts'
import {
  GeneralWrapper,
  HighlightText,
  HorizontalWrapper
} from '../../../styles/misc.styles'
import {
  FormWrapper,
  FormTitleHeader,
  Form,
  InputsWrapper,
  FormLabel,
  Input,
  TextArea,
  FormSelect,
  FormSelectOption
} from './streamerForm.styled'
import DirectionalButton from '../../../components/DirectionalButton/DirectionalButton'
import { IStreamer } from '../../../interfaces'

const StreamerForm: React.FC = () => {
  //TODO Mock userID
  const userId = 'userIdMock'

  const [formData, setFormData] = useState<
    Omit<IStreamer, 'upvotes' | 'downvotes' | 'createdBy'>
  >({
    name: '',
    pictureUrl: '',
    platform: TPlatform.TWITCH,
    description: ''
  })
  //   https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png
  const dispatch = useAppDispatch()
  const streamer = useAppSelector(state => state.streamerState)
  const { status, error } = streamer

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    dispatch(createStreamer({ ...formData, createdBy: userId }))
  }

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  return (
    <GeneralWrapper>
      <FormWrapper>
        <FormTitleHeader>Create Streamer </FormTitleHeader>
        {status === 'loading' ? (
          <HorizontalWrapper>
            <HighlightText color={TextColor.INFO}>Loading...</HighlightText>
          </HorizontalWrapper>
        ) : (
          <></>
        )}
        {error ? (
          <HorizontalWrapper>
            {' '}
            <HighlightText color={TextColor.DANGER}>
              Error: {error}
            </HighlightText>
          </HorizontalWrapper>
        ) : (
          <></>
        )}
        <Form onSubmit={handleSubmit}>
          <InputsWrapper>
            <FormLabel htmlFor='name'>Name:</FormLabel>
            <Input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
            />
          </InputsWrapper>
          <InputsWrapper>
            <FormLabel htmlFor='pictureUrl'>Picture URL:</FormLabel>
            <Input
              type='text'
              name='pictureUrl'
              value={formData.pictureUrl}
              onChange={handleChange}
            />
          </InputsWrapper>
          <InputsWrapper>
            <FormLabel htmlFor='description'>Description:</FormLabel>
            <TextArea
              name='description'
              value={formData.description}
              onChange={handleChange}
            />
          </InputsWrapper>{' '}
          <HorizontalWrapper>
            <FormLabel>Platform:</FormLabel>
            <FormSelect
              name='platform'
              value={formData.platform}
              onChange={handleChange}
            >
              {Object.values(TPlatform).map(platform => (
                <FormSelectOption key={platform} value={platform}>
                  {platform}
                </FormSelectOption>
              ))}
            </FormSelect>
          </HorizontalWrapper>
          <DirectionalButton>Create Streamer</DirectionalButton>
        </Form>
      </FormWrapper>
    </GeneralWrapper>
  )
}

export default StreamerForm
