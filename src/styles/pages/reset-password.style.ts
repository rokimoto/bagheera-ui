import styled from 'styled-components';
import { media } from '../breakpoints';

const S = {
  Page: styled.div`
    background: ${({ theme }) => theme.backgroundColor.body};
    min-height: calc(
      100vh - ${({ theme }) => theme.sizing.desktop.navHeight} -
        ${({ theme }) => theme.sizing.desktop.footerHeight}
    );
    position: relative;
    box-sizing: border-box;

    ${media.MD} {
      padding-top: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  `,

  Content: styled.div`
    ${media.MD} {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  `,

  ContentInner: styled.div`
    text-align: left;
    padding: ${(props) => props.theme.spacing['3XL']} 0
      ${(props) => props.theme.spacing['5XL']};
  `,
};
export default S;
