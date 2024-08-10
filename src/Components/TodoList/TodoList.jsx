import { useReducer, useState } from 'react';

const TodoList = () => {

  const [ inputValue, setInputValue ] = useState( "" );

  const [ todos, dispatch ] = useReducer( ( state, action ) => {
    switch ( action.type ) {
      case "add": {
        return [
          ...state,
          {
            complete: false,
            content: action.content
          }
        ];
      }

      case "complete": {
        return state.map( ( todo, key ) => {
          if ( key == action.id ) {
            return { ...todo, complete: !todo.complete };
          } else {
            return todo;
          }
        } );
      }
    }
  }, [
    {
      complete: false,
      content: "Work on a new Project"
    },
    {
      complete: false,
      content: "Participate in Devathon"
    },
  ] );

  const handleAdd = () => {
    if ( inputValue.trim().length ) {
      dispatch( { type: "add", content: inputValue } );
      setInputValue( "" );
    }
  };

  return (
    <div className='shadow-xl shadow-slate-300 flex flex-col gap-10 items-center w-11/12 px-10 py-5 min-h-80 max-h-[90vh] rounded-xl bg-slate-50 lg:w-3/5'>
      <div className='flex gap-4 items-center w-full'>
        <input placeholder='Write here...' className='shadow-md w-full text-sm outline-none border-none px-7 py-[.8rem] bg-slate-100' type="text" value={ inputValue } onChange={ e => setInputValue( e.target.value ) } onKeyDown={ e => { if ( e.key == "Enter" ) handleAdd(); } } />
        {/* <button
          onClick={ handleAdd }
          className='h-full w-12 text-white text-xl aspect-square rounded shadow-lg flex justify-center items-center bg-teal-600 transition-all duration-150 hover:bg-teal-700'>
          +
        </button> */}
        <button onClick={ handleAdd } class="flex h-full w-12 aspect-square rounded items-center justify-center border-none bg-teal-500 text-base text-white outline-none duration-[250ms] hover:rotate-90 hover:rounded-[50%]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>


      </div>
      <div className='flex flex-col w-full gap-4 text-base text-slate-800 overflow-y-auto pr-2'>
        { todos.map( ( todo, key ) => (
          <div key={ key } className='flex justify-between items-center rounded  shadow-lg shadow-slate-100 p-3'>
            <p className={ todo.complete ? 'line-through' : "" }>{ todo.content }</p>
            <input onChange={ e => {
              dispatch( {
                type: "complete",
                id: key
              } );
            } } checked={ todo.complete } type="checkbox" name="todo" className='accent-teal-400 h-4 aspect-square' />
          </div>
        ) ) }
      </div>
    </div>
  );
};

export default TodoList;