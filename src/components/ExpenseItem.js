import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }


    return (
        <tr className='text-center'>
            <td className=''>{props.name}</td>
            <td className=''>{currency[0]} {props.cost}</td>
            <td className=''>
                <button onClick={event => increaseAllocation(props.name)}
                    className="btn btn-success btn-circle h1"
                    style={{ borderRadius: "50px", fontWeight: "800", fontSize: "20px" }}>
                    +
                </button>
            </td>
            <td className=''>
                <button onClick={event => decreseAllocation(props.name)}
                    className="btn btn-danger btn-circle h1"
                    style={{ borderRadius: "50px", fontWeight: "800", fontSize: "20px" }}>
                    -
                </button>
            </td>
            <td className=''><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
