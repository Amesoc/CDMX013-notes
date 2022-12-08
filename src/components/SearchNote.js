import React from 'react';
import '../styles/SearchNote.css';

function SearchNote() {
    return (
        <div>
        <aside className='filtro'>
            <form>
                <input type= 'text' name='Search' placeholder='Name note'/>
                <button type='submit'></button>
            </form>
        </aside>
        </div>
       
    );
}

export default SearchNote;