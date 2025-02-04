import TaskCard from "./TaskCard";
import { LuNotepadText } from "react-icons/lu";
import { MdOutlineNoteAdd } from "react-icons/md";

const TodoTasks = () => {

    const taskInfo = [{
        icon: LuNotepadText,
        digit: 3,
        description: "To-do-Assessments"
    },
    {
        icon: MdOutlineNoteAdd,
        digit: 0,
        description: "New results"
    }];

    return (<>
        <div id="main" className="mt-3 mb-4">
            <div id="heading" className="font-bold text-2xl">
                <h1>To-do tasks</h1>
            </div>
            <div className="flex flex-row mt-3 gap-3">
                {taskInfo.map((task) => {
                    return <TaskCard Icon={task.icon} digit={task.digit} description={task.description} />
                })}
            </div>
        </div>
    </>)
}
export default TodoTasks;