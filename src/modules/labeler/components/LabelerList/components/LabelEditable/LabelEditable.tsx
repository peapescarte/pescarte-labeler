import { KeyboardEvent, useState } from 'react';
import { StyledInput, StyledLabel } from './styles';

export type LabelEditableProps = {
  editMode: boolean;
  label: string;
  onChangeCallback: (newLabel: string) => void;
};

/**
 * Componente de edição de uma label, quando selecionado opção de editar esse componente é exibido.
 * um input com o valor original e que da possibilidade de edita-lo
 *
 * @param boolean editMode - chave que ativo e desativa o componente
 * @param string label - texto a ser editado
 * @param function onChangeCallback - função de retorno quando a edição é concluida
 */
export const LabelEditable = ({ editMode, label, onChangeCallback }: LabelEditableProps) => {
  const [labelValue, setLabelValue] = useState(label);

  function handleKeyPress(e: KeyboardEvent<HTMLInputElement>) {
    const { key } = e;
    if (key === 'Enter') handleLabelChange(labelValue);
  }

  function handleLabelChange(newLabel: string) {
    onChangeCallback(newLabel);
    setLabelValue(label);
  }

  return editMode ? (
    <StyledInput
      autoFocus={true}
      value={labelValue}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLabelValue(event.target.value)}
      onBlur={() => handleLabelChange(labelValue)}
      onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => handleKeyPress(event)}
    />
  ) : (
    <StyledLabel title={labelValue}>{labelValue}</StyledLabel>
  );
};
