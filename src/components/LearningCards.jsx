import LearnCard from "./LearnCard"
import { IoBookOutline } from "react-icons/io5";

const LearningCards = () => {
    const learnInfo = [{
        title: "Behavioral competencies Micro-learning",
        icon: IoBookOutline
    }];

    return (<>
        <div className="mt-3">
            <h1 className="font-bold text-2xl">Learnings</h1>
            <div className=" flex flex-row gap-3 flex-wrap">
                {learnInfo.map((data) => {
                    return <LearnCard Icon={IoBookOutline} title={data.title} />
                })}
            </div>
        </div>
    </>)
}

export default LearningCards