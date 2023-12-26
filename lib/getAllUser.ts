export default async function getAllUser() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  if (!res) throw new Error('Filed to fetch data')
  return await res.json()
}
