import { Link, useLocation } from "react-router-dom"

type SidebarListProps = {
    sidebarTitle: string,
    sidebarList : string []
}
export default function SidebarList({sidebarTitle,sidebarList}:SidebarListProps) {
    const location = useLocation
    return (
        <li>
            <div className=" text-xl">{sidebarTitle}</div>
            <ul>
                {sidebarList.map((val) => {
                    return <li key={val}><Link to={location().pathname+`/${val}`}>{val}</Link></li>
                })}
            </ul>
        </li>
    )
}