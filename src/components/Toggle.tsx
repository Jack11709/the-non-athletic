import React from 'react'
import styled, { useTheme } from 'styled-components'

interface Props {
  onChange?: () => void
}

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  input[type='checkbox'] {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 40px;
    height: 20px;
    background: ${({ theme }) => theme.fontGrey};
    display: block;
    border-radius: 100px;
    position: relative;
  }

  label:after {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    width: 18px;
    height: 18px;
    background: #fff;
    border-radius: 90px;
    transition: 0.2s;
  }

  input:checked + label:after {
    left: calc(100% - 0.5px);
    transform: translateX(-100%);
  }
`

const Toggle: React.FC<Props> = ({ onChange }) => {
  const { isDark } = useTheme()

  return (
    <ToggleContainer>
      <input type="checkbox" id="switch" onChange={onChange} checked={isDark} />
      <label htmlFor="switch">Theme Toggle</label>
    </ToggleContainer>
  )
}

export default Toggle
