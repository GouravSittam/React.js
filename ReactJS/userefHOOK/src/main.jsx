import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import UserRefHook from './Components/UserRefHook.jsx'
import TodoApp from './Components/TodoApp.jsx'
import App from './Components/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserRefHook />
    <TodoApp />
    <App/>
  </StrictMode>,
)
