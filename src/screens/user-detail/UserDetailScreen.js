import React from 'react'
import UserDetail from '../../components/users/user-detail/UserDetail'
import UserList from '../../components/users/user-list/UserList'

function UserDetailScreen() {
  return (
    <>
      <UserList />
      <h1>User Detail</h1>
      <UserDetail />
    </>
  )
}

export default UserDetailScreen