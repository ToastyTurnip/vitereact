import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FilterableProductTable from './components/filterabletablecomplete'
import IdentityForm from './components/idform'
import ScheduleComponent from './components/schedule'
import TabComponent from './components/browsertabs'
import MouseFollow from './components/mousefollow'

const scheddata = [
  {
      "Total_Units": 15,
      "Days": {
          "Monday": {
              "Courses": [
                  [20131, "CS_23", 1200, 1300],
                  [20123, "CS_12", 1400, 1800]
              ]
          },
          "Tuesday": {
              "Courses": [
                  [20131, "CS_23", 1200, 1300],
                  [20123, "CS_12", 1400, 1800]
              ]
          }
      }
  },
  {
      "Total_Units": 15,
      "Days": {
          "Monday": {
              "Courses": [
                  [201231, "CS_21", 1200, 1300],
                  [20123, "CS_12", 1400, 1800]
              ]
          },
          "Tuesday": {
              "Courses": [
                  [201231, "CS_21", 1200, 1300],
                  [20123, "CS_12", 1400, 1800]
              ]
          }
      }
  }
]

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

const tabs = [
  {
    title: 'Schedule',
    component: <ScheduleComponent data={scheddata} />,
  },
  {
    title: 'Identity',
    component: <IdentityForm />,
  },
  {
    title: 'Tab 3',
    component: <MouseFollow />,
  },
];


function App() {
  const [count, setCount] = useState(0)
  const [state, setState] = useState('start')

  return (
    <div>
      <TabComponent tabs={tabs} />
    </div>
  )
}

const AddTripButton = (props) => {
  return <button onClick={props.addTrip}>Add a trip</button>
}

function AnotherAddTripbutton(callback) {
  return (
    <button onClick={callback}>Add a trip</button>
  )
}

function YetAnotherAddTripbutton({strstate}) {
  return (
    <button onClick={addTrip}>Add a trip 2</button>
  )
}

function AnotherComponent() {
  return (
    <>
    <h1>hello react.</h1>

    </>
  )
}

export default App
