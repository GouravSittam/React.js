import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from '../App.jsx'
// import SignupForm from '../SignupForm.jsx'
// import Form2 from '../Form2.jsx'
import ClassActivity from '../ClassActivity.jsx'
import ClassActivity2 from '../ClassActivity2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <SignupForm /> */}
    {/* <Form2 /> */}
    <ClassActivity />
    <ClassActivity2 />
  </StrictMode>,
)
