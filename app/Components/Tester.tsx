'use client'
import { useState, useEffect, useRef } from 'react'
import Test2 from './Test2'
import useDebounce from './useDebounce'
import useThrottle from './useThrotle'

// const useCounter = (value: number) => {
//   const [count, setCount] = useState(value)
//   let count2 = 0
//   useEffect(() => {
//     const id = setInterval(() => {
//       setCount((c) => c + 1)
//       count2++
//     }, 1000)
//     return () => clearInterval(id)
//   }, [])
//   return [count, count2]
// }

export default function Counter() {
  const ref = useRef<{ handleFocus: () => void }>()
  const [value, setValue] = useState('')
  const [debounceVlaue] = useDebounce(value)
  const [clicked, setClicked] = useState(false)
  // const { handleThrottle, disable, setDisable } = useThrottle()
  const handleChange = (e: any) => {
    setValue(e.target.value)
  }
  const handleClicked = function () {
    if (!clicked) {
      setClicked(true)
      console.log('skjdksdjksdj')
      const timer = setTimeout(() => {
        console.log('times up')
        setClicked(false)
      }, 5000)
    }
  }
  const obj = {
    name: 'shabba',
    address: 'bangladesh',
  }
  const h = { ...obj }
  h.name = 'rhythm'
  console.log(obj, h)
  return (
    <h1>
      <Test2 ref={ref} value={value} handleChange={handleChange} />
      <button
        onClick={() => {
          setValue('')
          ref.current?.handleFocus()
        }}
      >
        clear
      </button>
      <p className='text-white'>{debounceVlaue}</p>
      <button
        disabled={clicked}
        className={` text-black ${clicked ? 'bg-blue-500' : 'bg-white'}`}
        onClick={handleClicked}
      >
        uncontrolled
      </button>
    </h1>
  )
}
