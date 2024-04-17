import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  min-height: 100vh;
  min-width: 90vw;
  background-color: #eef4f7;
`

export const MainHead = styled.h1`
  color: #334155;
  text-decoration: underline;
  text-decoration-color: #52bbf0;
  text-decoration-thickness: 2px;
  padding: 5px;
`

export const CardContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`
