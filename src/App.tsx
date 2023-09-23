import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";
import './App.css'

const reminders: Reminder[] = [{ id: 1, title: "typescript project" }];

function App() {
  return (
    <div>
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;