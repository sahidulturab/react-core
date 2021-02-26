// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
const productList= [
  {name:"Photoshop",price:"$47.77"},
  {name:"Illustrator",price:"$37.77"}
  
]
const nayoks=['a','b','c']

  return (
    <div className="App">
      <header className="App-header">
        <h1>I am a React person</h1>
        <Counter></Counter>
        <Users></Users>
        <Products name={productList[0].name} price={productList[0].price}></Products>
        <Products name={productList[1].name} price={productList[1].price}></Products>
        <ul>
          {nayoks.map (nayok => <li>{nayok}</li>)}
          {productList.map(product => <li>{product.name}</li>)}
        </ul>
        {
          productList.map(product => <Products products={product}> </Products>)
        }
        
      </header>
      
    </div>
  );
}
function Counter(){
  const[count,setCount]=useState(12);
  const handleEvent=()=>{
    const newCount= count+1;
    setCount(newCount)
  }
  return(
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleEvent}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
  )
}

function Products(props){
  const productStyle= {
    border:'1px solid grey',
    borderRadius:'20px',
    width:'300px',
    height:'300px',
    float:'left',
    marginBottom:'10px'
  }

  return (
    <div style={productStyle}>
      <h3>{props.name}</h3>
      <h4>{props.price}</h4>
      <button>Buy Now</button>

    </div>
  )
}
function Users(){
  const[users,setUsers]=useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data=>{
      setUsers(data)
    })
  },[])
  return(
    <div>
      <h3>Dynamic User : {users.length}</h3>
      <ul>
        {
         users.map(user => <li>{user.name}</li>)
        }
        
      </ul>
      {
        console.log(users)
      }
    </div>
  )
}


export default App;
