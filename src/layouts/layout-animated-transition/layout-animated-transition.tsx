import { LayoutAnimatedTransitionProps } from '.'
import { theme } from '@styles/theme'
import { useIsFetching } from '@tanstack/react-query'
import React, { useEffect, useRef } from 'react'
import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar'

export const LayoutAnimatedTransition: React.FC<
  LayoutAnimatedTransitionProps
> = (props) => {
  const isFetching = useIsFetching()
  const ref = useRef<LoadingBarRef>(null)

  useEffect(() => {
    if (ref.current)
      if (isFetching === 0) {
        ref.current.complete()
      } else if (isFetching === 1) {
        ref.current.continuousStart()
      } else {
        ref.current.complete()
      }
  }, [isFetching])
  return (
    <>
      <LoadingBar color={theme.colors.product[100]} ref={ref} />
      {props.children}
    </>
  )
}
