// hooks/useCalculateMBTI.js
import { useMbti } from '@lib/providers';

export const useCalculateMbti = () => {
  const { mbtiScores, setMbtiScores, invalidCounts, setInvalidCounts } =
    useMbti();

  const submitAnswer = (questionType, answerType, score) => {
    if (answerType === 'center') {
      setInvalidCounts(prev => prev + 1);
    } else {
      setMbtiScores(prev => ({
        ...prev,
        [questionType]: prev[questionType] + score,
      }));
    }
  };

  // MBTI 최종 결과 및 퍼센트 계산 로직 추가 예정
  const calculateMBTIPercentage = () => {
    // 무효 선택이 모든 문항에 해당될 경우 INFP 100% 처리 로직
    if (invalidCounts === 32) {
      return { type: 'INFP', percentages: { I: 100, N: 100, F: 100, P: 100 } };
    }

    // 각 MBTI 타입별 퍼센트 계산 로직 구현
    // 예: { I: 60, E: 40, N: 70, S: 30, ... }
  };

  return { submitAnswer, calculateMBTIPercentage };
};
