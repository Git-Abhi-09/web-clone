import Layout from "./layout/Layout.jsx"
import Heading from "./components/heading";
import TodoTasks from "./components/TodoTasks";
import AssignCards from "./components/AssignCards.jsx";
import LearningCards from "./components/LearningCards.jsx";
import './styles/style.css'

function App() {

  return (
    <>
      <Layout>
        <Heading />
        <TodoTasks />
        <AssignCards />
        <LearningCards />
      </Layout>
    </>
  )
}

export default App;
