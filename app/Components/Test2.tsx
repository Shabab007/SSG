import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'

// eslint-disable-next-line react/display-name
const Test2 = forwardRef((props: any, ref) => {
  const { value, handleChange } = props

  const inputRef = useRef<HTMLInputElement | null>(null)

  // const handleChange = (e: any) => {
  //     handleChange()
  // }
  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.value = ''
      // Resetting the input value
    }
  }

  useImperativeHandle(ref, () => ({
    handleFocus,
  }))

  return (
    <div>
      <input className='text-black' value={value} ref={inputRef} onChange={handleChange} />
    </div>
  )
})

export default Test2
