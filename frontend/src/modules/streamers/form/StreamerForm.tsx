import React, { useState, useEffect } from 'react'
import {
  createStreamer,
  fetchAllStreamers
} from '../../../reduxState/stateSlices/streamer/streamerSlice'
import { useAppDispatch, useAppSelector } from '../../../reduxState/reduxHooks'
import { TPlatform } from '../../../consts'

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
  useEffect(() => {
    dispatch(fetchAllStreamers())
  }, [dispatch])

  return (
    <div>
      <h2>Create Streamer</h2>
      {status === 'loading' && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Picture URL:</label>
          <input
            type='text'
            name='pictureUrl'
            value={formData.pictureUrl}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Platform:</label>
          <select
            name='platform'
            value={formData.platform}
            onChange={handleChange}
          >
            {Object.values(TPlatform).map(platform => (
              <option key={platform} value={platform}>
                {platform}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name='description'
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default StreamerForm
