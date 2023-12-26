import Image from 'next/image'
import Tester from './Components/Tester'

export default function Home() {
  const demo = { name: 'shabab', age: '23ß' }
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Tester />{' '}
    </main>
  )
}
