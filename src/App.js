import logo from './logo.svg';
import './App.css';
import TodoList from './Components/TodoList/TodoList';
import ProductCard from './Components/ProductCard/ProductCard';

function App () {
  return (
    <div className="bg-slate-50">
      <header className="flex flex-col items-center gap-40 py-10">
        <TodoList />
        <ProductCard />
      </header>
    </div>
  );
}

export default App;
