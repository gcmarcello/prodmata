import { useEffect, useState, Fragment } from "react";

interface Beat {
  beat_name: string;
  beat_price: number;
  beat_video_url: string;
}

const ListBeats = () => {
  const [beats, setBeats] = useState<Beat[] | null>(null);

  const fetchBeats = async (): Promise<void> => {
    const response = await fetch("/api/beats/", { method: "GET" });
    const parseResponse = await response.json();
    setBeats(parseResponse.data);
  };

  useEffect(() => {
    fetchBeats();
  }, []);

  return (
    <Fragment>
      {beats?.map((beat, index) => (
        <div>
          <ul>
            <li>{beat.beat_name}</li>
            <li>{beat.beat_price}</li>
          </ul>
          <iframe
            width="560"
            height="315"
            src={beat.beat_video_url}
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </Fragment>
  );
};

export default ListBeats;
