import React from 'react'

function CreateArea() {
  return (
    <div class="content">
         <form>
            <input type="text" placeholder="Place text" name='text'></input>
         <textarea placeholder='place text'></textarea>
         <button>+</button>
         </form>
         
      </div>
  )
}

export default CreateArea