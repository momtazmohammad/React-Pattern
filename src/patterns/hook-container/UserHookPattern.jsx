import React from 'react'
import { useUser } from './UseUser';
import { UserList } from './UserList';

export default function UserHookPattern() {
    const { data, isLoading } = useUser();
    return (
      <div >
        <UserList isLoading={isLoading} data={data} />
      </div>
    );}
