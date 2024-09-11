import logo from './logo.svg';
import './App.css';
import Title from './Title';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Edit <code>src/App.js</code> and save to reload.        </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         {/* <Title /> */}
//       </header>
//     </div>
//   );
// }


// array untuk menyimpan data
const phoneData = [
  { name: "iPhone X", price: 10000000, discount: 50 },
  { name: "Oppo Find X", price: 14000000, discount: 30 },
  { name: "Redmi Note X", price: 5000000, discount: 42 },
  { name: "Vivo XYZ", price: 10000000, discount: 0 },
];

// membuat komponen dengan props name, price & discount
function Product({name,price,discount=0}){
  return (
    <div>
      <h2>{name}</h2>
      {discount > 0 && <p><s>Rp {price}</s> ({discount}%)</p>}
      <p> <b>Rp {parseInt(price) - parseInt(price) * (parseInt(discount) / 100)}</b> </p>
      <hr/>
    </div>
  )
}

function App() {
  return (
    <div>
      {phoneData.map((phone, id) => (
        <Product
          key={id}
          name={phone.name}
          price={phone.price}
          discount={phone.discount}
        ></Product>
      ))}
    </div>
  );
}

export default App;
