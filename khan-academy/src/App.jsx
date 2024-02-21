import { ChakraProvider } from '@chakra-ui/react'
import './App.css'

import { SignLog } from './bhawesh/SignLog'

function App() {
 

  return (
    <> <ChakraProvider>
      <SignLog />
      </ChakraProvider>
    </>
  )
}

export default App
