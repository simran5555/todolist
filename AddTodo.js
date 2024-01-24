import React from 'react';
import { useState } from 'react';

const AddTodo = ({onAdd}) => {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');

  const onClick = (e) => {
    if(!text) {
      alert('please add task')
      return
    }

    onAdd({text, date})

    setText('')
    setDate('')
  }

    return (
        <div className="items-center" >
            <div className="flex align-middle items-center justify-between mx-3">
                <label htmlFor="" className='font-semibold pr-5 text-violet-600'>TASK</label>
                <input type="text" id="taskinput" value={text} onChange={(e) => setText(e.target.value)} className="bg-violet-100 border-2 border-violet-200 text-violet-600 text-sm rounded-lg active:border-violet-500 focus:border-violet-500 p-2.5 placeholder-violet-100 active:ring-violet-500"/>
            </div>
            <div className="flex align-middle items-center justify-between mx-3 py-4">
                <label htmlFor="" className='font-semibold pr-5 text-violet-600'>DATE</label>
                <input type="date" id="dateinput" value={date} onChange={(e) => setDate(e.target.value)} className="bg-violet-100 border-2 cursor-pointer border-violet-200 text-violet-600 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 p-2.5"/>
            </div>
            <div className="w-max mx-auto">
            <button className="bg-violet-900 text-white px-5 py-2 rounded-md" onClick={onClick}>ADD</button>
            </div>
        </div>
        )
}

            export default AddTodo