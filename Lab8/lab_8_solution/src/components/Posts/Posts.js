import React, { Component, useEffect, useState } from 'react'
import "./Posts.css"
import Post from '../Post/Post'

const Posts = ({postData}) =>{

    return (
    <div className='posts-container'>
        {
            postData.map((post,id)=>{
                return <Post key={id} postObj={post}/>
            })
        }
    </div>
    )
}

export default Posts;