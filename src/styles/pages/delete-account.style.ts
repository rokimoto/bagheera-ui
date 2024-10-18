import styled from 'styled-components';
import Ag from '../typography';
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
    padding-top: ${({ theme }) => theme.spacing['2XL']};

    ${media.MD} {
      padding-top: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  `,

  Content: styled.div`
    text-align: center;
    ${media.MD} {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  `,

  Title: styled.h1`
    ${Ag.HeadingLG}
    margin-bottom: ${({ theme }) => theme.spacing.LG};
  `,
  Text: styled.p`
    ${Ag.ParagraphMD}
  `,
  Link: styled.a`
    ${Ag.Link}
  `,
};
export default S;
