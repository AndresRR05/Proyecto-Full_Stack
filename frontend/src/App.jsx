import Header from "./components/Header"
import Form from "./components/Form"
import { useState } from "react"
import { Toaster } from "react-hot-toast"

const App = () => {

  return (
    <div className="flex min-h-screen flex-col bg-neutral-700">
      <Header />

      <section className="flex flex-1 w-full justify-center items-center h-11/12">
        <Form />
      </section>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
    </div>
  )

}

export default App