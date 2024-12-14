import styled from 'styled-components'

export const CategoryContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
  overflow: auto;
`

export const CategoryItem = styled.li`
  @media (min-width: 576px) {
    text-align: center;
    height: 30px;
    width: 170px;
  }
`
export const CategoryButton = styled.button`
  font-size: 16px;
  font-family: 'Roboto';
  background-color: transparent;
  border: 0;
  cursor: pointer;
  outline: none;
  color: ${props => (props.isactive === 'true' ? 'red' : '#000000')};
  border-color: ${props => (props.isactive === 'true' ? 'red' : null)};
  border-bottom: ${props => (props.isactive === 'true' ? '2px solid' : null)};
  @media (max-width: 575px) {
    font-size: 12px;
    font-family: 'Roboto';
    background-color: transparent;
    border: 0;
    cursor: pointer;
    outline: none;
    color: ${props => (props.isactive === 'true' ? 'red' : '#000000')};
    border-color: ${props => (props.isactive === 'true' ? 'red' : null)};
    border-bottom: ${props => (props.isactive === 'true' ? '2px solid' : null)};
    width: 130px;
  }
`
