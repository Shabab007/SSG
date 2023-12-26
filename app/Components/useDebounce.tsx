import { useEffect, useState } from 'react'

const useDebounce = (value = '', delay = 500) => {
  const [debounceVlaue, setDebounceValue] = useState(value)
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Hi')
      setDebounceValue(value)
    }, delay)
    return () => {
      console.log('unmounted')
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [value, delay])

  return [debounceVlaue]
}
export default useDebounce
