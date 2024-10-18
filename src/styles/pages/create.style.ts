import styled from 'styled-components';
import { media } from '@/styles/breakpoints';

const S = {
  Create: styled.div`
    background-color: ${({ theme }) => theme.backgroundColor.primary};
    flex: 1;
    display: flex;
    flex-direction: column;

    ${media.MD} {
      background-color: ${({ theme }) => theme.backgroundColor.body};
      padding-bottom: ${({ theme }) => theme.spacing['6XL']};
    }
  `,
  DesktopNav: styled.div`
    display: none;
    ${media.MD} {
      display: flex;
      padding: ${({ theme }) => `${theme.spacing.MD} ${theme.spacing.LG}`};
      align-items: center;
      justify-content: space-between;
    }
  `,
  RightNav: styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spacing.XS};
  `,
  Content: styled.div`
    background-color: ${({ theme }) => theme.backgroundColor.primary};
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;

    ${media.MD} {
      border-radius: ${({ theme }) => theme.borderRadius['3XL']};
      overflow: hidden;
      padding: 0 ${({ theme }) => theme.spacing['2XL']};
    }
  `,
};

export default S;
