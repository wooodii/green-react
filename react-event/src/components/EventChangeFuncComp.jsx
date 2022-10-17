// 함수형 컴포넌트 

import { useState } from "react";

const EventChangeFuncComp = () => {
    // set함수로 접근하기 위해서 하나의 useState에 객체로 생성
    const [message, setMessage] = useState({
        message : "안녕",
        name : "성춘향"
    });

    // onchange 함수로 바꿔서 사용하기
    // 이대로 사용하면 문자열이 통채로 들어감 > 수정 필요
    const onchange = (e) => {
        console.log(e.target.value);
        setMessage(e.target.value);
    }
    return (
        <div>
            {/** h1태그에 input으로 작성한 내용 출력하기 */}
            <h1>글을 입력하세요</h1>
            <input type="text" onChange={ onchange } />
            <p>{message.message}</p>
            <input type="text" onChange={ onchange } />
            <p>{message.name}</p>
        </div>
    )
}

export default EventChangeFuncComp;