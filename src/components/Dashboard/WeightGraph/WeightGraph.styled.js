import styled from 'styled-components';

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    justify-content: start;
    align-items: baseline;
    gap: 40px;
  }

  h2 {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.4;

    @media screen and (min-width: 834px) {
      font-size: 22px;
      line-height: 1.5;
    }
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
  }
  span {
    color: ${props => props.theme.color.primary_grey};
    font-weight: 500;
    margin-left: 8px;
  }
`;

export const GraphWrapper = styled.div`
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    width: 94px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 12px;
    background-color: ${props => props.theme.color.primary_black_2};
  }

  div {
    width: 1372px;
    height: 110px;
    border-radius: 12px;
    background: ${props => props.theme.color.primary_black_2};
    margin-bottom: 8px;

    @media screen and (min-width: 834px) {
      width: 780px;
    }

    @media screen and (min-width: 1440px) {
      width: 1372px;
    }
  }
`;
