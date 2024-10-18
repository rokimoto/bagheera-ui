import styled from 'styled-components';

const S = {
  Page: styled.div`
    background: ${({ theme }) => theme.backgroundColor.body};
    min-height: calc(
      100vh - ${({ theme }) => theme.sizing.desktop.navHeight} -
        ${({ theme }) => theme.sizing.desktop.footerHeight}
    );
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

export default S;
