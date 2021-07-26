import style from "./style.module.css"
import Button from "../Button";

const PlaylistForm = ({ form, handleSubmit, handleFormChanges }) => {
  return (
    <div className={style.wrapper}>
      <h1>Create Playlist</h1>
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
