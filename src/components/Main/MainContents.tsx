import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeMain } from '../../core/redux/Main/state';

const MainContents = () => {
  const [text, setText] = React.useState('');
  const contents = useSelector((state: any) => state.MainReducer.contents);
  const dispatch = useDispatch();
  React.useEffect(() => {
    setText(contents);
  }, [contents]);

  return (
    <div className="MainContents">
      안녕하세요 저는 MainContents에요. <br />
      필요하시다면 지우세요 ㅎㅎ. <br />
      <br />
      Hello My name is MainContents. <br />
      If you need it, delete it.
      <br />
      <br />
      <div className="MainContents__useStore">
        현재 redux 내 contents의 값 : {contents}
        <br />
        <form
          onSubmit={(e: React.FormEvent) => {
            e.preventDefault();
            dispatch(changeMain(text));
          }}
        >
          <input
            type="text"
            value={text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.currentTarget.value)}
          />
          <button type="submit">텍스트 바꾸기</button>
        </form>
      </div>
    </div>
  );
};

export default MainContents;
