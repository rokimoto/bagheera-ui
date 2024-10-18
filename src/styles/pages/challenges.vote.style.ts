import styled from 'styled-components';
import Ag, { getHeadingLGDesktop } from '@/styles/typography';
import { media } from '@/styles/breakpoints';

const S = {
  Vote: styled.div`
    background-color: ${({ theme }) => theme.backgroundColor.black};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: ${({ theme }) => theme.spacing['5XL']};
    padding-bottom: ${({ theme }) => theme.spacing['2XL']};
    box-sizing: border-box;

    ${media.MD} {
      padding: 0;
    }
  `,
  Header: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.backgroundColor.black};
  `,
  AlertWrapper: styled.div`
    padding: ${({ theme }) =>
      `${theme.spacing['2XS']} ${theme.spacing.SM} ${theme.spacing.SM}`};
    display: inline-block;
    border: ${({ theme }) =>
      `${theme.borderWidth['1']} solid ${theme.borderColor.inverseSubdued}`};
    border-radius: ${({ theme }) => theme.borderRadius.SM};
    margin-bottom: ${({ theme }) => theme.spacing.LG};
    width: 100%;
    box-sizing: border-box;

    ${media.MD} {
      margin-top: ${({ theme }) => theme.spacing.LG};
      margin-bottom: 0;
    }
  `,
  Title: styled.h1`
    ${Ag.HeadingSM}
    color: ${({ theme }) => theme.contentColor.white};
    text-align: center;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    line-clamp: 1;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;

    ${media.MD} {
      ${getHeadingLGDesktop}
      display: block;
      overflow: visible;
      line-clamp: none;
      -webkit-line-clamp: none;
      text-overflow: clip;
      margin-bottom: ${({ theme }) => theme.spacing['6XL']};
      color: ${({ theme }) => theme.contentColor.white};
    }
  `,
  SubTitle: styled.p`
    ${Ag.ParagraphLG}
    ${Ag.Bold}
    color: ${({ theme }) => theme.contentColor.white};
    text-align: center;
    margin: ${({ theme }) => theme.spacing.MD} 0;

    ${media.MD} {
      ${Ag.Bold}
      color: ${({ theme }) => theme.contentColor.white};
      width: 100%;
      margin: 0 0 ${({ theme }) => theme.spacing.MD};
    }
  `,
  Entry: styled.video`
    width: calc(100vw - ${({ theme }) => theme.spacing.MD} * 2);
    height: calc(100vw - ${({ theme }) => theme.spacing.MD} * 2);

    ${media.MD} {
      height: 100%;
    }
  `,
  SpinnerWrapper: styled.div`
    width: calc(100vw - ${({ theme }) => theme.spacing.MD} * 2);
    height: calc(100vw - ${({ theme }) => theme.spacing.MD} * 2);
    display: flex;
    align-items: center;
    justify-content: center;

    ${media.MD} {
      width: 100%;
      height: 100%;
      aspect-ratio: 1;
    }
  `,
  CenterContent: styled.div`
    ${media.MD} {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: center;
    }
  `,
  Buttons: styled.div`
    margin: ${({ theme }) => theme.spacing.LG} 0;
    ${media.MD} {
      display: flex;

      align-items: center;
      justify-content: center;
      margin: 0;
    }
  `,
  Button: styled.div`
    text-align: center;
  `,
  Divider: styled.div`
    ${media.MD} {
      height: 48px;
      width: ${({ theme }) => theme.borderWidth[1]};
      background-color: ${({ theme }) => theme.borderColor.inverse};
      margin: 0 ${({ theme }) => theme.spacing.MD};
    }
  `,
};

export default S;
