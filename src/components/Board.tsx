import { BoardShape } from "../types/types";
import Cell from "./Cell";


interface Props {
    currentBoard: BoardShape;
}

const Board = ({ currentBoard }: Props) => {
    return (
        <div className="board">
        {currentBoard.map((row,rowIndex)=>(
            <div className="row" key={`${rowIndex}`}>
                {row.map((cell,colIndex)=>(
                    <Cell key={`${rowIndex}-${colIndex}`} type={cell}/>
                ))}
            </div>
        ))}
        </div>
    )
}

export default Board