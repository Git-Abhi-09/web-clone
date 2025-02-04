import { FaArrowRightLong } from "react-icons/fa6";
import { GoClock } from "react-icons/go";

const AssignmentCard = ({ title, Icon }) => {
    return (<>
        <div className="flex flex-col w-95 h-auto border-1 border-gray-300 rounded-sm p-3">
            <div className="flex flex-row gap-3">
                <div id="btn" className="bg-pink-600 h-6 w-12 flex items-center rounded-sm p-3 text-white justify-center">New</div>
                <div id="date" className="bg-blue-200 h-6 w-40 flex items-center rounded-sm p-3 text-blue-900 justify-center">Date : <span className="font-bold">Oct 21,2024</span></div>
            </div>
            <div className="flex flex-row m-3 gap-3">
                <div id="icon"><Icon className="w-5 h-5 text-green-600" /></div>
                <div id="icon-text" className="font-bold">{title}</div>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eligendi voluptates harum cum id inventore totam est! </p>
            </div>
            <div>
                <h2 className="m-1 flex items-center gap-1"><span><GoClock /></span>Est. Time: 15 mins</h2>
            </div>
            <div className="mr-0">
                <div className="mt-auto flex justify-end">
                    <div className="flex items-center text-lg gap-2 text-green-700 mb-4 mt-3 mr-3">
                        <a href="/">Start Assessment</a>
                        < FaArrowRightLong />
                    </div>
                </div>
            </div>
        </div>

    </>);
}

export default AssignmentCard;