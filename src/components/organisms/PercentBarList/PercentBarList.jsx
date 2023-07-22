import React from "react";

//스타일
import * as O from '@/components/organisms/PercentBarList/PercentBarList.style';

//컴포넌트
import PercentBar from '@/components/molecules/PercentBar/PercentBar';


const PercentBarList = () => {
  return (
    <O.ResultPercentList percent={percent}>
      <O.ResultPercentInfo>
        <O.ResultPercentNames resultType={percent >= 100 - percent}>
          <O.ResultPercentName>{typeLeft}</O.ResultPercentName>
          <O.ResultPercentNum>{percent}%</O.ResultPercentNum>
        </O.ResultPercentNames>
        <O.ResultPercentNames resultType={percent < 100 - percent}>
          <O.ResultPercentNum>{100 - percent}%</O.ResultPercentNum>
          <O.ResultPercentName>{typeRight}</O.ResultPercentName>
        </O.ResultPercentNames>
      </O.ResultPercentInfo>
      <PercentBar/>
    </O.ResultPercentList>
  )
}
export default PercentBarList;