import React from 'react'

const UserCard = (props) => {
  return (
    <div className=' flex flex-col'>
<img src={props.content.avatar} alt="user" className='w-12 h-12'/>
<h3>{props.content.email}</h3>
    </div>
  )
}

export default UserCard