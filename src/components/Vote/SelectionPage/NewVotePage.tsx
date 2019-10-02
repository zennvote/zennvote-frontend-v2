import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import SelectVote from '../Forms/SelectVote';

import '../../../styles/routes.scss';

const NewVotePage = () => {
  const domain = process.env.REACT_APP_SERVER_URL as string;
  const [choicesList, setChoicesList] = useState<string[]>([]);
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>([]);
  const index = 1;

  const onChange = (e: CheckboxValueType[]): void => {
    const newCheckedList: CheckboxValueType[] = e;
    if (newCheckedList !== checkedList) {
      setCheckedList(newCheckedList);
    }
  };
  useEffect(() => {
    axios.get(`${domain}/api/choices/new`)
      .then(({ data }) => {
        console.log(data);
        setChoicesList(data);
      });
  }, []);
  useEffect(() => {
    console.log(checkedList);
  }, [checkedList]);

  return (
    <div className="ContentWrap">
      <div className="title">
        <b>나의 귀를 사로잡은 루키! 신인상!</b><br />
      </div>
      <hr className="contour" />

      <div className="article">
      이번 시즌에 처음 등장해서 내 머릿속에 꽂혀버린 매력적인 보이스의 소유자는 누구?
      다음 시즌에 대활약해주길 기대하는 그 프로듀서에게 투표해주세요
      *진지하게 내게 임팩트를 줬고,
      노래나 보이스가 너무 괜찮았기에 앞으로를 기대하는 사람에게 투표해주세요.
      나와 사전에 아는 사람이었다거나 하는 부차적인 이유가 고려되지 않았으면 합니다!
        <div className="voteWrap">
          <SelectVote options={choicesList} onChange={onChange} />
        </div>
      </div>
      <Link to="/vote/section/grow" className="next">다음</Link>
    </div>
  );
};

export default NewVotePage;
