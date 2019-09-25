import React, { useState } from 'react';

import RadioButton from './RadioButton';

type Prop = { values: string[], onChanged: (index: number) => void };

const RadioGroup = (props: any) => {
  const { values, onChanged }: Prop = props;
  const [selected, setSelect] = useState(-1);
  const onClickEvent = (index: number) => {
    if (selected === index) {
      return;
    }
    setSelect(index);
    onChanged(index);
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
