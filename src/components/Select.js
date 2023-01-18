import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
import '../App.css';


function Select() {
    const { dispatch, currency } = useContext(AppContext);

    return (
        <div className='d-flex items align-items-center alert alert-secondary'>
            <div className='d-flex flex-column items align-items-center select-color rounded'>
                <label htmlFor='currency' className='text-light'>Currency</label>
                <select name="currency"
                    value={currency}
                    id="currency"
                    className='text-light border-0 select-color rounded'
                    onChange={(e) => {
                        dispatch({
                            type: 'CHG_CURRENCY',
                            payload: e.target.value
                        });
                    }}>
                    <option value="$ Dollar" className='mt-2 none text-dark'>$ Dollar</option>
                    <option value="£ Pound" className='text-dark'>£ Pound</option>
                    <option value="€ Euro" className='text-dark'>€ Euro</option>
                    <option value="₹ Ruppee" className='text-dark'>₹ Ruppee</option>
                </select>
            </div>
        </div>
    )
}

export default Select;
