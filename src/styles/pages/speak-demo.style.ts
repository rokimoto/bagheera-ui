import styled from 'styled-components';
import { media } from '@/styles/breakpoints';
import Ag from '@/styles/typography';

const S = {
  Landing: styled.div`
    background-color: ${({ theme }) => theme.backgroundColor.body};
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
  `,
  Header: styled.div`
    text-align: center;
    padding: ${({ theme }) => theme.spacing['4XL']} 0;

    ${media.MD} {
      padding: ${({ theme }) => theme.spacing['6XL']} 0;
    }
  `,
  Title: styled.h1`
    ${Ag.DisplayXL}
    margin-bottom: ${({ theme }) => theme.spacing.LG};
  `,
  Text: styled.div`
    ${Ag.ParagraphLG}
    margin-bottom: ${({ theme }) => theme.spacing.LG};
  `,
  PromptText: styled.div`
    ${Ag.HeadingSM}
  `,
  Center: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: ${({ theme }) => theme.spacing.MD};
  `,
};

export default S;
