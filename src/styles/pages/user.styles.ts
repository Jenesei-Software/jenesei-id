import { theme } from '@styles/theme'
import styled from 'styled-components'

export const UserWrapper = styled.div`
  border-top: 2px solid ${theme.colors.black[5]};
  display: flex;
  padding: 26px;
  flex-direction: column;
  align-items: flex-start;
  gap: 26px;
  align-self: stretch;
`