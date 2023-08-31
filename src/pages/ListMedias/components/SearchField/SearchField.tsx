import { Search } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';
import { SearchFieldContainer, SearchFieldInput } from './styles';

type SearchFieldProps = {
  onEnterCallback: () => void;
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
};

export const SearchField = ({ onEnterCallback, searchTerm, setSearchTerm }: SearchFieldProps) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onEnterCallback();
    }
  };

  return (
    <SearchFieldContainer>
      <Search strokeWidth={1.5} />
      <SearchFieldInput
        type="text"
        maxLength={99}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Busque por nome"
        onKeyDown={handleKeyDown}
      />
    </SearchFieldContainer>
  );
};
