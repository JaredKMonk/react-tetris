import { CellOptions } from "../types/types";

interface Props {
    type: CellOptions;
}

const Cell = ({ type }: Props) => {
    return <div className={`cell ${type}`} />
}

export default Cell