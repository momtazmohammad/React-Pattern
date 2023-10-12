import React from 'react'
import { UserList } from './UserList';
import { includeLoadingUser } from './includeLoadingUser';

export default function UserHocPattern() {
    const UserListWithLoader=includeLoadingUser(UserList,"User List")
    return (
      <div >
        <UserListWithLoader  />
      </div>
    );}
