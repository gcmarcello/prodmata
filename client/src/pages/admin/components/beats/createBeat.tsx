import { useForm, SubmitHandler } from "react-hook-form";
import { Fragment } from "react";

type Inputs = {
  beatName: string;
  beatVideo: string;
  beatImage: string;
  beatPrice: number;
};

type Props = {
  beats: Array<Object>;
  setBeats: Function;
};

const CreateBeat = ({ beats, setBeats }: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(JSON.stringify(data));
    const response = await fetch("/api/beats/", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });
    const parseResponse = await response.json();
    setBeats([
      ...beats,
      {
        beat_id: parseResponse.data.beat_id,
        beat_name: data.beatName,
        beat_price: data.beatPrice,
        beat_video_url: data.beatVideo,
      },
    ]);
  };

  return (
    <Fragment>
      <h1>Criar Novo Beat</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          defaultValue=""
          {...register("beatName")}
          placeholder="Nome do Beat"
        />
        <input
          defaultValue=""
          {...register("beatVideo")}
          placeholder="Vídeo do Beat"
        />
        <input
          defaultValue=""
          {...register("beatImage")}
          placeholder="Imagem do Beat"
        />
        <input
          defaultValue=""
          {...register("beatPrice")}
          placeholder="Preço do Beat"
        />
        <button type="submit">Enviar</button>
      </form>
    </Fragment>
  );
};

export default CreateBeat;
