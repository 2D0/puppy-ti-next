// TestCountContext.tsx
import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { LightPurple } from '@/style/Common.style';

interface TypeContext {
  testCount: number;
  setTestCount: React.Dispatch<React.SetStateAction<number>>;
  percent: number;
  setPercent: React.Dispatch<React.SetStateAction<number>>;
  colorChange: string;
  setColorChange: React.Dispatch<React.SetStateAction<string>>;
  useBackground: boolean;
  setUseBackground: React.Dispatch<React.SetStateAction<boolean>>;
  useShare: boolean;
  setUseShare: React.Dispatch<React.SetStateAction<boolean>>;
}

// 컨텍스트 생성
const ContextData = createContext<TypeContext | undefined>(undefined);

// 컨텍스트 프로바이더
export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [testCount, setTestCount] = useState<number>(0);
  const [percent, setPercent] = useState<number>(0); // 질문 개수 선택률
  const [colorChange, setColorChange] = useState<string>(LightPurple); //헤더 및 배경 색상

  return (
    <ContextData.Provider
      value={{
        testCount,
        percent,
        colorChange,
        setTestCount,
        setPercent,
        setColorChange,
      }}
    >
      {children}
    </ContextData.Provider>
  );
};

// 컨텍스트 사용을 위한 커스텀 훅
export const UseContextData = () => {
  const context = useContext(ContextData);
  if (!context) {
    throw new Error('UseContextData must be used within a ContextProvider');
  }
  return context;
};
