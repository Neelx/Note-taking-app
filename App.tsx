import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import { Routes, Route, Navigate } from "react-router-dom"
import { NewNote } from "./NewNote"

function App() {
  return(
    <Container className="my-4">
    <Routes>
      <Route path="/" element={<h1>Cancel button clicked</h1>}/>
      <Route path ="/new" element={<NewNote/>}/>
      <Route path="/:id">
        <Route index element={<h1>Show</h1>}/>
        <Route index element={<h1>Edit</h1>}/>
      </Route>
      <Route path="*" element={<Navigate to = "/"/>}/>
    </Routes>
    </Container>
    )
}

export default App
