import styled from 'styled-components';
import { media } from '@/styles/breakpoints';
import Ag, { getHeadingLGDesktop } from '@/styles/typography';

const S = {
  Landing: styled.div`
    ${media.MD} {
      background-color: ${({ theme }) => theme.backgroundColor.body};
      flex: 1;
      display: flex;
      flex-direction: column;
      position: relative;
      width: 100vw;
      overflow: hidden;
    }
  `,
  Header: styled.div`
    text-align: center;
    padding: ${({ theme }) => theme.spacing['4XL']} 0;
    display: none;

    ${media.MD} {
      display: block;
      padding: ${({ theme }) => theme.spacing['6XL']} 0;
    }
  `,
  Trending: styled.div`
    padding: ${({ theme }) => theme.spacing['2XL']} 0;
    background-color: ${({ theme }) => theme.backgroundColor.primary};
  `,
  Title: styled.h1`
    ${Ag.DisplayXL}
    margin-bottom: ${({ theme }) => theme.spacing.LG};
  `,
  Text: styled.div`
    ${Ag.HeadingMD}
    margin-bottom: ${({ theme }) => theme.spacing.LG};

    ${media.MD} {
      ${getHeadingLGDesktop}
      margin-bottom: ${({ theme }) => theme.spacing['2XL']};
    }
  `,
  Highlight: styled.span`
    color: ${({ theme }) => theme.contentColor.accent};
    display: block;

    ${media.MD} {
      display: inline-block;
    }
  `,
  Subtitle: styled.h2`
    ${Ag.HeadingMD}
    margin-bottom: ${({ theme }) => theme.spacing.LG};
    display: none;

    ${media.MD} {
      display: block;
    }
  `,
};

export default S;
