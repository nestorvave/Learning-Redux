import React from 'react'
import NotesAppBar from './NotesAppBar'

const NoteScreen = () => {
  return (
    <div className='notes__main-content' >
        <NotesAppBar />
        <div className='notes__content'>
            <input 
                type="text"
                placeholder='Some Awesome title'
                className='notes__title-input'
                autoComplete='off'

            />
            <textarea
                placeholder='What happened today'
                className='notes__text-area'
            >
            </textarea>
            <div className="notes__image">
                <img src="https://assets-es.imgfoot.com/vinicius-jr-real-madrid-2021.jpg" alt="added_picture"  />
            </div>
        </div>
    </div>
  )
}

export default NoteScreen