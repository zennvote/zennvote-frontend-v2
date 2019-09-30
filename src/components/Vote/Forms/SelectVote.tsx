import * as React from 'react';
import { Checkbox } from 'antd';

import 'antd/es/checkbox/style/index.css';
import './SelectVote.scss';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';

type Props = { options: string[], onChange: (values: CheckboxValueType[]) => void };

const Main = ({ options, onChange }: Props) => (
  <Checkbox.Group options={options} onChange={onChange} />
);

export default Main;
