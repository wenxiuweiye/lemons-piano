import {  MouseEventHandler, MutableRefObject, useCallback, useMemo } from "react";
import { useTone } from "../../../hooks/useTone";

interface PianoGroupProps {
    groupWhite: GroupKey[],
    groupBlack: GroupKey[],
    isMouseUse:MutableRefObject<boolean>,
}
type GroupKey = {
    note: string;
}

export default function PianoGroup({ groupWhite, groupBlack,isMouseUse }: PianoGroupProps) {

    const { playNote } = useTone()
    let distance: string | undefined
    
    const mDowm: MouseEventHandler<HTMLDivElement> = useCallback(async(e) => {
        e.preventDefault()
        playNote(e.currentTarget.dataset.note!)
        distance = e.currentTarget.dataset.note
        isMouseUse.current = true
    },[playNote,isMouseUse])
    const mMove: MouseEventHandler<HTMLDivElement> = useCallback((e) => {
        e.preventDefault()
        if (isMouseUse.current) {
            if (distance != e.currentTarget.dataset.note) {
                playNote(e.currentTarget.dataset.note!)
                distance = e.currentTarget.dataset.note
            }
        }
    },[playNote,isMouseUse])
    const mUp: MouseEventHandler<HTMLDivElement> = useCallback((e) => {
        isMouseUse.current = false
    },[isMouseUse])

    const groupWhiteItem = useMemo(() => groupWhite.map(({ note }) => {
        return (
            <div key={note} data-note={note} onMouseUp={mUp} onMouseDown={mDowm} onMouseMove={mMove} className='keySize whiteKeyStyle'></div>
        )
    }), [groupWhite,mUp,mDowm,mMove])
    return (
        <div className='piano-group'>
            <div className="piano-white-group" onMouseDown={(e)=>{e.preventDefault()}}> 
                {groupWhiteItem}
            </div>
            <div className="piano-black-group" onMouseDown={(e)=>{e.preventDefault()}}>
                <div className='piano-black-group-left'>
                    {groupBlack.slice(0,2).map((value)=><div className='keySize blackKeyStyle' key={value.note} data-note={value.note} onMouseUp={mUp} onMouseDown={mDowm} onMouseMove={mMove} ></div>)}
                </div>
                <div className='piano-black-group-right'>
                    {groupBlack.slice(2,5).map((value)=><div className='keySize blackKeyStyle' key={value.note} data-note={value.note} onMouseUp={mUp} onMouseDown={mDowm} onMouseMove={mMove} ></div>)}
                </div>
            </div>
        </div>
    )

}