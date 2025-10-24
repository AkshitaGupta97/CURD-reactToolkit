
import './App.css'
import RecordTable from './components/RecordTable'
import {Provider} from 'react-redux'
import { store } from './Store/store'

function App() {

  return (
    <Provider store={store}>
     <RecordTable />
    </Provider>
  )
}

export default App
