import { XSquare } from 'lucide-react';
import { Tag } from '../../../../modules/labeler/interfaces';
import { ImageViwer } from '../../../../modules/media-viwer/components/ImageViwer';
import { EditButton } from '../EditButton';
import {
  MediaInfoModalBody,
  MediaInfoModalContainer,
  MediaInfoModalContent,
  MediaInfoModalContentItem,
  MediaInfoModalHeader,
  MediaInfoModalImage,
  MediaInfoModalTag,
  MediaInfoModalTagsWrapper,
  MediaInfoModalText,
  MediaInfoModalTitle,
  ModalCloseButton,
} from './styles';

type MediaInfoModalProps = {
  src: string;
  alt: string;
  title: string;
  author: string;
  date: Date;
  observation: string;
  tags: Tag[];
  onClickEditCallback: () => void;
  onCloseModalCallback: () => void;
};

export const MediaInfoModal = ({
  src,
  alt,
  title,
  author,
  date,
  observation,
  tags,
  onClickEditCallback,
  onCloseModalCallback,
}: MediaInfoModalProps) => {
  return (
    <MediaInfoModalContainer>
      <MediaInfoModalHeader>
        <MediaInfoModalTitle>{title}</MediaInfoModalTitle>
        <ModalCloseButton onClick={() => onCloseModalCallback()}>
          <XSquare />
        </ModalCloseButton>
      </MediaInfoModalHeader>
      <MediaInfoModalBody>
        <MediaInfoModalImage>
          <ImageViwer src={src} alt={alt} objectFit="contain" />
        </MediaInfoModalImage>
        <MediaInfoModalContent>
          <MediaInfoModalContentItem>
            <MediaInfoModalContentItem>
              <MediaInfoModalText>Autor:</MediaInfoModalText>
              <MediaInfoModalText>{author}</MediaInfoModalText>
            </MediaInfoModalContentItem>
            <EditButton onClickCallback={() => onClickEditCallback()} />
          </MediaInfoModalContentItem>
          <MediaInfoModalContentItem>
            <MediaInfoModalText>Data:</MediaInfoModalText>
            <MediaInfoModalText>{date.toLocaleDateString()}</MediaInfoModalText>
          </MediaInfoModalContentItem>
          <MediaInfoModalContentItem style={{ flexDirection: 'column', marginTop: '0.8rem' }}>
            <MediaInfoModalText>Observação:</MediaInfoModalText>
            <MediaInfoModalText>{observation}</MediaInfoModalText>
          </MediaInfoModalContentItem>
          <MediaInfoModalContentItem style={{ flexDirection: 'column', marginTop: '0.8rem' }}>
            <MediaInfoModalText>Tags:</MediaInfoModalText>
            <MediaInfoModalTagsWrapper>
              {tags
                .sort((tagA: Tag, tagB: Tag) => {
                  if (tagA.label < tagB.label) return -1;

                  return 1;
                })
                .map((tag) => (
                  <MediaInfoModalTag key={tag.id}>
                    <MediaInfoModalText>{tag.label}</MediaInfoModalText>
                  </MediaInfoModalTag>
                ))}
            </MediaInfoModalTagsWrapper>
          </MediaInfoModalContentItem>
        </MediaInfoModalContent>
      </MediaInfoModalBody>
    </MediaInfoModalContainer>
  );
};
