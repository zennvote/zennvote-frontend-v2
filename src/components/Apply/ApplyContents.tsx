import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import '../../styles/routes.scss';
import './ApplyContents.scss';

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

require('dotenv').config();

const ApplyContents = () => {
  const domain = process.env.REACT_APP_SERVER_URL;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [correctPassword, setCorrectPassword] = useState('');
  const [islogin, setloginChecker] = useState(false);
  const [isOverlapEmail, setOverlapEmail] = useState(false);
  const emailRegExp = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;

  const loginChecker = () => {
    const isSame = password === correctPassword;
    if (email.match(emailRegExp)) {
      if (password.length >= 5) {
        if (isSame !== islogin) {
          setloginChecker(isSame);
        }
      }
    }
  };
  const onChangeEmail = (e: ChangeEvent) => {
    setEmail(e.target.value);
    setOverlapEmail(false);
  };
  const onChangePassword = (e: ChangeEvent) => {
    setPassword(e.target.value);
    loginChecker();
  };
  const onChangecorrectPassword = (e: ChangeEvent) => {
    setCorrectPassword(e.target.value);
    loginChecker();
  };
  const postUserinfomation = async () => {
    try {
      const voteRequest = await Axios.post(`${domain}/api/vote`, { email, password, data: {} });
      const loginRequest = await Axios.post(`${domain}/api/auth/login`, { email, password });
    } catch (error) {
      console.error(error.response.status);
    }
  };
  const matchCorrectEmail = async () => {
    try {
      const errorRequest = await Axios.post(`${domain}/api/vote`, { email });
      setOverlapEmail(false);
    } catch (error) {
      if (error.response.status === 400) {
        setOverlapEmail(true);
      }
    }
  };

  useEffect(loginChecker, [password, correctPassword, email]);
  useEffect(() => {
    if (email.match(emailRegExp)) {
      matchCorrectEmail();
    }
  }, [email]);

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
        <input className={((email === '' || email.match(emailRegExp)) && (email === '' || !isOverlapEmail) ? 'email' : 'error')} type="email" placeholder="이메일" onChange={onChangeEmail} />
        {(email !== '' && !email.match(emailRegExp)) && '이메일 형식을 지켜주세욤'}
        {isOverlapEmail === true && '호곡 이미 있는 이메일이에욤'}
        <input className={(password !== '' && password.length < 5) ? 'error' : 'password'} value={password} type="password" placeholder="비밀번호" onChange={onChangePassword} />
        {(password !== '' && password.length < 5) && '비밀번호는 5자리 이상으로 해주세욤'}
        <input className={(password === correctPassword) ? 'correctPassword' : 'error'} value={correctPassword} type="password" placeholder="비밀번호 확인" onChange={onChangecorrectPassword} minLength={5} />
        <div className="form-message" />
        {((password !== '' || correctPassword !== '') && password !== correctPassword) && '비밀번호와 일치안하는대용'}
      </form>
      <Link to={isOverlapEmail ? '/apply' : '/quiz'} className={islogin ? 'next' : 'disabled-link'} onClick={postUserinfomation}> 투표 등록</Link>
    </div>
  );
};

export default ApplyContents;
