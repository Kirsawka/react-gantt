import {Gantt, ViewMode} from 'gantt-task-react';
import {useGanttTaskReactAdapter} from '@consta/gantt-task-react-adapter/useGanttTaskReactAdapter';
import {data} from "./data";
import './App.css';

const getTasks = (data) => {
  const tasks = [];
  data.forEach((item) => {
    const dateFrom = new Date(item.dateFrom);
    const dateTo = new Date(item.dateTo);
    if (dateFrom <= dateTo) {
      tasks.push({
        id: item.id,
        name: '',
        type: 'task',
        start: new Date(item.dateFrom),
        end: new Date(item.dateTo),
        progress: 100,
        styles: {
          progressColor: item.background,
        },
      });
    }
  });
  return tasks;
};

function App() {
  const styleOptions = useGanttTaskReactAdapter({});
  const tasks = getTasks(data);

  return (
    <>
      {tasks.length !== 0 && <Gantt
        {...styleOptions}
        tasks={tasks}
        viewMode={ViewMode.Month}
        todayColor="none"
        listCellWidth=""
        columnWidth={80}
        headerHeight={80}
        locale="en"
      />}
    </>
  );
}

export default App;
