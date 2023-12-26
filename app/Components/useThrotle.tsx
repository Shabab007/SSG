import { useCallback, useEffect, useState } from 'react'

const useThrottle = () => {
  const [disable, setDisable] = useState(false)
  let timer: any

  const handleThrottle = useCallback(
    (handleClicked: () => void) => {
      if (!disable) {
        setDisable(true)
        handleClicked()
        timer = setTimeout(() => {
          console.log('here')
          setDisable(false)
        }, 5000)
      }
    },
    [disable],
  )
  useEffect(() => {
    return () => {
      console.log('unmount throttle2')
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [])
  return { handleThrottle, disable, setDisable }
}

export default useThrottle
