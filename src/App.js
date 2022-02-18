import logo from './logo.svg';
import './App.css';
import Channel from './component/Channel';
import {Header} from './component/Header';
import CHeader from './component/CHeader';
import FunctionClick from './component/FunctionClick';
import CFunctionClick from './component/CFunctionClick';
const name =<span>hlw react</span>;
const test =()=>{
  alert("hii");
}
const age =(a)=>{
  if (a>8) {
    return <span> you are elegible</span>
    
  } else {
    return <span> you are not elegible</span>
  }

}

function App() {
  return (
    <div className="App">
     <h1>hi nilam; {name}</h1>
     
     <button onClick={test}>b</button>
     {age(19)}
     <Header  name='nilam' last='roy'>
       <p>anuj is a good boy</p>
       </Header>
     <Header name='nilam1'/>
     <Header name='nilam2'/>
     <Header name='nilam3'/>
     <CHeader name='nilam' last='roy'> hii react dev </CHeader>
     <CHeader name='nilam' last='roy'/>
     <Channel/>
     <FunctionClick />
     <CFunctionClick roll='22'/>
     
    </div>
  );
}

export default App;
