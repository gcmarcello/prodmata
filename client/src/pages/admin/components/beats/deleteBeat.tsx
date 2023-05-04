import { Fragment } from "react";

type Props = {
  id: string;
  deleteBeat: Function;
};

const DeleteBeat = ({ id, deleteBeat }: Props) => {
  return (
    <Fragment>
      <button onClick={() => deleteBeat(id)}>Remover Beat</button>
    </Fragment>
  );
};

export default DeleteBeat;
