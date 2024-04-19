import classNames from 'classname';
import style from '../styles/moduleCss.module.css';

export default function ModuleCss() {
    console.log(style);
    return (
        <>
            <h2>module css 사용 </h2>
            <div className="box">
                일반 CSS의 단점 (다른 컴포넌트에서 import한 css도 반영됨)
            </div>

            <div className={style.container}>moduleCss.module.css 사용</div>

            <div>여러 클래스 지정하는 방법</div>
            <div className={`${style.first} ${style.second}`}>
                방법 1. 템플릿 리터럴 사용
            </div>
            <div className={[style.first, style.second].join(' ')}>
                방법 2. join 메서드 사용(배열을 하나의 문자열로 합쳐주는 메서드)
            </div>
            <div className={classNames(style.first, style.second)}>
                방법 3. classname 모듈 사용
            </div>
        </>
    );
}
