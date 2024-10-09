import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import UserRefHook from './Components/UserRefHook.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserRefHook />
  </StrictMode>,
)
