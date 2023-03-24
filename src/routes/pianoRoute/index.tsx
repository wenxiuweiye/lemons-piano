import Piano from "../../components/piano";
import GetStartRoute from "./GetStart";
import { Element } from 'react-scroll'
import LearnMusic from "./LearnMusic";
export default function PianoRoute() {
    return (
        <div className=" flex flex-col justify-center items-center space-y-10 w-full">
            <Element name='piano'><Piano></Piano></Element>
            <Element className=" flex justify-center items-center" name='getStart'><GetStartRoute></GetStartRoute></Element>
            <Element  name="learnMusic"><LearnMusic></LearnMusic></Element>
        </div>
    )
}