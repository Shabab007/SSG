import getAllUser from '@/lib/getAllUser'
import Link from 'next/link'
import React from 'react'

async function Users() {
  const users = await getAllUser()
  return (
    <ul className='p-8 text-2xl underline'>
      {users.map((user: any) => {
        return (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Users
