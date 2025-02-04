import AssignmentCard from "./AssignmentCard";

import { GoKey } from "react-icons/go";
import { FaUserShield } from "react-icons/fa";
import { BsChatText } from "react-icons/bs";

const AssignCards = ()=>{
    
    const assignmentInfo = [{
        AssignTilte:"Behavioral competencies",
        icon:FaUserShield
    
    },
    {
        AssignTilte:"Traits",
        icon:BsChatText
    },
    {
        AssignTilte:"Drivers",
        icon:GoKey
    }];

    return(<>
    <div>
    <h1 className="font-bold text-lg mt-3">Assessments</h1>
        <div className="flex flex-row gap-5 flex-wrap p-4">
            {assignmentInfo.map((data)=>{
                return <AssignmentCard Icon={data.icon} title={data.AssignTilte}/>
            })}
        </div>
    </div> 
    </>);
}

export default AssignCards