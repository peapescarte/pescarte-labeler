import { Dispatch, SetStateAction, useMemo } from 'react';
import { PaginationButton, PaginationContainer, PaginationNumber } from './styles';

type PaginationProps = {
  total: number;
  pageSize: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

export const Pagination = ({ total, pageSize, page, setPage }: PaginationProps) => {
  const visibleButtons = 4;
  const numberPages = total === 0 ? 1 : Math.ceil(total / pageSize);

  const buttons = useMemo(() => {
    let numberButtons = numberPages > visibleButtons ? visibleButtons : numberPages - 1;
    if (page < 5) {
      return Array.from(Array(numberButtons)).map((x, i) => i + 2); //  +2 para pular os botões 0 e 1, o 1 é sempre exibido
    }

    numberButtons -= 1; // -1 pois teremos o ultima página sempre sendo exibida

    const arrayButtons = Array.from(Array(numberButtons))
      .map((x, i) => page + i)
      .filter((item) => item <= numberPages); // remove valores criados maiores que o numero de paginas

    // gera uma quantidade minima de botões quando a página atual está próxima da ultima
    const freezeSizeArray =
      arrayButtons.length < numberButtons
        ? Array.from(Array(visibleButtons - arrayButtons.length))
            .map((x, i) => page - (i + 1))
            .reverse()
        : [page - 1];

    arrayButtons.unshift(...freezeSizeArray);
    return arrayButtons;
  }, [page, numberPages]);

  return (
    <PaginationContainer>
      <PaginationButton active={page === 1} onClick={() => setPage(1)}>
        <PaginationNumber active={page === 1}>1</PaginationNumber>
      </PaginationButton>
      {numberPages > 5 && page > visibleButtons && (
        <PaginationNumber active={false}>...</PaginationNumber>
      )}
      {buttons.map((index) => {
        return (
          <PaginationButton active={index === page} key={index} onClick={() => setPage(index)}>
            <PaginationNumber active={index === page}>{index}</PaginationNumber>
          </PaginationButton>
        );
      })}
      {numberPages > visibleButtons + 1 && !buttons.includes(numberPages) && (
        <PaginationNumber active={false}>...</PaginationNumber>
      )}
      {numberPages > visibleButtons + 1 && !buttons.includes(numberPages) && (
        <PaginationButton active={page === numberPages} onClick={() => setPage(numberPages)}>
          <PaginationNumber active={page === numberPages}>{numberPages}</PaginationNumber>
        </PaginationButton>
      )}
    </PaginationContainer>
  );
};
