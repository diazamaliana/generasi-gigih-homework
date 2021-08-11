import style from "./style.module.css"
import Button from "../Button";
import { useDispatch, useSelector } from 'react-redux'
import { setForm } from "../../redux/store/playlist";
import { createPlaylist, addTrackToPlaylist } from "../../libraries/apiSpotify";
import { Heading } from '@chakra-ui/react'


const PlaylistForm = () => {
  const { accessToken, user } = useSelector(state => state.userAuth)
  const { selectedTracks, form } = useSelector(state => state.playlist)
  const dispatch = useDispatch()

  const handleFormChanges = e => {
      dispatch(setForm({[e.target.name]: e.target.value}))
  }

  const handleSubmit = e => {
       e.preventDefault()
       if (selectedTracks.length > 0){
           createPlaylist(accessToken, user.id, {
           name: form.title,
           description: form.description,
           public: false,
           collaborative: false
         }).then(playlist => {
           return addTrackToPlaylist(accessToken, playlist.id, {
             uris: selectedTracks
           })
         }).then(() => {
           alert('Playlist created')
         })
       } else {
         alert ('Please selected some track to make a playlist!')
       }    
   }

  return (
    <div className={style.wrapper}>
      <Heading>Create Playlist</Heading>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          minLength="10"
          onChange={handleFormChanges}
          value={form.title}
        />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          minLength="10"
          onChange={handleFormChanges}
          value={form.description}
        ></textarea>
          <Button type="submit" aria-label="Create Playlist">
            Create Playlist
          </Button>
      </form>
    </div>
  )
}

export default PlaylistForm;
