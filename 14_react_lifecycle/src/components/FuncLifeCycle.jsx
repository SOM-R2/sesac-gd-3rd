import { useState, useEffect } from 'react';

const MyComponent = (props) => {
  const { number } = props;
  const [text, setText] = useState('');

  // 컴포넌트 Mount시 실행
  useEffect(() => {
    console.log('함수형 컴포넌트 Mount 🔥');

    // 컴포넌트 Unmount시 실행
    // 컴포넌트 mount 시점과 unmount 시점에만 실행되는 로직의 경우
    // 하나의 useEffect에 작성 가능
    return () => {
      console.log('함수형 컴포넌트 Unmount 😢');
    };
  }, []);

  // // 컴포넌트 Unmount시 실행
  // useEffect(() => {
  //   return () => {
  //     console.log('함수형 컴포넌트 Unmount 😢');
  //   };
  // }, []);

  // 컴포넌트 Mount & Update시 실행 (number)
  useEffect(() => {
    console.log('함수형 컴포넌트 Update 🎈 (number)');
  }, [number]);

  // // 컴포넌트 Mount & Update시 실행 (text)
  useEffect(() => {
    console.log('함수형 컴포넌트 Update ✒️ (text)');
  }, [text]);

  // 의존성 배열 내부에 여러 요소 작성 가능
  // useEffect(() => {
  //   console.log('함수형 컴포넌트 Update 🙊 (number, text)');
  // }, [number, text]);

  // 컴포넌트 Mount & Update시 실행
  useEffect(() => {
    console.log('함수형 컴포넌트 Mount & Update 🤠 (의존성 배열 작성 X)');
  });

  return (
    <>
      <div>MyComponent function형 {number}</div>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>text state : {text}</div>
    </>
  );
};

export default function FuncLifeCycle() {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);

  return (
    <>
      <button onClick={() => setNumber(number + 1)}>number + 1</button>
      <button onClick={() => setVisible(!visible)}>컴포넌트 토글</button>

      {visible && <MyComponent number={number} />}
    </>
  );
}
