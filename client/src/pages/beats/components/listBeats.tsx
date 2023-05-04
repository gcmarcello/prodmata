import { useEffect, useState, Fragment } from "react";
import DeleteBeat from "../../admin/components/beats/deleteBeat";
import CreateBeat from "../../admin/components/beats/createBeat";

interface Beat {
  beat_name: string;
  beat_price: number;
  beat_video_url: string;
  beat_id: string;
}

const ListBeats = () => {
  const [beats, setBeats] = useState<Beat[] | any>(null);

  const fetchBeats = async (): Promise<void> => {
    const response = await fetch("/api/beats/", { method: "GET" });
    const parseResponse = await response.json();
    console.log(parseResponse.message);
    console.log(parseResponse);
    setBeats(parseResponse.data);
  };

  const deleteBeat = async (id: string): Promise<void> => {
    const response = await fetch(`/api/beats/${id}`, { method: "DELETE" });
    const parseResponse = await response.json();
    setBeats(beats.filter((beat: any) => beat.beat_id !== id));
    console.log(parseResponse.message);
  };

  useEffect(() => {
    fetchBeats();
  }, []);

  return (
    <Fragment>
      <CreateBeat beats={beats} setBeats={setBeats} />
      {beats?.map((beat: Beat, index: string) => (
        <div key={index}>
          <ul>
            <li>{beat.beat_name}</li>
            <li>{beat.beat_price}</li>
            <li>
              <DeleteBeat id={beat.beat_id} deleteBeat={deleteBeat} />
            </li>
          </ul>
          {beat.beat_video_url && (
            <iframe
              width="560"
              height="315"
              src={beat.beat_video_url}
              title="YouTube video player"
              allowFullScreen
            ></iframe>
          )}
        </div>
      ))}
    </Fragment>
  );
};

export default ListBeats;
