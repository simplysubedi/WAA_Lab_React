import React, { useState } from 'react'

const PostUpdate = ({updatePostTitle}) => {

    const [title,setTitle] = useState("");

  return (
    <>
    <div>PostUpdate</div>
    <input 
        type='text'
        placeholder='New Title' value={title} onChange={(e)=>{
            setTitle(e.target.value)}
            }/>
    <button onClick={() => updatePostTitle(title)}>Update</button>
    </>
  )
}

export default PostUpdate