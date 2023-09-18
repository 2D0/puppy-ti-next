'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import StyledComponentsRegistry from '@/../lib/registry';

//스타일
import GlobalStyle from '@/style/Global.style';
import { Black, LightPurple, White, WhitePurple } from '@/style/Common.style';
import { Body, Main } from './layout.style';

//폰트
import spoqaFont from '@/app/api/fonts/FontSpoca';

//컴포넌트
import { Header, Footer, Background } from '@/components/organisms/index';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname(); //현재 주소
  const [scroll, setScroll] = useState<boolean>(false); //스크롤 감지
  const [percent, setPercent] = useState<number>(0);
  const [colorChange, setColorChange] = useState<string>(LightPurple);
  const [logoChange, setLogoChange] = useState<string>(White);
  const [waveBackground, setWaveBackground] = useState<boolean>(true);

  //props 데이터
  const headerData = {
    pathName: `${pathName}`,
    scroll: scroll,
    percent: percent,
    colorChange: colorChange,
    logoChange: logoChange,
  };

  useEffect(() => {
    switch (pathName) {
      case '/':
      case '/team-members':
      case '/open-source':
      case '/inquiry':
        setColorChange(LightPurple);
        setLogoChange(White);
        setWaveBackground(true);
        break;
      case '/result':
        setColorChange(WhitePurple);
        setLogoChange(Black);
        setWaveBackground(false);
        break;
      case '/check':
        setColorChange(percent === 100 ? Black : WhitePurple);
        setLogoChange(Black);
        setWaveBackground(false);
        break;
      default:
        setColorChange(LightPurple);
        setLogoChange(White);
        setWaveBackground(true);
    }
  }, [pathName]);

  return (
    <StyledComponentsRegistry>
      <GlobalStyle />

      <html lang="en" className={spoqaFont.className}>
        <head />
        <Body>
          <Header headerData={headerData} />
          <Main>{children}</Main>
          <Footer />

          {waveBackground && <Background />}
        </Body>
      </html>
    </StyledComponentsRegistry>
  );
};
export default Layout;
