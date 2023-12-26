export default async function getUser(userId: any) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
    next: {
      revalidate: 100,
    },
  })
  if (!res) throw new Error('Filed to fetch data')
  return await res.json()
}
