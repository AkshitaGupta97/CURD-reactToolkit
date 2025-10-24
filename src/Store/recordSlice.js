
import {createSlice} from '@reduxjs/toolkit'

const demoRecords = [
  {
    id: 1,
    name: "Akshita Sharma",
    email: "akshita.sharma@example.com",
    phone: "+91-9876543210",
    position: "Project Manager"
  },
  {
    id: 2,
    name: "Ravi Kumar",
    email: "ravi.kumar@example.com",
    phone: "+91-9123456780",
    position: "Backend Developer"
  },
  {
    id: 3,
    name: "Sneha Verma",
    email: "sneha.verma@example.com",
    phone: "+91-9988776655",
    position: "Frontend Developer"
  },
  {
    id: 4,
    name: "Amit Singh",
    email: "amit.singh@example.com",
    phone: "+91-9090909090",
    position: "UI/UX Designer"
  },
  {
    id: 5,
    name: "Priya Das",
    email: "priya.das@example.com",
    phone: "+91-9871234567",
    position: "QA Engineer"
  },
  {
    id: 6,
    name: "Karan Mehta",
    email: "karan.mehta@example.com",
    phone: "+91-9812345678",
    position: "DevOps Engineer"
  },
  {
    id: 7,
    name: "Neha Joshi",
    email: "neha.joshi@example.com",
    phone: "+91-9765432109",
    position: "Business Analyst"
  },
  {
    id: 8,
    name: "Vikram Chauhan",
    email: "vikram.chauhan@example.com",
    phone: "+91-9654321098",
    position: "Technical Lead"
  }
];

// load records from local storage

const loadRecordFromStorage = () => {
  try{
    const savedRecord = localStorage.getItem("employeeRecord");
    return savedRecord ? JSON.parse(savedRecord) : demoRecords;
  }
  catch(error){
    console.error("Error is", error);
  }
}

// calculate next id .
const calculateNextId = (records) => {
    if(!records || records.length === 0) return 1;
    return Math.max(...records.map((r) => r.id)) + 1
}

const recordSlice = createSlice({
    name: "records",
    initialState: {
        items: loadRecordFromStorage(),
        searchTerm: "",
        nextId: calculateNextId(loadRecordFromStorage()),
    },

    reducers: {
      // Add record
      addRecord: (state, action) => {
        const nextRecord = {id: state.nextId, ...action.payload}
        state.items.push(nextRecord)

        localStorage.setItem("employeeRecord", JSON.stringify(state.items));
        state.nextId = calculateNextId(state.items)
      },
      // update record
      updateRecord: (state, action) => {
        const {id, data} = action.payload;
        const index = state.items.findIndex((r) => r.id === id);

        if(index !== -1){
          state.items[index] = {...state.items[index],  ...data}
          localStorage.setItem('employeeRecord', JSON.stringify(state.items));
        }
      },
      // delete record
      deleteRecord: (state, action) => {
        state.items = state.items.filter((r) => r.id !== action.payload);
        localStorage.setItem('employeeRecord', JSON.stringify(state.items));
        state.nextId = calculateNextId(state.items);
      },
      // search record
      searchRecord: (state, action) => {
        state.searchTerm = action.payload
      },

      resetAllRecord: (state) => {
        state.items = demoRecords;
        state.nextId = calculateNextId(demoRecords);
        localStorage.setItem('employeeRecord', JSON.stringify(demoRecords))
      }

    },

})

export const {addRecord, updateRecord, deleteRecord, searchRecord, resetAllRecord} = recordSlice.actions;

// selectors

export const selectAllRecord = (state) => state.records.items;
export const seleSearchTerm = (state) => state.records.searchTerm;

export const selectFilterRecord = (state) => {
  const term = state.records.searchTerm.toLowerCase();
  return state.records.items.filter((r) => {
    r.name.toLowerCase().includes(term) ||
    r.name.toLowerCase().includes(term) ||
    r.position.toLowerCase().includes(term)
  })
}

export default  recordSlice.reducer;