import { useEffect, useRef } from "react";
import {Sampler} from 'tone'

import C2 from '@/assets/mp3/C2.mp3'
import C3 from '@/assets/mp3/C3.mp3'
import C4 from '@/assets/mp3/C4.mp3'
import C5 from '@/assets/mp3/C5.mp3'
import C6 from '@/assets/mp3/C6.mp3'

import D2 from '@/assets/mp3/D2.mp3'
import D3 from '@/assets/mp3/D3.mp3'
import D4 from '@/assets/mp3/D4.mp3'
import D5 from '@/assets/mp3/D5.mp3'
import D6 from '@/assets/mp3/D6.mp3'

import E2 from '@/assets/mp3/E2.mp3'
import E3 from '@/assets/mp3/E3.mp3'
import E4 from '@/assets/mp3/E4.mp3'
import E5 from '@/assets/mp3/E5.mp3'
import E6 from '@/assets/mp3/E6.mp3'

import F2 from '@/assets/mp3/F2.mp3'
import F3 from '@/assets/mp3/F3.mp3'
import F4 from '@/assets/mp3/F4.mp3'
import F5 from '@/assets/mp3/F5.mp3'
import F6 from '@/assets/mp3/F6.mp3'

import G2 from '@/assets/mp3/G2.mp3'
import G3 from '@/assets/mp3/G3.mp3'
import G4 from '@/assets/mp3/G4.mp3'
import G5 from '@/assets/mp3/G5.mp3'
import G6 from '@/assets/mp3/G6.mp3'

import A2 from '@/assets/mp3/A2.mp3'
import A3 from '@/assets/mp3/A3.mp3'
import A4 from '@/assets/mp3/A4.mp3'
import A5 from '@/assets/mp3/A5.mp3'
import A6 from '@/assets/mp3/A6.mp3'

import B2 from '@/assets/mp3/B2.mp3'
import B3 from '@/assets/mp3/B3.mp3'
import B4 from '@/assets/mp3/B4.mp3'
import B5 from '@/assets/mp3/B5.mp3'
import B6 from '@/assets/mp3/B6.mp3'

import Db2 from '@/assets/mp3/Db2.mp3'
import Db3 from '@/assets/mp3/Db3.mp3'
import Db4 from '@/assets/mp3/Db4.mp3'
import Db5 from '@/assets/mp3/Db5.mp3'
import Db6 from '@/assets/mp3/Db6.mp3'

import Eb2 from '@/assets/mp3/Eb2.mp3'
import Eb3 from '@/assets/mp3/Eb3.mp3'
import Eb4 from '@/assets/mp3/Eb4.mp3'
import Eb5 from '@/assets/mp3/Eb5.mp3'
import Eb6 from '@/assets/mp3/Eb6.mp3'

import Gb2 from '@/assets/mp3/Gb2.mp3'
import Gb3 from '@/assets/mp3/Gb3.mp3'
import Gb4 from '@/assets/mp3/Gb4.mp3'
import Gb5 from '@/assets/mp3/Gb5.mp3'
import Gb6 from '@/assets/mp3/Gb6.mp3'

import Ab2 from '@/assets/mp3/Ab2.mp3'
import Ab3 from '@/assets/mp3/Ab3.mp3'
import Ab4 from '@/assets/mp3/Ab4.mp3'
import Ab5 from '@/assets/mp3/Ab5.mp3'
import Ab6 from '@/assets/mp3/Ab6.mp3'

import Bb2 from '@/assets/mp3/Bb2.mp3'
import Bb3 from '@/assets/mp3/Bb3.mp3'
import Bb4 from '@/assets/mp3/Bb4.mp3'
import Bb5 from '@/assets/mp3/Bb5.mp3'
import Bb6 from '@/assets/mp3/Bb6.mp3'

export function useTone(){
    const synthRef = useRef<Sampler>()
    useEffect(()=>{
        synthRef.current = new Sampler({
            urls:{
                "C2":C2,
                "C3":C3,
                "C4":C4,
                "C5":C5,
                "C6":C6,

                "Db2":Db2,
                "Db3":Db3,
                "Db4":Db4,
                "Db5":Db5,
                "Db6":Db6,

                "D2":D2,
                "D3":D3,
                "D4":D4,
                "D5":D5,
                "D6":D6,

                "Eb2":Eb2,
                "Eb3":Eb3,
                "Eb4":Eb4,
                "Eb5":Eb5,
                "Eb6":Eb6,

                "E2":E2,
                "E3":E3,
                "E4":E4,
                "E5":E5,
                "E6":E6,

                "F2":F2,
                "F3":F3,
                "F4":F4,
                "F5":F5,
                "F6":F6,

                "Gb2":Gb2,
                "Gb3":Gb3,
                "Gb4":Gb4,
                "Gb5":Gb5,
                "Gb6":Gb6,

                "G2":G2,
                "G3":G3,
                "G4":G4,
                "G5":G5,
                "G6":G6,

                "Ab2":Ab2,
                "Ab3":Ab3,
                "Ab4":Ab4,
                "Ab5":Ab5,
                "Ab6":Ab6,

                "A2":A2,
                "A3":A3,
                "A4":A4,
                "A5":A5,
                "A6":A6,

                "Bb2":Bb2,
                "Bb3":Bb3,
                "Bb4":Bb4,
                "Bb5":Bb5,
                "Bb6":Bb6,

                "B2":B2,
                "B3":B3,
                "B4":B4,
                "B5":B5,
                "B6":B6,


            },
            
        }).toDestination()
       
        
        return ()=>{
            synthRef.current?.dispose()
        }
    },[])
    
    const playNote = (note:string)=>{
        synthRef.current?.triggerAttackRelease(note,"1n")
    }
    return { playNote }
}