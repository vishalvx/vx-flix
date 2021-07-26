import React from 'react';
import { useParams } from 'react-router-dom';
//Hook
import { useWebDataFetch } from '../hooks/useWebDataFetch';
//components
import Header from './Header/Header';
import Spinner from './Spinner/Spinner';
import Grid from './Grid/Grid';
import BreadCrumb from './BreadCrumb/BreadCrumb';
import WebShowInfo from './WebShowInfo/WebShowInfo';
import WebShowInfoBar from './WebShowInfoBar/WebShowInfoBar';
import Actor from './Actor/Actor';

//Source
import {  POSTER_SIZE, IMAGE_BASE_URL } from '../Config';
import NoImage from '../image/no_image.jpg';

const WebShowDetail = () => {
  const { webId } = useParams();
  const { webShow, error, loading } = useWebDataFetch({ webId });

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <div> something Wrong .....</div>;
  }
  return (
    <>
      <Header page={'WebShowPage'} />
      <BreadCrumb movieTitle={webShow.name} page={'WebShowPage'} />
      <WebShowInfo webShow={webShow} />
      <WebShowInfoBar
        time={webShow.episode_run_time}
        episodes={webShow.number_of_episodes}
        seasons={webShow.number_of_seasons}
      />
      <Grid header="Actors">
        {webShow.actor &&
          webShow.actor.map((actor) => (
            <Actor
              key={actor.credit_id}
              charactor={actor.character}
              name={actor.name}
              imageUrl={
                actor.profile_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                  : NoImage
              }
            />
          ))}
      </Grid>
    </>
  );
};
export default WebShowDetail;
