import { media } from '@/styles/breakpoints';
import Ag, { getHeadingLGDesktop } from '@/styles/typography';
import styled from 'styled-components';

type StyledContentProps = {
  $mobileNavTop: boolean;
};

const S = {
  Content: styled.div<StyledContentProps>`
    background-color: ${({ theme }) => theme.backgroundColor.primary};
    flex: 1;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: ${({ theme, $mobileNavTop }) =>
      !$mobileNavTop ? theme.sizing.mobile.bottomNavHeight : 0};
    padding-top: ${({ theme, $mobileNavTop }) =>
      $mobileNavTop ? theme.sizing.mobile.navHeight : 0};

    ${media.MD} {
      padding: 0 0 ${({ theme }) => theme.spacing['4XL']};
    }
  `,
  MobileDisplay: styled.div`
    width: 100%;
    ${media.MD} {
      display: none;
    }
  `,
  DesktopDisplay: styled.div`
    display: none;
    width: 100%;

    ${media.MD} {
      display: block;
    }
  `,
  OuputDisplay: styled.div`
    width: 100vw;

    ${media.MD} {
      width: auto;
    }
  `,
  MediaWrapper: styled.div`
    width: 100%;
    ${media.MD} {
      overflow: hidden;
      height: 100%;
      margin-top: ${({ theme }) => theme.spacing.XL};
    }
  `,
  Media: styled.video`
    width: 100%;
    ${media.MD} {
      max-width: 550px;
      max-height: 550px;
    }
  `,
  Text: styled.div`
    padding: ${({ theme }) => `${theme.spacing.MD} 0 ${theme.spacing['5XL']}`};
    position: relative;
    width: 100%;
    box-sizing: border-box;

    ${media.MD} {
      width: auto;
      padding: ${({ theme }) => `${theme.spacing.XL} 0 0`};
      box-sizing: border-box;
    }
  `,
  TextContent: styled.div`
    position: relative;
    margin-bottom: ${({ theme }) => theme.spacing['2XL']};
    width: 100%;
  `,
  Row: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${({ theme }) => theme.spacing.XS};
  `,
  ShareWrapper: styled.div`
    display: flex;
    justify-content: end;
    margin-bottom: ${({ theme }) => theme.spacing.XS};
  `,
  ActionBar: styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: ${({ theme }) => `${theme.spacing.XS} ${theme.spacing.MD}`};
    border-bottom: ${({ theme }) => theme.borderWidth[1]} solid
      ${({ theme }) => theme.borderColor.subdued};
    box-sizing: border-box;

    ${media.MD} {
      justify-content: flex-start;
      border-bottom: none;
      padding: 0;
      gap: ${({ theme }) => theme.spacing.MD};
      margin-bottom: ${({ theme }) => theme.spacing.MD};
    }
  `,
  ActionColumn: styled.div`
    display: flex;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing.MD};

    ${media.MD} {
      height: 48px;
    }
  `,

  DesktopOptions: styled.div`
    display: none;
    ${media.MD} {
      display: flex;
      gap: ${({ theme }) => theme.spacing.MD};
    }
  `,
  PromptHeader: styled.h1`
    ${Ag.HeadingSM}

    ${media.MD} {
      ${getHeadingLGDesktop}
      width: 100%;
    }
  `,
  PromptViews: styled.div`
    ${Ag.ParagraphXS}
    color: ${({ theme }) => theme.contentColor.subdued};
    margin-bottom: ${({ theme }) => theme.spacing.MD};
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.XS};
    justify-content: flex-start;

    ${media.MD} {
      justify-content: flex-start;
    }
  `,
  PromptUser: styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.SM};
    margin-bottom: ${({ theme }) => theme.spacing.LG};
    width: 100%;
  `,
  DisplayNameWrapper: styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spacing.SM};
    align-items: center;
  `,
  PromptUserText: styled.p`
    ${Ag.ParagraphMD}
    ${Ag.Bold}
    // temporary fix for ID as username - once display name is implemented, the name would have to have ~30 continuous chars with no spaces for this to be a problem
    max-width: 65vw;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  Buttons: styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spacing.MD};
    margin-bottom: ${({ theme }) => theme.spacing.LG};
  `,
  MusicSection: styled.div`
    margin-bottom: ${({ theme }) => theme.spacing.MD};
  `,
  MusicPrompt: styled.div`
    padding: ${({ theme }) => `${theme.spacing.XS} 0 ${theme.spacing.LG}`};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.MD};
  `,
  MusicInput: styled.div`
    flex: 1;
  `,
  CreditButtonText: styled.div`
    display: flex;
  `,
  CreditIcon: styled.div`
    padding: ${({ theme }) =>
      `0 ${theme.spacing['2XS']} 0 ${theme.spacing.MD}`};
    display: inline-flex;
  `,
  PromptDescriptionWrapper: styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: ${({ theme }) => theme.spacing.MD};
  `,
  PromptDescription: styled.div`
    ${Ag.ParagraphMD}
  `,
  MusicDescription: styled.div`
    ${Ag.ParagraphMD}
    margin-bottom: ${({ theme }) => theme.spacing.LG};
    display: flex;
    align-items: flex-start;
  `,
  SEODescription: styled.div`
    ${Ag.ParagraphXS}
    color: ${({ theme }) => theme.contentColor.subdued};
    margin-bottom: ${({ theme }) => theme.spacing.LG};
    margin-bottom: ${({ theme }) => theme.spacing.LG};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    ${media.MD} {
      ${Ag.ParagraphMD}
      margin-top: ${({ theme }) => theme.spacing.XL};
    }
  `,
  PromptIcon: styled.div`
    margin-right: ${({ theme }) => theme.spacing.XS};
    position: relative;
    top: 2px;
  `,
  PromptDetails: styled.div`
    margin-bottom: ${({ theme }) => theme.spacing.LG};
  `,
  ErrorContainer: styled.div`
    ${Ag.ParagraphMD}
    background-color: ${({ theme }) => theme.backgroundColor.primary};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-top: ${({ theme }) => theme.spacing.LG};
    padding-bottom: ${({ theme }) => theme.spacing.LG};
  `,
  ErrorTitle: styled.p`
    ${Ag.ParagraphLG}
    color: ${({ theme }) => theme.contentColor.negative};
    margin-bottom: ${({ theme }) => theme.spacing.MD};
  `,
  ErrorDescription: styled.p`
    ${Ag.ParagraphMD}
    color: ${({ theme }) => theme.contentColor.negative};
  `,
  ErrorDetails: styled.p`
    ${Ag.ParagraphSM}
    color: ${({ theme }) => theme.contentColor.subdued};
    padding: ${({ theme }) => theme.spacing.SM};
  `,
};

export default S;
