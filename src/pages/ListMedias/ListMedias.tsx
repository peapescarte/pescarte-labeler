import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header';
import { Modal } from '../../components/Modal';
import { searchString } from '../../helpers/string';
import { option } from '../../modules/labeler/components/DropDownSearch/DropDownSearch';
import { Media, Tag } from '../../modules/labeler/interfaces';
import { Author } from '../../modules/labeler/interfaces/author';
import { useContextLabelerData } from '../../modules/labeler/providers/LabelerDataProvider';
import { FilterTag } from './components/FilterTag';
import { MediaInfoModal } from './components/MediaInfoModal';
import { MediaThumb } from './components/MediaThumb';
import { Pagination } from './components/Pagination';
import { SearchField } from './components/SearchField';
import { mediasMock } from './mocks';
import {
  ClearButtonWrapper,
  FilterButton,
  FilterTagsItensDesktop,
  FilterTagsItensMobile,
  FilterTagsWrapper,
  LoadMoreWrapper,
  MediaFiltersButtons,
  StyledContainer,
  StyledDropDownSearch,
  StyledDropDownTags,
  StyledList,
  StyledListEmpty,
  StyledListEmptyText,
  StyledListMedia,
  StyledListMediaFilters,
} from './styles';

export const ListMedias = () => {
  const { authors, allTags, medias } = useContextLabelerData();
  const [modalData, setModalData] = useState<Media>();

  const [filteredMedias, setFilteredMedias] = useState(medias);
  const [selectedAuthor, setSelectedAuthor] = useState<Author>();
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = 12;
  const navigate = useNavigate();

  const redirectToEdit = (id: string) => {
    navigate(`/labeler/edit/${id}`);
  };

  const handleOpenModal = (id: string) => {
    const findedMedia = medias.find((media) => media.id === id);
    if (findedMedia) setModalData(findedMedia);
    else setModalData(undefined);
  };

  const handleSelectAuthor = (selected: option) => {
    const authorSelected = authors.find((item) => item.id === selected.id);
    setSelectedAuthor(authorSelected);
  };

  const handleSelectTag = (selected: option) => {
    const tagSelected = allTags.find((item) => item.id === selected.id);
    if (!tagSelected) return;

    setSelectedTags((old) => [...old, tagSelected]);
  };

  const handleRemoveSelectedTag = (tagId: string) => {
    setSelectedTags((old) => old.filter((tag) => tag.id !== tagId));
  };

  const handleClearFilters = () => {
    setSearch('');
    setSelectedAuthor(undefined);
    setSelectedTags([]);
    setPage(1)
    setFilteredMedias(medias)
  };

  const filterBySearch = (media: Media) => searchString(search, media.filename);
  const filterByAuthor = (media: Media) => media.author.id === selectedAuthor?.id;
  const filterByTags = (media: Media) => {
    return selectedTags.every((selectedTag) =>
      Boolean(media.tags.find((tag) => tag.id === selectedTag.id)),
    );
  };

  const handleOnFilter = useCallback(() => {
    let filtered = JSON.parse(JSON.stringify(medias)) as Media[];
    if (search !== '') {
      filtered = filtered.filter(filterBySearch);
    }

    if (selectedAuthor) {
      filtered = filtered.filter(filterByAuthor);
    }

    if (selectedTags.length > 0) {
      filtered = filtered.filter(filterByTags);
    }

    setPage(1)
    setFilteredMedias(filtered)
  }, [medias, search, selectedAuthor, selectedTags]);

  const authorOptions: option[] = useMemo(
    () =>
      authors
        .map((item) => ({ id: item.id, value: `${item.firstName} ${item.lastName}` }))
        .sort((a, b) => {
          if (a.value > b.value) return 1;
          if (a.value < b.value) return -1;

          return 1;
        }),
    [authors],
  );

  const tagsOptions: option[] = useMemo(
    () =>
      allTags
        .filter((item) => !selectedTags.find((alreadySelected) => item.id === alreadySelected.id))
        .map((item) => ({ id: item.id, value: item.label }))
        .sort((a, b) => {
          if (a.value > b.value) return 1;
          if (a.value < b.value) return -1;

          return 1;
        }),
    [allTags, selectedTags],
  );

  const authorSelected = useMemo(
    () => (selectedAuthor ? `${selectedAuthor.firstName} ${selectedAuthor.lastName}` : ''),
    [selectedAuthor],
  );

  const sortedSelectedTags = useMemo(
    () =>
      selectedTags.sort((tagA, tagB) => {
        if (tagA.label.length < tagB.label.length) return -1;
        else if (tagA.label.length > tagB.label.length) return 1;

        return -1;
      }),
    [selectedTags],
  );

  useEffect(() => {
    setFilteredMedias(medias)
  }, [medias]);

  return medias === undefined ? (
    <div>loading</div>
  ) : (
    <StyledContainer>
      <Header />
      <StyledList>
        <StyledListMediaFilters>
          <SearchField searchTerm={search} setSearchTerm={setSearch} />
          <StyledDropDownSearch
            defaultValue={authorSelected}
            options={authorOptions}
            onSelectCallback={handleSelectAuthor}
            placeholder="Filtre por autor.."
          />
          <FilterTagsWrapper>
            <StyledDropDownTags
              defaultValue={selectedTags.length > 0 ? ' ' : undefined}
              options={tagsOptions}
              onSelectCallback={handleSelectTag}
              placeholder="Filtre por tags.."
            />
            <FilterTagsItensDesktop>
              {sortedSelectedTags.map((tag) => (
                <FilterTag
                  key={tag.id}
                  text={tag.label}
                  onClickRemove={() => handleRemoveSelectedTag(tag.id)}
                />
              ))}
            </FilterTagsItensDesktop>
          </FilterTagsWrapper>
          <MediaFiltersButtons>
            <FilterButton onClick={handleOnFilter}>Filtrar</FilterButton>
            <FilterButton onClick={handleClearFilters}>
              <ClearButtonWrapper>Limpar</ClearButtonWrapper>
            </FilterButton>
          </MediaFiltersButtons>
          <FilterTagsItensMobile>
            {sortedSelectedTags.map((tag) => (
              <FilterTag
                key={tag.id}
                text={tag.label}
                onClickRemove={() => handleRemoveSelectedTag(tag.id)}
              />
            ))}
          </FilterTagsItensMobile>
        </StyledListMediaFilters>
        {filteredMedias.length > 0 ? 
          <StyledListMedia>
            {filteredMedias.slice(pageSize * (page - 1), pageSize * page).map((media) => {
              return (
                <MediaThumb
                  key={media.id}
                  id={media.id}
                  url={media.link}
                  alt={media.altText}
                  author={`${media.author.firstName} ${media.author.lastName}`}
                  onClickEditCallback={(id) => redirectToEdit(id)}
                  onClickCallback={(id) => handleOpenModal(id)}
                />
              );
            })}
          </StyledListMedia> : 
          <StyledListEmpty>
            <StyledListEmptyText>Não foram encontradas medias para essa combinação de filtro</StyledListEmptyText>
          </StyledListEmpty>
        }
        <LoadMoreWrapper>
          <Pagination
            total={filteredMedias.length}
            pageSize={pageSize}
            page={page}
            setPage={setPage}
          />
        </LoadMoreWrapper>
      </StyledList>
      <Footer />
      <Modal
        id="react-modal-media-info"
        isOpen={!!modalData}
        onClickOutSide={() => setModalData(undefined)}
      >
        {modalData && (
          <MediaInfoModal
            src={modalData.link}
            alt={modalData.altText}
            title={modalData.filename}
            author={`${modalData.author.firstName} ${modalData.author.lastName}`}
            date={new Date(modalData.filedate)}
            observation={modalData.observation}
            tags={modalData.tags}
            onClickEditCallback={() => redirectToEdit(modalData.id)}
            onCloseModalCallback={() => setModalData(undefined)}
          />
        )}
      </Modal>
    </StyledContainer>
  );
};
