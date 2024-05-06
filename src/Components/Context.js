import { createContext, useState, useEffect } from "react";

export const gameContext = createContext(null)

export default function TicTacToeContext({ children }) {
     const [xTurn, setXTurn] = useState(true)
    const [cells, setCells] = useState([{box: '', id:0}, {box: '', id:1}, {box: '', id:2},
        {box: '', id:3}, {box: '', id:4}, {box: '', id:5},
    {box: '', id:6},{box: '', id:7},{box: '', id:8}
    ])   
    const [oscore, setOScore] = useState(0)
    const [xScore, setXScore] = useState(0)
    
     function selectCell(cell, num) {
        if (cell.box == '') {
            setXTurn(oldValue => !oldValue)
            const cellCopy = [...cells]
            cellCopy[num].box = xTurn ? 'X' : 'O'
            setCells(cellCopy)
        }
    }
      const XwinningCombination = cells[0].box == 'X' && cells[1].box == 'X' && cells[2].box == 'X' ||
        cells[3].box == 'X' && cells[4].box == 'X' && cells[5].box == 'X' ||
        cells[6].box == 'X' && cells[7].box == 'X' && cells[8].box == 'X' ||
        cells[0].box == 'X' && cells[3].box == 'X' && cells[6].box == 'X' ||
        cells[1].box == 'X' && cells[4].box == 'X' && cells[7].box == 'X' ||
        cells[2].box == 'X' && cells[5].box == 'X' && cells[8].box == 'X' ||
        cells[0].box == 'X' && cells[4].box == 'X' && cells[8].box == 'X' ||
        cells[2].box == 'X' && cells[4].box == 'X' && cells[6].box == 'X'
      const OwinningCombination = 
    (cells[0].box === 'O' && cells[1].box === 'O' && cells[2].box === 'O') ||
    (cells[3].box === 'O' && cells[4].box === 'O' && cells[5].box === 'O') ||
    (cells[6].box === 'O' && cells[7].box === 'O' && cells[8].box === 'O') ||
    (cells[0].box === 'O' && cells[3].box === 'O' && cells[6].box === 'O') ||
    (cells[1].box === 'O' && cells[4].box === 'O' && cells[7].box === 'O') ||
    (cells[2].box === 'O' && cells[5].box === 'O' && cells[8].box === 'O') ||
    (cells[0].box === 'O' && cells[4].box === 'O' && cells[8].box === 'O') ||
        (cells[2].box === 'O' && cells[4].box === 'O' && cells[6].box === 'O');
    
     const allChecked = cells.every(data => {
    return data.box != ''    
     })
     useEffect(() => {
        if (OwinningCombination) { 
            setOScore(oscore + 1)
        } else if (XwinningCombination) {       
            setXScore(xScore + 1)  
        }
     }, [cells])
    function clearAll() {
    setCells([{box: '', id:0}, {box: '', id:1}, {box: '', id:2},
        {box: '', id:3}, {box: '', id:4}, {box: '', id:5},
    {box: '', id:6},{box: '', id:7},{box: '', id:8}
   ])    
    }
    function clearScore() {
        setOScore(0)
    setXScore(0)    
    }
    return <gameContext.Provider value={{
        xTurn, setXTurn,setOScore,setXScore,selectCell,OwinningCombination,
        cells, setCells, oscore, xScore, XwinningCombination, allChecked,
        clearAll, clearScore
    }}>{children}</gameContext.Provider>    
}