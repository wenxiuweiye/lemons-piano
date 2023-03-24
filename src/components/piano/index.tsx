import pianoArray from './pianoArray.json'
import './style.css'
import PianoGroup from './PianoGroup'
import {  useRef,CSSProperties } from 'react'

type PianoStyle = {
    style?:CSSProperties
}

export default function Piano({style}:PianoStyle) {

    const isMouseUse = useRef<boolean>(false)
    
    const { whiteKey, blackKey } = pianoArray
    const { C2GroupWhiteKey, C3GroupWhiteKey, C4GroupWhiteKey, C5GroupWhiteKey, C6GroupWhiteKey } = whiteKey
    const { C2GroupBlackKey,C3GroupBlackKey,C4GroupBlackKey,C5GroupBlackKey,C6GroupBlackKey } = blackKey
    return (
        <div className='piano-wapper' style={style?style:undefined}>
            <div className='piano-top keyStyle'></div>
            
            <div className="piano-bottom">
                <PianoGroup groupWhite={C2GroupWhiteKey} groupBlack={C2GroupBlackKey} isMouseUse={isMouseUse} ></PianoGroup>
                <PianoGroup groupWhite={C3GroupWhiteKey} groupBlack={C3GroupBlackKey} isMouseUse={isMouseUse} ></PianoGroup>
                <PianoGroup groupWhite={C4GroupWhiteKey} groupBlack={C4GroupBlackKey} isMouseUse={isMouseUse}></PianoGroup>
                <PianoGroup groupWhite={C5GroupWhiteKey} groupBlack={C5GroupBlackKey} isMouseUse={isMouseUse}></PianoGroup>
                <PianoGroup groupWhite={C6GroupWhiteKey} groupBlack={C6GroupBlackKey} isMouseUse={isMouseUse}></PianoGroup>
            </div>

        </div>
    )
}