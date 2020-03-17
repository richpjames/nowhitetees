import React from 'react';
import styled from 'styled-components';

const DjsWrap = styled.h4`
text-align: center;
margin-top: 1vh;
`;

interface Props {
  djs: string[]
}

const DJs: React.FC<Props> = (props) =>   {
  const { djs } = props;
  return (
    <DjsWrap>
      {djs.map((dj, i) => (
        <div key={i}>
          {`${dj}`} {i + 1 !== djs.length ? ` & ` : ''}
        </div>
      ))}
    </DjsWrap>
  );
}

export default DJs;
