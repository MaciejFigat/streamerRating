import React from 'react'
import { DirButton } from './DirButton.styled'

interface DirectionalButtonProps {
  children: React.ReactNode
  isDisabled: boolean
}

const DirectionalButton: React.FC<DirectionalButtonProps> = ({
  children,
  isDisabled
}) => {
  return (
    <DirButton disabled={isDisabled} $isDisabled={isDisabled}>
      <span></span>
      {children}
      <span></span>
    </DirButton>
  )
}
export default DirectionalButton
