import React, { useState, useEffect } from 'react'
import {
  createStreamer,
  fetchAllStreamers
} from '../../../reduxState/stateSlices/streamer/streamerSlice'
import socketIOClient from 'socket.io-client'
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

interface IStreamerForm {
  name: string
  pictureUrl: string
  platform: TPlatform
  description: string
}

const StreamerForm: React.FC = () => {
  const [formData, setFormData] = useState<IStreamerForm>({
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
    dispatch(createStreamer(formData))
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
  const ENDPOINT = 'http://localhost:3001'
  useEffect(() => {
    dispatch(fetchAllStreamers())
  }, [dispatch])
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT)
    socket.on('connect', () => {
      console.log('Connected to server')
    })

    socket.on('disconnect', () => {
      console.log('Disconnected from server')
    })

    // Disconnect when the component unmounts
    return () => {
      socket.disconnect()
    }
  }, [])
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
