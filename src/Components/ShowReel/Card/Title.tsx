import React from 'react';
import styled from 'styled-components';

const TitleText = styled.h3`
  text-align: center;
  margin-top: 2.5vh;
  margin-bottom: 2.5vh;
  color: #fffffb;
`;
const TitleWrap = styled.div`
  background-color: #336699;
`;

interface Props{
  title: string
}
const Title: React.FC<Props>=  (props: Props)  => {
  const { title } = props;

  return (
    <TitleWrap>
      <TitleText className="Title-Wrap">{title}</TitleText>
    </TitleWrap>
  );
}

export default Title;
