import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllocationForm from './components/AllocationForm';
import Budget from './components/Budget';
import ExpenseItem from './components/ExpenseItem';
import ExpenseList from './components/ExpenseList';
import ExpenseTotal from './components/ExpenseTotal';
import Remaining from './components/Remaining';


// Add code to import the components
import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <Budget />
                <ExpenseItem />
                <ExpenseList />
                <ExpenseTotal />
                <Remaining />
                <AllocationForm />
            </div>
        </AppProvider>
    );
};
export default App;
