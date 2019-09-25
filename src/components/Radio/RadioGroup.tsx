import React, { useState } from 'react';

import RadioButton from './RadioButton';

const RadioGroup = (props: any) => {
  const { values }: { values: string[] } = props;
  const [selected, setSelect] = useState(-1);
  const onClickEvent = (index: number) => {
    setSelect(index);
  };
  const selectionComps = values.map((value: string, index) => (
    <RadioButton selected={selected} value={value} index={index} onClick={onClickEvent} />
  ));
  return (
    <div className="RadioGroup">
      {selectionComps}
    </div>
  );
};

export default RadioGroup;
