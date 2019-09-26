import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import '../../styles/routes.scss';
import './ApplyContents.scss';

function reducer(state: any, action: any) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const ApplyContents = () => {
  const [state, dispatch] = useReducer(reducer, {
    email: '',
    password: '',
    correctPassword: '',
    data: {},
  });
  const {
    email,
    password,
    correctPassword,
    data,
  } = state;

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(e.target);
    console.log(e.target);
  };

  const postUserinfomation = async () => {
    try {
      Axios.post('http://vote020.dev-shift.me:3000/api/vote', { email, password, data });
      Axios.post('http://vote020.dev-shift.me:3000/api/auth/login', { email, password });
      console.log(state);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="ContentWrap">
      <div className="title">
        투표 등록
      </div>
      <hr className="contour" />
      <div className="article">
        이메일은 중복 투표 방지용으로, 수집되지 않습니다.<br />
        또한 닉네임과 연결지어 누구인지 확인하지도 않습니다.<br />
        해당 이메일로 음원 다운로드 링크가 제공됩니다!<br />
      </div>
      <form action="post">
        <input name="email" value={email} type="text" placeholder="이메일" onChange={onChange} />
        <input name="password" value={password} type="password" placeholder="비밀번호" onChange={onChange} />
        <input name="correctPassword" value={correctPassword} type="password" placeholder="비밀번호 확인" onChange={onChange} />
        <div className="form-message" />
      </form>
      {
        password === correctPassword && <Link to="/quiz" className="next" onClick={postUserinfomation}>투표 등록</Link>
      }
    </div>
  );
};

export default ApplyContents;
