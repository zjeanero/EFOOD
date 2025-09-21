import styled from 'styled-components'
import { cores } from '../../styles'

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  display: block;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .container {
    position: relative;
    z-index: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 24px 0;
  }
`

export const Category = styled.p`
  font-size: 32px;
  font-weight: 100;
  color: ${cores.branco};
`

export const Name = styled.h2`
  font-size: 32px;
  font-weight: 900;
  color: ${cores.branco};
`
