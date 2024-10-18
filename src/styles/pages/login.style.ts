import Ag from '@/styles/typography';
import styled from 'styled-components';

const S = {
  Login: styled.div`
    flex: 1;
    background-color: ${({ theme }) => theme.backgroundColor.body};
    position: relative;
    display: flex;
    flex-direction: column;
  `,
  LoginContent: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding-bottom: ${({ theme }) => theme.spacing.LG};
  `,
  Logo: styled.div`
    ${Ag.HeadingMD}
    font-weight: ${({ theme }) => theme.fontWeight.extrabold};
    padding: ${({ theme }) => theme.spacing.LG};
    text-align: center;
    cursor: pointer;
  `,
};
export default S;
