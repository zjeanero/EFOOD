import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  span {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`

export const CardContent = styled.div`
  padding: 8px;
  border: 1px solid ${cores.laranja};
  border-top: none;
`

export const ListCards = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px 80px;
`

export const Cards = styled.li`
  position: relative;
  color: ${cores.laranja};

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }
`

export const Container = styled.section`
  padding: 80px 0;
`

export const Tags = styled.span`
  background-color: ${cores.laranja};
  color: ${cores.bege};
  font-size: 12px;
  font-weight: bold;
  padding: 6px 4px;
  display: inline-block;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Button = styled(Link)`
  background-color: ${cores.laranja};
  color: ${cores.bege};
  padding: 4px 6px;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
`
