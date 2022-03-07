import { createContext, useContext, useState, ReactNode } from 'react';

const StoreContext = createContext<{ todos: string[], addTodo: (todo: string) => void }|undefined>(undefined)

export function AppStoreProvider({ children }: { children: ReactNode}){
  const [todos, setTodos] = useState<string[]>([])
  const addTodo = (todo: string) => setTodos([...todos, todo])
  return (
    <StoreContext.Provider value={{todos, addTodo}}>
      {children}
    </StoreContext.Provider>
  )
}

export function useStore(){
  const context = useContext(StoreContext)
  if(!context){
    throw new Error('useStore must be used within AppStoreProvider')
  }
  return context
}