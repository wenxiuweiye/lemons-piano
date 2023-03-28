import { Outlet } from "react-router-dom"
import SidebarList from "./SidebarList"

export default function musicRoute() {

    const sidebarToneMarkList = ['唱名','调号','音名']

    return (
        <div className=" flex w-4/5 justify-center ">
            <div className=" w-1/4 bg-cyan-900 flex  flex-col items-center space-y-5 pt-5 pb-5">

                <div className=" text-2xl font-bold">基础乐理</div>
                <ul className=" flex flex-col items-center text-center ">
                    <SidebarList sidebarTitle="调号篇" sidebarList={sidebarToneMarkList}></SidebarList>
                    <li>
                        <div>调号</div>
                        <ul>
                            <li>msg</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className=" w-3/4 bg-purple-900 flex flex-col items-center space-y-5 pt-5 pb-5">
                
                <Outlet></Outlet>
            </div>
        </div>
    )
}