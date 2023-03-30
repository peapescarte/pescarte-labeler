import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { useContextLabelerData } from '../../modules/labeler/providers/LabelerDataProvider';
import {
  MediaThumbContainer,
  MediaThumbImage,
  StyledContainer,
  StyledList,
  StyledListMedia,
  StyledListMediaFilters,
} from './styles';

export const ListMedias = () => {
  const { medias, fetchLoading } = useContextLabelerData();
  const [testeMedias, setTesteMedias] = useState<{ id: string; urls: { raw: string } }[]>();
  const testeMediasFetch = async () => {
    fetch(
      'https://api.unsplash.com/photos/random?client_id=kbSaIZNQAhFjSOmS1Mk_LXc6N4GkmcT9JtN6R-FpgrM&count=10',
    )
      .then((res) => res.json())
      .then((res: { id: string; urls: { raw: string } }[]) => setTesteMedias(res));
  };
  useEffect(() => {
    fetch('http://localhost:3005/info').then((res) => console.log(res));
    testeMediasFetch();
  }, []);

  return testeMedias === undefined ? (
    <div>loading</div>
  ) : (
    <StyledContainer>
      <Header />
      <StyledList>
        <StyledListMediaFilters></StyledListMediaFilters>
        <StyledListMedia>
          {testeMedias.map((media) => {
            return (
              <MediaThumbContainer key={media.id}>
                <MediaThumbImage src={media.urls.raw} />
              </MediaThumbContainer>
            );
          })}
        </StyledListMedia>
      </StyledList>
    </StyledContainer>
  );
};
