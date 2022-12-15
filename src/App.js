import './App.css';
import ChildProp from './components/ChildProp';
import ClassLifeCycle from './components/ClassLifeCycle';
import FuncLifecycle from './components/FuncLifecycle';
import UseReducer from './components/UseReducer';
import UseRef from './components/UseRef';
import Button from './components/Button';
import {useCustomeCounter, useForm} from './components/Custom';
import UseRefEx from './components/UseRefEx';
import GrandParent from './components/contex_api/GrandParent';
import Counter from './components/Counter';
import UseState from './components/UseState';
import UseMemo from './components/UseMemo';
import { Parent } from './components/usecallback/Parent';
import FormInput from './components/FormInput';
import SearchName from './components/SearchName';
import ParentFunComp from './components/ParentFunComp';


function App() {

  const [count, handleIncrement] = useCustomeCounter();
  const {value, handleChange} = useForm();
  return (
    <div className="App">
      
      {/* <ClassLifeCycle/> */}
      {/* <ParentFunComp/> */}

      {/* <FuncLifecycle/> */}
      {/* <UseRef/> */}

      {/* <ChildProp num="6">
        <h1>World!</h1>
      </ChildProp> */}

      {/* <UseReducer/> */}

      {/* <Button/>
      <Button dark/> */}
{/* --------------------------------- */}
        {/* custom hooks example */}
{/* --------------------------------- */}
      {/* <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button><br/>

      <input type='text' onChange={handleChange}/>
      <h2>{value}</h2> */}

{/* --------------------------------- */}

      {/* <UseRefEx/> */}

      {/* <GrandParent/> */}
      {/* <Counter/> */}

      {/* <UseState/> */}

      {/* --- UseMemo ---- */}
      {/* <UseMemo/> */}
      {/* --------------------- */}

      {/* --- Use Callback ---- */}
      {/* <Parent/> */}
      {/* --------------------- */}

      {/* <FormInput/> */}
      {/* <SearchName /> */}

      {/* =========== Redux ======== */}
      <Counter/>
    </div>
  );
}

export default App;
