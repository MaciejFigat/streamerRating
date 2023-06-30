import React, { useEffect, useState } from 'react'
import { createStreamer } from '../../../reduxState/stateSlices/streamer/streamerSlice'
import { useAppDispatch, useAppSelector } from '../../../reduxState/reduxHooks'
import { TPlatform, TextColor } from '../../../consts'
import {
  HighlightText,
  HomeTitle,
  HorizontalWrapper,
  HorizontalWrapperSpaceAround,
  RowWrapper
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
  FormSelectOption,
  SettingsWrapper
} from './streamerForm.styled'
import DirectionalButton from '../../../components/DirectionalButton/DirectionalButton'
import { IStreamer } from '../../../interfaces'
import {
  DropDownHeaderMisc,
  UrlButtonPadding
} from '../list/streamerList.styled'
import {
  validateDescription,
  validateName,
  validateUrl
} from './functions/validateForm'

const StreamerForm: React.FC = () => {
  const [formData, setFormData] = useState<
    Omit<IStreamer, 'upvotes' | 'downvotes' | 'createdBy'>
  >({
    name: '',
    pictureUrl: '',
    platform: TPlatform.TWITCH,
    description: ''
  })
  const [nameError, setNameError] = useState<string | null>(null)
  const [descriptionError, setDescriptionError] = useState<string | null>(null)
  const [urlError, setUrlError] = useState<string | null>(null)

  const userId = useAppSelector(state => state.user.userId)

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
  const handleStaticPicture = () => {
    setFormData(prevData => ({
      ...prevData,
      pictureUrl:
        'https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png'
    }))
  }
  const handleDeleteUrl = () => {
    setFormData(prevData => ({
      ...prevData,
      pictureUrl: ''
    }))
  }
  useEffect(() => {
    if (formData.name !== '') {
      setNameError(validateName(formData.name))
    }
  }, [formData.name])

  useEffect(() => {
    if (formData.description !== '') {
      setDescriptionError(validateDescription(formData.description))
    }
  }, [formData.description])

  useEffect(() => {
    if (formData.pictureUrl !== '') {
      setUrlError(validateUrl(formData.pictureUrl))
    }
  }, [formData.pictureUrl])

  return (
    <RowWrapper>
      <FormWrapper>
        <FormTitleHeader>Create & Vote </FormTitleHeader>
        <HorizontalWrapper>
          {' '}
          <HomeTitle>Streamer Rank</HomeTitle>
        </HorizontalWrapper>
        <Form onSubmit={handleSubmit}>
          <InputsWrapper>
            <FormLabel
              htmlFor='name'
              $hasError={nameError ? true : false}
              $isApproved={nameError === '' ? true : false}
            >
              {nameError === '' ? 'name is valid' : nameError}
              {nameError === null ? 'name' : null}
            </FormLabel>
            <Input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
            />
          </InputsWrapper>
          <InputsWrapper>
            <HorizontalWrapperSpaceAround>
              <FormLabel
                htmlFor='pictureUrl'
                $hasError={urlError ? true : false}
                $isApproved={urlError === '' ? true : false}
              >
                {' '}
                {urlError === '' ? 'Picture url is valid' : urlError}
                {urlError === null ? 'Picture URL' : null}
              </FormLabel>
              <UrlButtonPadding>
                <HorizontalWrapper>
                  {' '}
                  {formData.pictureUrl.length > 0 && (
                    <DropDownHeaderMisc onClick={handleDeleteUrl}>
                      delete url
                    </DropDownHeaderMisc>
                  )}
                  <DropDownHeaderMisc onClick={handleStaticPicture}>
                    static Picture
                  </DropDownHeaderMisc>
                </HorizontalWrapper>
              </UrlButtonPadding>
            </HorizontalWrapperSpaceAround>

            <Input
              type='text'
              name='pictureUrl'
              value={formData.pictureUrl}
              onChange={handleChange}
            />
          </InputsWrapper>
          <InputsWrapper>
            <FormLabel
              htmlFor='description'
              $hasError={descriptionError ? true : false}
              $isApproved={descriptionError === '' ? true : false}
            >
              {' '}
              {descriptionError === ''
                ? 'Description is valid'
                : descriptionError}
              {descriptionError === null ? 'Description' : null}
            </FormLabel>
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
          <DirectionalButton
            isDisabled={
              nameError === '' && urlError === '' && descriptionError === ''
                ? false
                : true
            }
          >
            Create Streamer
          </DirectionalButton>
        </Form>
      </FormWrapper>
      <SettingsWrapper>
        {status === 'loading' ? (
          <HorizontalWrapper>
            <HighlightText color={TextColor.INFO}>Loading...</HighlightText>
          </HorizontalWrapper>
        ) : null}
        {error ? (
          <HorizontalWrapper>
            {' '}
            <HighlightText color={TextColor.DANGER}>
              Error: {error}
            </HighlightText>
          </HorizontalWrapper>
        ) : null}
      </SettingsWrapper>
    </RowWrapper>
  )
}

export default StreamerForm
