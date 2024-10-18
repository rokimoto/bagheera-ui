import styled from 'styled-components';
import Ag, { getDisplayMD } from '@/styles/typography';

const S = {
  Gems: styled.div`
    padding-top: ${({ theme }) => theme.spacing['2XL']};
  `,
  Title: styled.h1`
    ${Ag.HeadingLG}
    margin-bottom: ${({ theme }) => theme.spacing.LG};
  `,
  Boosters: styled.div`
    margin-bottom: ${({ theme }) => theme.spacing.SM};
  `,
  BoosterFeatures: styled.div`
    display: flex;
    flex-direction: column;
    margin-top: ${({ theme }) => theme.spacing.LG};
  `,
  BoosterFeature: styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spacing.XS};
  `,
  BoosterFeatureText: styled.p`
    ${Ag.ParagraphMD}
  `,
  Processing: styled.p`
    ${getDisplayMD}
    margin-top: ${({ theme }) => theme.spacing.MD}
  `,
  PendingTransaction: styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.backgroundColor.disabled};
    z-index: 5;
  `,
  Items: styled.div`
    display: grid;
    gap: ${({ theme }) => theme.spacing.SM};
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: ${({ theme }) => theme.spacing.SM};
  `,
  Item: styled.div`
    background-color: ${({ theme }) => theme.backgroundColor.body};
    border-radius: ${({ theme }) => theme.borderRadius.LG};
    padding: ${({ theme }) => theme.spacing.XL}
      ${({ theme }) => theme.spacing.MD};
  `,
  ItemTitle: styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing['2XS']};
    margin-bottom: ${({ theme }) => theme.spacing['2XS']};
  `,
  ItemTitleText: styled.h3`
    ${Ag.DisplayMD}
  `,
  Price: styled.p`
    ${Ag.HeadingXS}
    margin-bottom: ${({ theme }) => theme.spacing.LG};
  `,
  Error: styled.h2`
    ${Ag.HeadingLG}
    color: ${({ theme }) => theme.contentColor.negative};
  `,
};

export default S;
