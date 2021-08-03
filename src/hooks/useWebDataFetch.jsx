import { useState, useEffect } from 'react';

//Source
import API from '../API';

//Helpers
import { getFromSessionStorage } from '../Helper';

export const useWebDataFetch = ({ webId }) => {
  const [webShow, setWebShow] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchWebData = async () => {
      try {
        setLoading(true);
        setError(false);

        const webShowResult = await API.fetchWebShow(webId);
        const credits = await API.fetchWebCredits(webId);

        // get directors from credits
        const directors = credits.crew.filter(
          (member) => member.job === 'Director',
        );

        setWebShow({
          ...webShowResult,
          actor: credits.cast,
          directors: directors,
        });
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    //to get Webshow Data in session Storage
    const sessionState = getFromSessionStorage(webId);
    if (sessionState) {
      setWebShow(sessionState);
      setLoading(false);
      return;
    }

    fetchWebData();
  }, [webId]);

  //to Store Webshow Data in session Storage
  useEffect(() => {
    sessionStorage.setItem(webId, JSON.stringify(webShow));
  }, [webShow]);
  return { webShow, error, loading };
};
