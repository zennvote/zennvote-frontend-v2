import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import '../../styles/routes.scss';
import './ApplyContents.scss';

class ApplyContents extends Component {
  state = {
    email: '',
    password: '',
    correctPassword: '',
    data: {},
  };

  handleEmailChange = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    const newEmail = event.currentTarget.value;
    this.setState({
      email: newEmail,
    });
  }

  handlePasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    const newPassword = event.currentTarget.value;
    this.setState({
      password: newPassword,
    });
  }

  handleCorrectPasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    const newCorrectPassword = event.currentTarget.value;
    this.setState({
      correctPassword: newCorrectPassword,
    });
  }

  postUserinfomation = async () => {
    const { email, password, data } = this.state;
    try {
      Axios.post('http://vote020.dev-shift.me:3000/api/vote', { email, password, data });
      Axios.post('http://vote020.dev-shift.me:3000/api/auth/login', { email, password });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const {
      email,
      password,
      correctPassword,
    } = this.state;
    const {
      handleEmailChange,
      handlePasswordChange,
      handleCorrectPasswordChange,
      postUserinfomation,
    } = this;
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
          <input value={email} type="text" placeholder="이메일" onChange={handleEmailChange} />
          <input value={password} type="password" placeholder="비밀번호" onChange={handlePasswordChange} />
          <input value={correctPassword} type="password" placeholder="비밀번호 확인" onChange={handleCorrectPasswordChange} />
          <div className="form-message" />
        </form>
        {
          password === correctPassword && <Link to="/quiz" className="next" onClick={postUserinfomation}>투표 등록</Link>
        }
      </div>
    );
  }
}

export default ApplyContents;
