import getAllUser from '@/lib/getAllUser'
import getUser from '@/lib/getUser'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import React from 'react'

async function User({ params }: { params: Params }) {
  const user = await getUser(params.userId)
  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  )
}

export default User

export async function generateStaticParams() {
  const users = await getAllUser()
  return users.map((user: any) => {
    return { userId: user.id.toString() }
  })
}
