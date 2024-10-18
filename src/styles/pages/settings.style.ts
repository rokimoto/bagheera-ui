import styled from 'styled-components';

const S = {
  Settings: styled.div`
    background-color: ${({ theme }) => theme.backgroundColor.body};
    flex: 1;
    display: flex;
  `,
};

export default S;
