import Button from '@mui/material/Button'
import { AccessAlarm, ThreeDRotation, Home } from '@mui/icons-material'
import { pink } from '@mui/material/colors'

function App() {


  return (
    <>
      <Button variant="contained">Hello world</Button>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <br/>
      < AccessAlarm />
      < ThreeDRotation />
      <Home />
      <Home color="primary" />
      <Home color="secondary" />
      <Home color="success" />
      <Home color="action" />
      <Home color="disabled" />
      <Home sx={{ color: pink[500] }} />
    </>
  )
}

export default App
