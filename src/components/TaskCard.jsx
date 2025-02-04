
const TaskCard = ({ Icon, digit, description }) => {
    return (<>
        <div id="main" className="flex flex-row ml-5 mt-3">
            <div className="flex flex-col">
                <div id="mainI" className="flex flex-row gap-10 mb-2">
                    <div id="icon" className="w-8 h-8 bg-gray-300 flex items-center justify-center rounded-full ">
                        <Icon className="w-5 h-5 text-green-600" />
                    </div>
                    <div id="digit" className="font-bold flex items-center justify-center">
                        {digit}
                    </div>
                </div>
                <div id="text" className="">
                    <p>{description}</p>
                </div>
            </div>

        </div>
    </>)
}

export default TaskCard;