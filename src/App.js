import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllocationForm from './components/AllocationForm';
import Budget from './components/Budget';
import ExpenseList from './components/ExpenseList';
import ExpenseTotal from './components/ExpenseTotal';
import Remaining from './components/Remaining';
import Select from './components/Select';
import './App.css';


// Add code to import the components
import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>

            <div className='container mt-5'>
                <h1 className='mb-4'>Company's Budget Allocation</h1>

                <div className='d-flex justify-content-around'>
                    <Budget />
                    <Remaining />
                    <ExpenseTotal />
                    <Select />

                </div>
                <ExpenseList />

                <AllocationForm />
            </div>
        </AppProvider>
    );
};
export default App;
