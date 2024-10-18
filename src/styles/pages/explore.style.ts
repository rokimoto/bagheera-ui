import styled from 'styled-components';
import { media } from '@/styles/breakpoints';
import Ag from '@/styles/typography';

const S = {
  Content: styled.div`
    background-color: ${({ theme }) => theme.backgroundColor.primary};
    flex: 1;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  `,
  Prompts: styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing.MD};
    padding-top: ${({ theme }) => theme.spacing.LG};
    ${media.MD} {
      grid-template-columns: repeat(4, 1fr);
      gap: ${({ theme }) => theme.spacing.LG};
    }
  `,
  Title: styled.h1`
    ${Ag.HeadingLG}
    padding-top: ${({ theme }) => theme.spacing.MD};
    ${media.MD} {
      padding-top: ${({ theme }) => theme.spacing['2XL']};
    }
  `,
};

export default S;
