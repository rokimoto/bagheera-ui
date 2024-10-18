import styled from 'styled-components';
import Ag from '../typography';
import { media } from '../breakpoints';

const S = {
  AdminDashboard: styled.div`
    padding: ${({ theme }) => theme.spacing['2XL']} 0;
    color: ${({ theme }) => theme.contentColor.default};
  `,
  Title: styled.h1`
    ${Ag.DisplayMD}
    margin-bottom: ${({ theme }) => theme.spacing.MD};
  `,
  Options: styled.div`
    display: flex;
    flex-direction: column;
    ${media.MD} {
      flex-direction: row;
      gap: ${({ theme }) => theme.spacing['2XL']};
    }
  `,
  RecentContent: styled.div`
    padding: ${({ theme }) => theme.spacing.MD} 0;
  `,
};
export default S;
