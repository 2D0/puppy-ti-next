import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';

//스타일
import * as O from '@/components/organisms/Background/Background.style';

//이미지
import {Wave} from '@/assets/img/background/index.js';

const Background = () => {
  const [purpleBg, setPurpleBg] = useState(true);
  const locate = useLocation();
  const {pathname} = locate;

  useEffect(() => {
    if (pathname === '/check') setPurpleBg(false);
  }, [pathname]);
  return (
    <O.BackCont purpleBg={purpleBg}>
      <O.ContentsBack/>
      <O.BackImgWave src={Wave}/>
    </O.BackCont>
  );
};
export default Background;
