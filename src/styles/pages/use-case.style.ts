import styled from 'styled-components';
import { media } from '@/styles/breakpoints';
import Ag from '@/styles/typography';

type CardProps = {
  $selected: boolean;
};

const S = {
  UseCase: styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.backgroundColor.body};
    z-index: 3000;
    overflow: scroll;
  `,
  Content: styled.div`
    padding-bottom: ${({ theme }) => theme.spacing['2XL']};

    ${media.MD} {
      padding-bottom: 120px;
    }
  `,
  Logo: styled.div`
    padding-top: ${({ theme }) => theme.spacing.MD};
    padding-left: ${({ theme }) => theme.spacing.LG};
  `,
  Skip: styled.a`
    ${Ag.ParagraphMD}
    ${Ag.Link}
    position: absolute;
    top: ${({ theme }) => theme.spacing.XL};
    right: ${({ theme }) => theme.spacing.XL};
  `,
  TitleWrapper: styled.div`
    padding-top: ${({ theme }) => theme.spacing.LG};
    text-align: center;
    margin: 0 auto;
  `,
  Title: styled.h1`
    ${Ag.DisplayMD}
  `,
  Subtitle: styled.h2`
    ${Ag.ParagraphLG}
    padding: ${({ theme }) => theme.spacing['2XL']} 0;
  `,
  Label: styled.p`
    ${Ag.ParagraphMD}
    padding-top: ${({ theme }) => theme.spacing.MD};
  `,
  Card: styled.div<CardProps>`
    width: 100%;
    padding: ${({ theme }) => `${theme.spacing.LG} 0`};
    cursor: pointer;
    margin-bottom: ${({ theme }) => theme.spacing.LG};
    border-radius: ${({ theme }) => theme.borderRadius.MD};
    box-shadow: ${({ theme }) => theme.elevation.level2};
    text-align: center;
    position: relative;

    &:before {
      content: '';
      border-radius: ${({ theme }) => theme.borderRadius.MD};
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${({ $selected, theme }) =>
        $selected ? theme.actionColor.brand : 'none'};
      opacity: 0.25;
      z-index: 1;
    }

    &:after {
      content: '';
      border-radius: ${({ theme }) => theme.borderRadius.MD};
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: ${({ $selected, theme }) =>
        $selected
          ? `${theme.borderWidth['2']} solid ${theme.actionColor.brand}`
          : 'none'};
      z-index: 3;
    }
  `,
  CardContent: styled.div`
    position: relative;
    z-index: 2;
  `,
  Input: styled.div`
    padding-top: ${({ theme }) => theme.spacing.MD};
    padding-bottom: ${({ theme }) => theme.spacing['2XL']};
  `,
};

export default S;
