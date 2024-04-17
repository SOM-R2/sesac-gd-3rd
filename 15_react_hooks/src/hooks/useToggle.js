import { useState } from 'react';

// 토글이란 두 가지 상태만 가지고 있어 서로 다른 값으로 반전시키는 기능
// useToggle hook은 컴포넌트 조건부 렌더링, 체크박스, 다크/라이트 모드 전환, 모달창 열기
// 이 토글 기능은 결국 동일한 로직으로 이루어져 있음
// 해당 로직을 반복할 필요 없이 커스텀 훅으로 만들어 사용하면 편리
export default function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggleValue = () => setValue(!value);

  // return 값은 state인 value와 해당 state를 반전시키는 toggleValue 함수
  return [value, toggleValue];
}
