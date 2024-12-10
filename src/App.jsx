import Form from "./components/Form"
import {UserContextProvider} from "./store/user-context"

export default function App() {

  return (
    <main className="min-h-screen flex justify-center items-center">
      <UserContextProvider initialValue={{}}>
          <Form /> 
      </UserContextProvider>
    </main>
  )
}

