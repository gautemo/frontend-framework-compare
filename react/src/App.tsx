import { AppStoreProvider } from './AppStoreProvider'
import { AddTodo } from './components/AddTodo'
import { ListTodo } from './components/ListTodo'
import { ThemeSwitch } from './components/ThemeSwitch'

function App() {
  return (
    <AppStoreProvider>
      <h1>My React ToDo</h1>
      <AddTodo />
      <ListTodo />
      <ThemeSwitch />
    </AppStoreProvider>
  )
}

export default App
