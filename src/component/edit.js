import React from 'react'

const Edit = ({setTodoValue,handleEditSubmit,todoValue}) => {
  return (
    <div className="form">
    <form autoComplete="off" onSubmit={handleEditSubmit}>
      <div className="input-and-button">
        <input type='text' placeholder="Add an Item" required
        onChange={(e)=>setTodoValue(e.target.value)} value={todoValue}/>
        <div className='button edit'>
          <button type="submit">
            Update
          </button>
        </div>
      </div>
    </form>
  </div>  )
}

export default Edit