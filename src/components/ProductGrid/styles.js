import styled from '@emotion/styled'

import { breakpoints } from '../../utils/styles'


export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media (max-width: ${breakpoints.s}px){
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Product = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
`

export const Title = styled.span`
  font-weight: 300;
  font-size: 1.5rem;
  text-align: center;
  color: #000639;
`

export const PriceTag = styled.span`
  font-weight: 1000;
  font-size: 1rem;
  text-align: center;
  margin-top: 15px;
  color: #000639;

  :before {
    content: '- '
  }
`