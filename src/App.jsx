import Form from "./components/Form"
import Modal from "./components/UI/Modal"
import {UserContextProvider} from "./store/user-context"

export default function App() {

  return (
    <main>
      <UserContextProvider initialValue={{}}>
        <div className="flex justify-center items-center h-full">
          <Form /> 
        </div>
      </UserContextProvider>
    </main>
  )
}

