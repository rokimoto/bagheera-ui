import styled from 'styled-components';
import { media } from '@/styles/breakpoints';
import Ag from '@/styles/typography';

const S = {
  Demo: styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    iframe {
      flex: 1;
      padding-top: ${({ theme }) => theme.spacing['3XL']};

      ${media.MD} {
        padding-top: 0;
      }
    }
  `,
  TopNav: styled.div`
    width: 100%;
    height: ${({ theme }) => theme.sizing.mobile.navHeight};
    background-color: ${({ theme }) => theme.backgroundColor.primary};
    border-bottom: ${({ theme }) => theme.borderWidth[1]} solid
      ${({ theme }) => theme.borderColor.subdued};
    position: fixed;
    top: 0;
    left: 0;

    ${media.MD} {
      height: ${({ theme }) => theme.sizing.desktop.navHeight};
    }
  `,
  Logos: styled.div`
    display: flex;
    align-items: center;
  `,
  SmallTLogo: styled.div`
    margin-right: ${({ theme }) => theme.spacing.SM};
  `,

  TopNavInner: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: ${({ theme }) => `${theme.spacing.SM} ${theme.spacing.MD}`};

    ${media.MD} {
      padding: ${({ theme }) => `0 ${theme.spacing.LG}`};
    }
  `,
  LeftNav: styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    flex: 1;
  `,
  Logo: styled.a`
    font-family: ${({ theme }) => theme.typeface.owners};
    font-weight: ${({ theme }) => theme.fontWeight.extrabold};
    font-size: ${({ theme }) => theme.fontSize[400]};
    line-height: ${({ theme }) => theme.lineHeight[300]};
    color: ${({ theme }) => theme.contentColor.default};
  `,
  Links: styled.div`
    display: flex;
    height: 100%;
    padding-left: ${({ theme }) => theme.spacing['6XL']};
  `,
  Link: styled.a`
    ${Ag.ParagraphMD}
    height: 100%;
    box-sizing: border-box;
    padding: ${({ theme }) => theme.spacing.MD};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.actionColor.hover};
    }

    &:pressed {
      background-color: ${({ theme }) => theme.actionColor.pressed};
    }
  `,
};

export default S;
