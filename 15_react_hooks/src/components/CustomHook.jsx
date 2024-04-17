import useToggle from '../hooks/useToggle';
import useTitle from './../hooks/useTitle';

export default function CustomHook() {
  // 여기서 두 번째 구조분해할당 요소인 setIsShow는 state의 setter 함수가 아니라
  // useToggle hook에서 선언한 원래 isShow state의 값을 반전시키는 함수
  const [isShow, setIsShow] = useToggle();
  // const [isShow, setIsShowState] = useState(false);
  // const setIsShow = () => {setIsShowState(!isShow)}

  const [isQnaOpen, setIsQnaOpen] = useToggle();
  // const [isQnaOpen, setIsQnaOpenState] = ueState(false)
  // const setIsQnaOpen = () => {setIsQnaOpenState(!isQnaOpen)}

  // useTitle 커스텀 훅 사용
  useTitle('커스텀 훅 사용');

  return (
    <>
      <h1>커스텀 훅 사용</h1>
      <button onClick={setIsShow}>useToggle hook 사용하기</button>
      {isShow && <div>안녕!</div>}

      <div onClick={setIsQnaOpen}>
        Q. 리액트에서 cumtom hook 만들 수 있나요?
      </div>
      {isQnaOpen && <div>A. 네 가능합니다~!</div>}
    </>
  );
}
