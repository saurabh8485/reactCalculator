// import logo from './logo.svg';
// import './App.css';
// import Card from "./Card.js";
// // import Footer from "./Footer.js";
// // import Header from "./Header.js";
// // import Main from "./Main.js";

// function App() {

// let studentData=[
//   {
//     name:"Jaydeep Pawar",
//     course:"PG-DAC",
//     age:25,
//     city:"Kolhapur",
//     gender:"M"
//   },
//   {
//     name:"Vaibhav Pawar",
//     course:"PG-DAC",
//     age:25,
//     city:"Chandwad",
//     gender:"M"
//   },
//   {
//     name:"Snehal Pawar",
//     course:"PG-DAC",
//     age:25,
//     city:"Indapur",
//     gender:"F"
//   },
//   {
//     name:"Anirudh Patil",
//     course:"PG-DAC",
//     age:25,
//     city:"Pune",
//     gender:"M"
//   },
//   {
//     name:"Komal Mate",
//     course:"PG-DAC",
//     age:25,
//     city:"Sangli",
//     gender:"F"
//   },
//   {
//     name:"Nikhil Janve",
//     course:"PG-DAC",
//     age:25,
//     city:"Chandrapur",
//     gender:"M"
//   },
//   {
//     name:"Sujit Wani",
//     course:"PG-DAC",
//     age:25,
//     city:"Nagpur",
//     gender:"M"
//   },

//   {
//     name:"Pratik Vaidya",
//     course:"PG-DAC",
//     age:25,
//     city:"Barshi",
//     gender:"M"
//   },
//   {
//     name:"Shivpooja Gujar",
//     course:"PG-DAC",
//     age:25,
//     city:"Beed",
//     gender:"F"
//   }
// ]




//   let productData = [
//     {
//       product_name: "Samsung Galaxy Z Fold3 5G (256GB ROM, 12GB RAM)",
//       prize: "₹139,999.00",
//       category: "MRP: ₹171,999.00 (Save ₹32,000, 19% off)",
//     },
//     {
//       product_name: "Oppo F21 Pro (128GB ROM, 8GB RAM)",
//       prize: "₹22,999.00",
//       category: "MRP: ₹30,000.00 (Save ₹7,001, 23% off)",
//     },
//     {
//       product_name: "Vivo V23 Pro 5G (256GB ROM, 12GB RAM)",
//       prize: "₹43,990.00",
//       category: "MRP: ₹50,000.00 (Save ₹6,010, 12% off)",
//     },
//     {
//       product_name: "Apple iPhone 11 (128GB ROM, 4GB RAM)",
//       prize: "₹49,990.00",
//       category: "MRP: ₹54,900.00 (Save ₹4,910, 9% off)",
//     },
//     {
//       product_name: "Dell 14 Vostro 3400 11th Gen Core i5",
//       prize: "₹51,990.00",
//       category: "MRP: ₹62,990.00 (Save ₹11,000, 17% off)",
//     },
//     {
//       product_name: "HP Pavilion Aero 13-BE0190AU",
//       prize: "₹63,490.00",
//       category: "MRP: ₹92,798.00 (Save ₹29,308, 32% off)",
//     },
//     {
//       product_name: "Dell Inspiron 3515 Ryzen 3",
//       prize: "₹38,990.00",
//       category: "MRP: ₹46,700.00 (Save ₹7,710, 17% off)",
//     },
//     {
//       product_name: "Apple MacBook Pro M2 Chip Laptop",
//       prize: "₹149,900.00",
//       category: "MRP: ₹160,700.00 (Save ₹11,710, 17% off)",
//     },
//     {
//       product_name: "Whirlpool 240 Litres 5 Star Frost Free Inverter",
//       prize: "₹28,390.00",
//       category: "MRP: ₹36,400.00 (Save ₹8,010, 22% off)",
//     },
//     {
//       product_name: "Voltas Beko 195 Litres 4 Star Single Door",
//       prize: "₹19,484.00",
//       category: "MRP: ₹26,090.00 (Save ₹6,606, 25% off)",
//     },
//     {
//       product_name: "Voltas Beko 640 Litres Frost Free ProSmart",
//       prize: "₹78,900.00",
//       category: "MRP: ₹100,990.00 (Save ₹22,090, 22% off)",
//     },
//     {
//       product_name: "Voltas Beko 634 Litres Frost Free ProSmart Inverter",
//       prize: "₹97,990.00",
//       category: "MRP: ₹124,990.00 (Save ₹27,000, 22% off)",
//     },
//     {
//       product_name: "Kent Grand Plus RO+UV+UF+TDS Electrical Water Purifier",
//       prize: "₹17,380.00",
//       category: "MRP: ₹20,500.00 (Save ₹3,120, 15% off)",
//     },
//     {
//       product_name: "Aquaguard Royale RO+UV+SS+ZPP",
//       prize: "₹21,490.00",
//       category: "MRP: ₹24,500.00 (Save ₹3,010, 12% off)",
//     },
//     {
//       product_name: "Kaff 4 Burner Toughened Glass Gas Stove",
//       prize: "₹8,190.00",
//       category: "MRP: ₹12,490.00 (Save ₹4,300, 34% off)",
//     },  
//     {
//       product_name: "Kuvings 240 Watts Cold Press Slow Juicer",
//       prize: "₹31,900.00",
//       category: "MRP: ₹74,900.00 (Save ₹43,000, 57% off)",
//     }
//   ]

//   return (
//     <>   
//       <Header />   
//       <Main product={productData}/>
//       <Footer />      
//     </>
//   );
// }

// export default App;


import React, { createContext, useState } from "react";
import './App.css';
import ReactSwitch from "react-switch";

export const TheamContext = createContext(null)

const App = () => {

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  };

  const [ans, setAns] = useState("");

  const clickHandler = (event) => {
    setAns(ans.concat(event.target.value))
  }

  const clear = () => {
    setAns("")
  }

  const cal = () => {
    setAns(eval(ans).toString())
  }

  return (

    <div className="body">
      <div className="switch">
        <h5>{theme === "light" ? "Light Mode" : "Dark Mode"}</h5>
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />

      </div>
      <TheamContext.Provider value={{ theme, setTheme }}>
        <div className="struct" id={theme}>
          <input type="text" placeholder="0" className="result" value={ans} />
          <input type="button" value="Clear" className="button1" onClick={clear} />
          <input type="button" value="%" className="button" onClick={clickHandler} />
          <input type="button" value="/" className="button" onClick={clickHandler} />
          <input type="button" value="7" className="button" onClick={clickHandler} />
          <input type="button" value="8" className="button" onClick={clickHandler} />
          <input type="button" value="9" className="button" onClick={clickHandler} />
          <input type="button" value="*" className="button" onClick={clickHandler} />
          <input type="button" value="4" className="button" onClick={clickHandler} />
          <input type="button" value="5" className="button" onClick={clickHandler} />
          <input type="button" value="6" className="button" onClick={clickHandler} />
          <input type="button" value="-" className="button" onClick={clickHandler} />
          <input type="button" value="1" className="button" onClick={clickHandler} />
          <input type="button" value="2" className="button" onClick={clickHandler} />
          <input type="button" value="3" className="button" onClick={clickHandler} />
          <input type="button" value="+" className="button" onClick={clickHandler} />
          <input type="button" value="0" className="button" onClick={clickHandler} />
          <input type="button" value="." className="button" onClick={clickHandler} />
          <input type="button" value="=" className="button1" onClick={cal} />
        </div>

      </TheamContext.Provider>
    </div>
  );
}

export default App;