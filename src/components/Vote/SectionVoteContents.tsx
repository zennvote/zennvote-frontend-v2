import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';

import UnitVotePage from '../Vote/SelectionPage/UnitVotePage';
import GrowVotePage from '../Vote/SelectionPage/GrowVotePage';
import NewVotePage from '../Vote/SelectionPage/NewVotePage';

import '../../styles/routes.scss';

const Section = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/vote/section/grow" component={GrowVotePage} />
      <Route path="/vote/section/new" component={NewVotePage} />
      <Route path="/vote/section/unit" component={UnitVotePage} />
    </Switch>
  </BrowserRouter>
);

const SectionVoteContents = () => {
  const [isRedirect, setRedirect] = useState(false);

  const RedirectUrl = () => {
    setRedirect(true);
    console.log(isRedirect);
  };

  return (
    <div className="ContentWrap">
      <div className="title">부문상 투표</div>
      <hr className="contour" />

      <div className="article">
        <b>주의사항과 안내문 </b><br />
        나중에 복붙할 뭔가 안내사항<br />
        <b>타부문과 중복투표 불가</b>
      </div>
      {/* <button type="button" className="next" onClick={RedirectUrl}>
        Next
      </button> */}
      <Section />
      {/* {isRedirect ? <Redirect exact to="/vote/section/unit" /> : null} */}
      <Link to="/vote/section/unit" className="next">NEXT
      </Link>
    </div>
  );
};

export default SectionVoteContents;
