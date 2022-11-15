import { KeyboardEvent, useState } from 'react';
import { StyledInput, StyledLabel } from './styles';

export type LabelEditableProps = {
  editMode: boolean;
  label: string;
  onChangeCallback: (newLabel: string) => void;
};

export const LabelEditable = ({ editMode, label, onChangeCallback }: LabelEditableProps) => {
  const [labelValue, setLabelValue] = useState(label);

  function handleKeyPress(e: KeyboardEvent<HTMLInputElement>) {
    const { key } = e;
    if (key === 'Enter') handleLabelChange(labelValue);
  }

  function handleLabelChange(newLabel: string) {
    onChangeCallback(newLabel);
  }

  return editMode ? (
    <StyledInput
      autoFocus={true}
      value={labelValue}
      onChangeCallback={(val: string) => setLabelValue(val)}
      onBlur={() => handleLabelChange(labelValue)}
      onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => handleKeyPress(event)}
    />
  ) : (
    <StyledLabel title={labelValue}>{labelValue}</StyledLabel>
  );
};
