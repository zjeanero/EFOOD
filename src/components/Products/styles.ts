import styled from "styled-components";
import { cores } from "../../styles";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1024px;
`

export const Cards = styled.li`
  background: ${cores.branco};
  margin-bottom: 32px;
  border: 1px solid ${cores.laranja};

  h1 {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    margin: 8px;

    span {
      margin-left: auto;
    }

  }

  p {
    font-weight: 400;
    font-size: 14px;
    text-align: start;
    margin: 16px 8px;
    font-weight: 400;
  }
`

export const ListCards = styled.ul`
  margin-top: 64px;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px 80px;
`

export const Button = styled(Link)`
  background: ${cores.laranja};
  color: ${cores.branco};
  padding: 6px;
  border: none;
  cursor: pointer;
  margin-left: 8px;
  margin-bottom: 8px;
  text-decoration: none;
  display: inline-block;
`

export const Tags = styled.p`
  font-size: 12px;
  font-weight: bold;
  display: inline-flex;
  background: ${cores.laranja};
  color: ${cores.branco};
  padding: 6px;
  border: none;
`
export const ImageContainer = styled.div`
  position: relative;

  img {
    display: block;
    max-width: 100%;
    height: 225px;
    object-fit: cover;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
`
