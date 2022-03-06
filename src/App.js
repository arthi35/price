import './App.css';
import{useState}from "react";
const PAGE_PRODUCTS='products';
const PAGE_CART='cart';
export default function App() {
  const [cart,setCart]=useState([]);
  const [page,setPage]=useState('PAGE_PRODUCTS');
  const [products]=useState([
    {
      name:'Apple Laptop',
      cost:'₹300000',
      image:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRkiNzD6qOJn-xJELH9HyopXiiMZm9R1qpdv-pzixx718DSNSaot8jSCwusg-9Z3ubNHAn6RZYGQAY&usqp=CAc'
    },
    {
      name:'Zebronics HeadPhone',
      cost:'₹300',
      image:'data:image/png;base64,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'
    },
    {
      name:'Apple iPhone 13 Pro Max (256GB) - Sierra Blue',
      cost:'₹1,39,900.00',
      image:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTB02Pjv4hF3lEh6OicF0Auj1JdC6Frnkk0K2uO9OE7K9HVGz2vEOC_r8loivl-YrCzoxs_gkDxGQ&usqp=CAc'
    },
    {
      name:'realme narzo 50A (Oxygen Blue , 4GB RAM + 128 GB Storage) Helio G85 Processor | 50MP AI Triple Camera | 6000 mAh Battery',
      cost:'₹12,499.00',
      image:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRNozlwITLrZYxyG0cenWDsjfCI-xuKAAaOU7Hsvj79k4oDTq5JpO7iusDj_0hrliHhm65et3in&usqp=CAc'
    },
    {
      name:'Dell XPS 13 Laptop',
      cost:'₹ 1,30,990.01',
      image:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTLKuM2owZmjfn1g2K-jr65Qo6g0sSjZaaWpVaFj0y4R38A9gSogIu1MQBJ9akTAc90P3GR3SyGzA&usqp=CAc'
    },
    {
      name:'ASUS ROG Strix G17 (2021) 17.3-inch (43.94 cms) FHD 144Hz, AMD Ryzen 7 4800H, GTX 1650 4GB Graphics, Gaming Laptop (8GB/512GB SSD/Windows 10/Gray/2.4 Kg), G713IH-HX020T',
      cost:'₹77,990.00',
      image:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR1CqAWwp06hABxA35KFxJgevPu8jRA4t-y884AHjF3o8-HLV48WpYZdWsGK3at_ZsewMUGDs5Mu4U&usqp=CAc'
    },
    {
      name:'HP 15- AMD Ryzen 3-3250 15.6 inch(39.6 cm) FHD,Thin & Light Laptop (8 GB RAM/1TB HDD + 256GB',
      cost:'₹41,499.00',
      image:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTWQ9OWmBPjTTr8F2chM9ETXvNp5aGbZ1D8TBGnVjVfbJvoJVMMMPP0N2RCUcUHd2uhuCE0KkJ3Fg&usqp=CAc'
    },
    {
      
        name:'MVTECH Ultra Clear HD Screen Guard Scratch Protector for 15.6 Inch Laptop ',
        cost:'₹399',
        image:'https://m.media-amazon.com/images/I/41tZ4xelAxL.jpg'
    }

  ]);
  const addToCart=(product)=>{
    
    setCart([...cart,{...product}]);
  };
  const removeFromCart=(productToRemove)=>{
    setCart(cart.filter((product)=>product!==productToRemove)
    );
  };
  const navigateTo=(nextPage)=>{
    setPage(nextPage)
  };
  const renderProducts=()=>(
    <>
    <h1>Products</h1>
    <div className='products'>
    {products.map((product,idx)=>(
      <div className='product'key={idx}>
        <h3>{product.name}</h3>
        <h4>{product.cost}</h4>
        <img src={product.image}alt={product.name}/>
        <button onClick={()=>addToCart(product)}>Add To Cart</button>
      </div>
    ))}
    </div>
    </>
  );
  const renderCart=()=>(
    <>
    <h1>Cart</h1>
    <div className='products'>
    {cart.map((product,idx)=>(
      <div className='product'key={idx}>
        <h3>{product.name}</h3>
        <h4>{product.cost}</h4>
        <img src={product.image}alt={product.name}/>
        <button onClick={()=>removeFromCart(product)}>Remove</button>
      </div>
    ))}
    </div>
    </>
  );
  return (
    <div className="App">
      <header>
        <button onClick={()=>navigateTo(PAGE_CART)}>🛒 Go To Cart({cart.length})</button>
        <button onClick={()=>navigateTo(PAGE_PRODUCTS)}>🛍️ View Products</button>
      </header>
      {page=== PAGE_PRODUCTS && renderProducts()}
      {page=== PAGE_CART && renderCart()}
    
    </div>
  );
}


