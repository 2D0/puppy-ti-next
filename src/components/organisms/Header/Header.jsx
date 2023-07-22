import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

//컴포넌트
import CheckHead from '@/components/molecules/CheckHead/CheckHead';

//스타일
import * as O from '@/components/organisms/Header/Header.style';

//이미지
import {LogoBlack, LogoWhite} from '@/assets/img/logo/index.js';
import {TransEn, TransKo} from '@/assets/img/icons/index.js';

const Header = ({location, percent, scrollHeader}) => {
  const [logoColor, setLogoColor] = useState(null); //로고 컬러 상태

  //배경 색상에 따른 로고 색상 변경 스위치
  const switchColor = () => {
    switch (location) {
      case '/check':
        return percent === 100 ? setLogoColor(LogoWhite) : setLogoColor(LogoBlack);
      case '/result':
        return setLogoColor(LogoBlack);
      default:
        return setLogoColor(LogoWhite);
    }
  };

  //배경 색상 변경 감지
  useEffect(() => {
    switchColor();
  }, [percent, location]);

  return (
    <O.HeaderCont scrollHeader={scrollHeader} location={location} percent={percent}>
      <O.HeaderInner>
        <O.HeaderLogo>
          <Link to={'/'}>
            <O.HeaderLogoImg src={logoColor}/>
          </Link>
        </O.HeaderLogo>
        <O.HeaderSwitch>
          <O.HeaderSwitchIcon>
            <O.HeaderSwitchImg src={TransEn} alt="영어"/>
          </O.HeaderSwitchIcon>
          <O.HeaderSwitchIcon>
            <O.HeaderSwitchImg src={TransKo} alt="한글"/>
          </O.HeaderSwitchIcon>
        </O.HeaderSwitch>
      </O.HeaderInner>

      {location === '/check' && <CheckHead percent={percent}/>}
    </O.HeaderCont>
  );
};

export {Header};
