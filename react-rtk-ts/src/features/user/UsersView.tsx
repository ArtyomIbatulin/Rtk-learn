import React, {useEffect} from 'react'
// import {useSelector, useDispatch} from 'react-redux'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { fetchUsers } from './userSlice'

export const UsersView = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch()
  useEffect(() => {dispatch(fetchUsers()) } , [])

const ulStyle = {
  listStyle : 'none',
}

  return (
    <div>
        <h2>List of users</h2>
        {user.loading && <div>Loading...</div>}
        {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
        {!user.loading && user.users.length ? (
          <ul style={ulStyle}>
            {user.users.map((user) => ( <li  key={user.id}>{user.name}</li>))}
          </ul>
        ) : null}
    </div>
  )
}
