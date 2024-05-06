import { useContext } from "react"
import { gameContext } from "./Context"

export default function Design() {
   const {selectCell,XwinningCombination,
       cells, oscore, xScore, OwinningCombination, allChecked,
        clearAll, clearScore } = useContext(gameContext)
    
    const cellLayout = cells.map((data, index) => {
        return <div onClick={()=>selectCell(data, index)} key={index} style={{
            width: '50px',textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center',
            height: '50px', border: '1px solid'
        }}>{data.box}</div>
    })    

    return <main style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',
        backgroundColor: allChecked || XwinningCombination || OwinningCombination ? 'grey' : '',
        flexDirection:'column'
    }}><div style={{
        display: 'grid', gap: '5px',opacity: allChecked || XwinningCombination || OwinningCombination?'0.5': '',
        gridTemplateColumns: '50px 50px 50px',
        }}>{cellLayout}</div>{XwinningCombination ?
            <div style={{ height: '100vh', width: '90vw', position: 'absolute', top: '20%' }}>
                <h1 style={{ textAlign: 'center' }}>X wins!</h1>
                <button onClick={clearAll} style={{ width: '100%' }} className="btn btn-dark">Play again</button></div> : 
            OwinningCombination ? <div style={{ height: '100vh', width: '90vw', position: 'absolute', top: '20%' }}>
                <h1 style={{ textAlign: 'center' }}>O wins!</h1>
                <button onClick={clearAll} style={{ width: '100%' }} className="btn btn-dark">Play again</button></div> :
                allChecked ? <div style={{ height: '100vh', width: '90vw', position: 'absolute', top: '20%' }}>
                <h1 style={{ textAlign: 'center' }}>It is a draw!!</h1>
                    <button onClick={clearAll} style={{ width: '100%' }}
                        className="btn btn-dark">Play again</button></div> : ''}
        <div>
            <span>Scoreboard - </span>
            <p>X : {xScore}</p>
            <p>O : {oscore}</p>
            <button onClick={clearScore} className="btn btn-secondary">Reset scoreboard</button>
        </div></main>    
}