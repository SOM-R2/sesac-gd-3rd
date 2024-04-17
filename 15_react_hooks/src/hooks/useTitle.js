import { useEffect } from 'react';

export default function useTitle(title) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    return () => (document.title = prevTitle);
  }, [title]);
}

// useTitle은 title이라는 매개변수를 받는 커스텀 훅
// 새로운 컴포넌트가 mount되고, 해당 컴포넌트에서 useTitle hook을 호출하는 동시에
// 변경하고자 하는 title을 매개변수로 전달받아서 해당 title로 document.title의 컨텐트를 바꿈
// useEffect 내부에 title이 변경되면 document.title을 매개변수로 받은 값으로 변경
// 사용한 컴포넌트가 unmount 되면 원래 title 값으로 되돌려 놓음 (cleanup 함수)
