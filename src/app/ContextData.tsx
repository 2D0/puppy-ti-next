// 'use client';
// import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
// import axios from 'axios';
//
// interface TypeContext {
//   nameData: string | undefined;
//   setNameData: React.Dispatch<React.SetStateAction<string | undefined>>;
//   testCount: number | undefined;
//   setTestCount: React.Dispatch<React.SetStateAction<number | undefined>>;
//   percent: number | undefined;
//   setPercent: React.Dispatch<React.SetStateAction<number | undefined>>;
//   colorChange: string | undefined;
//   setColorChange: React.Dispatch<React.SetStateAction<string | undefined>>;
//   useBackground: boolean | undefined;
//   setUseBackground: React.Dispatch<React.SetStateAction<boolean | undefined>>;
//   useShare: boolean | undefined;
//   setUseShare: React.Dispatch<React.SetStateAction<boolean | undefined>>;
// }
//
// // 컨텍스트 생성
// const ContextData = createContext<TypeContext | undefined>(undefined);
//
// // 컨텍스트 프로바이더
// export const ContextProvider = ({ children }: { children: ReactNode }) => {
//   const [testCount, setTestCount] = useState<number | undefined>(undefined);
//   const [nameData, setNameData] = useState<string | undefined>(undefined);
//   const [percent, setPercent] = useState<number | undefined>(undefined); // 질문 개수 선택률
//   const [colorChange, setColorChange] = useState<string | undefined>(undefined); //헤더 및 배경 색상
//
//   //참여 횟수 디비에서 가져오기
//   const getCountData = async () => {
//     await axios({
//       url: '/main-data',
//       method: 'GET',
//     })
//       .then(response => {
//         setTestCount(response.data.count);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };
//
//   useEffect(() => {
//     getCountData();
//   }, []);
//
//   return (
//     <ContextData.Provider
//       value={{
//         nameData,
//         testCount,
//         percent,
//         colorChange,
//         setNameData,
//         setTestCount,
//         setPercent,
//         setColorChange,
//       }}
//     >
//       {children}
//     </ContextData.Provider>
//   );
// };
//
// // 컨텍스트 사용을 위한 커스텀 훅
// export const UseContextData = () => {
//   const context = useContext(ContextData);
//
//   if (!context) {
//     console.log('UseContextData must be used within a ContextProvider');
//   }
//
//   return context;
// };
