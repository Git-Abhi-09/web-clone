import { FaArrowRightLong } from "react-icons/fa6";

const LearnCard = ({ Icon, title }) => {
    return (<>
        <div className="flex flex-col w-80 h-auto rounded-sm p-3">
            <div className="flex flex-row gap-3">
                <div id="icon" className="flex items-center"><Icon className="w-5 h-5 text-green-600" /></div>
                <div>
                    <h1 className="font-bold">{title}</h1>
                </div>
            </div>
            <div className="mt-3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ea illo iure quis consectetur quos officia laborum dolorem ab, quam possimus ullam doloribus adipisci quidem.</p>
            </div>
            <div className="mt-auto flex justify-end">
                <div className="flex items-center text-lg gap-2 text-green-700 mt-3 mr-3">
                    <a href="/">Expore Learning</a>
                    <FaArrowRightLong />
                </div>
            </div>
        </div>
    </>);
}

export default LearnCard