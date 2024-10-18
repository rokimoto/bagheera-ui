import styled, { css } from 'styled-components';
import Ag from '@/styles/typography';
import { media } from '@/styles/breakpoints';

const box = css`
  background: ${({ theme }) => theme.backgroundColor.body};
  border-radius: ${({ theme }) => theme.borderRadius.XL};
`;

const winner = css`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
`;

const title = css`
  ${Ag.HeadingLG}
  padding-top: ${({ theme }) => theme.spacing.LG};
  margin-bottom: ${({ theme }) => theme.spacing.LG};

  ${media.MD} {
    padding-top: ${({ theme }) => theme.spacing['2XL']};
  }
`;

const S = {
  Content: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
  `,
  CurrentWrapper: styled.div`
    background-color: ${({ theme }) => theme.backgroundColor.primary};
    padding-bottom: ${({ theme }) => theme.spacing['2XL']};

    ${media.MD} {
      padding-bottom: ${({ theme }) => theme.spacing['5XL']};
    }
  `,
  Title: styled.h1`
    ${title}
  `,
  IndexTitle: styled.h1`
    ${title}
    ${media.MD} {
      text-align: center;
      margin-bottom: ${({ theme }) => theme.spacing.XL};
    }
  `,
  Subtitle: styled.h2`
    ${Ag.HeadingMD}
    padding-top: ${({ theme }) => theme.spacing['2XL']};
    margin-bottom: ${({ theme }) => theme.spacing.LG};
  `,
  Description: styled.div`
    ${Ag.ParagraphMD};
    margin-bottom: ${({ theme }) => theme.spacing.LG};
  `,
  Options: styled.div`
    display: flex;

    gap: ${({ theme }) => theme.spacing.LG};
  `,
  Bold: styled.span`
    ${Ag.Bold}
    color: ${({ theme }) => theme.contentColor.default};
  `,
  PastWrapper: styled.div`
    background-color: ${({ theme }) => theme.backgroundColor.body};
    padding-bottom: ${({ theme }) => theme.spacing['2XL']};

    ${media.MD} {
      padding-bottom: ${({ theme }) => theme.spacing['6XL']};
    }
  `,
  Past: styled.div`
    padding-top: ${({ theme }) => theme.spacing.XL};
    padding-bottom: ${({ theme }) => theme.spacing['2XL']};

    ${media.MD} {
      padding-top: ${({ theme }) => theme.spacing.MD};
      padding-bottom: 0;
    }
  `,
  List: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.MD};
  `,
  ListItem: styled.div`
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing.SM};
    width: 100%;
    box-sizing: border-box;
    padding: ${({ theme }) => `${theme.spacing.MD} ${theme.spacing.SM}`};
    border-radius: ${({ theme }) => theme.borderRadius.XL};
    background-color: ${({ theme }) => theme.backgroundColor.secondary};

    ${media.MD} {
      gap: ${({ theme }) => theme.spacing.MD};
      padding: ${({ theme }) => theme.spacing.LG};
    }
  `,
  ListItemMedia: styled.img`
    width: 120px;
    height: 120px;
    border-radius: ${({ theme }) => theme.borderRadius.XL};
    object-fit: cover;
    object-position: contain;

    ${media.MD} {
      width: 144px;
      height: 144px;
    }
  `,
  ListItemContent: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  ListItemDate: styled.p`
    ${Ag.ParagraphXS}
    ${Ag.Bold}
    margin-bottom: ${({ theme }) => theme.spacing['2XS']};
  `,
  ListItemTitle: styled.h5`
    ${Ag.HeadingXS}
    margin-bottom: ${({ theme }) => theme.spacing['2XS']};

    ${media.MD} {
      ${Ag.HeadingSM}
    }
  `,
  ListItemDescription: styled.p`
    ${Ag.ParagraphXS}
    color: ${({ theme }) => theme.contentColor.moreSubdued};
    margin-bottom: ${({ theme }) => theme.spacing.SM};

    ${media.MD} {
      ${Ag.ParagraphSM}
      margin-bottom: ${({ theme }) => theme.spacing.MD};
      color: ${({ theme }) => theme.contentColor.moreSubdued};
    }
  `,
  ParticipateContent: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.backgroundColor.primary};
    padding-bottom: ${({ theme }) => theme.spacing['2XL']};

    ${media.MD} {
      padding-bottom: ${({ theme }) => theme.spacing['5XL']};
    }
  `,
  ParticipateBox: styled.div`
    ${box}
    padding: ${({ theme }) => theme.spacing.XL};
    margin-bottom: ${({ theme }) => theme.spacing.MD};

    ${media.MD} {
      margin-bottom: 0;
    }
  `,
  ParticipateTitle: styled.h2`
    ${Ag.HeadingMD};
    margin-bottom: ${({ theme }) => theme.spacing['2XS']};
  `,
  ParticipateClosing: styled.h3`
    ${Ag.HeadingSM};
  `,
  ParticipateSubdued: styled.span`
    color: ${({ theme }) => theme.contentColor.moreSubdued};

    ${media.MD} {
      color: ${({ theme }) => theme.contentColor.moreSubdued};
    }
  `,
  ParticipateDescription: styled.p`
    ${Ag.ParagraphMD}
    padding: ${({ theme }) => theme.spacing.LG} 0;
  `,
  ParticipateButtons: styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.MD};

    ${media.MD} {
      flex-direction: row;
    }
  `,
  SubmittedEntry: styled.div`
    margin-bottom: ${({ theme }) => theme.spacing.LG};
  `,
  SubmittedEntryTitle: styled.h3`
    ${Ag.HeadingXS}
    margin-top: ${({ theme }) => theme.spacing.LG};
    margin-bottom: ${({ theme }) => theme.spacing.MD};
  `,
  SubmittedVideo: styled.video`
    margin-bottom: ${({ theme }) => theme.spacing.SM};
    ${media.MD} {
      max-width: 300px;
    }
  `,
  SubmittedPrompt: styled.p`
    ${Ag.ParagraphMD}
  `,
  Prizes: styled.div`
    ${box}
    padding: ${({ theme }) => theme.spacing.XL};
    margin-bottom: ${({ theme }) => theme.spacing['2XL']};

    ${media.MD} {
      margin-bottom: 0;
    }
  `,
  PrizesTitle: styled.h3`
    ${Ag.HeadingMD}
    margin-bottom: ${({ theme }) => theme.spacing.LG};
  `,
  PrizesList: styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.XS};
  `,
  PrizeItem: styled.p`
    ${Ag.ParagraphMD}
  `,
  CriteriaTitle: styled.h3`
    ${Ag.HeadingSM}
    margin-bottom: ${({ theme }) => theme.spacing.LG};
  `,
  CriteriaDescription: styled.p`
    ${Ag.ParagraphMD}
  `,
  WinnerContent: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-bottom: ${({ theme }) => theme.spacing['4XL']};

    ${media.MD} {
      padding-bottom: ${({ theme }) => theme.spacing['6XL']};
    }
  `,
  WinnerBox: styled.div`
    ${box}
    padding: ${({ theme }) => theme.spacing.XL};
  `,
  Winners: styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.MD};
    ${media.MD} {
      flex-direction: row;
      gap: ${({ theme }) => theme.spacing.XL};
      align-items: flex-end;
    }
  `,
  First: styled.div`
    ${winner}

    ${media.MD} {
      flex: 512;
    }
  `,
  Second: styled.div`
    ${winner}
    ${media.MD} {
      flex: 413;
    }
  `,
  Third: styled.div`
    ${winner}
    ${media.MD} {
      flex: 312;
    }
  `,
  Video: styled.video`
    object-fit: cover;
    height: 100%;
    width: 100%;
    cursor: pointer;
  `,
  Tag: styled.div`
    position: absolute;
    top: ${({ theme }) => theme.spacing.XS};
    left: ${({ theme }) => theme.spacing.XS};
  `,
  Sample: styled.img`
    width: 100%;
  `,
  SpinnerWrapper: styled.div`
    display: flex;
    justify-content: center;
  `,
};

export default S;
