import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);

    function budgetChange(e) {
        let newBudget = parseInt(e.target.value)
        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);
        let remaining = newBudget - totalExpenses
        if (newBudget <= 20000) {
            if (remaining >= 0) {
                dispatch({
                    type: "SET_BUDGET",
                    payload: newBudget
                })
            } else {
                alert(`You cannot reduce the budget value lower than the spending`)
            }

        } else {
            alert(`The value cannot exceed 20000`)
        }

    }

    return (
        <div className='alert alert-secondary'>
            <label className='me-1' htmlFor='budget'>Budget: {currency[0]}</label>
            <input
                type="number"
                step="10"
                id='budget'
                value={budget}
                min="0"
                max="20000"
                onChange={(e) => { budgetChange(e) }}
            />
        </div>
    );
};

export default Budget;
