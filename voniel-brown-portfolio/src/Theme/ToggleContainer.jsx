import styled from 'styled-components';

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 2rem;
  height: 1.5rem;
  svg {
    height: auto;
    width: 2.5rem;
    transition: all 1.09s linear;
    
   
    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateX(0)' : 'translateX(100px)'};
    }
    
    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateX(-200px)' : 'translateX(0)'};
    }
  }
`;

export default ToggleContainer