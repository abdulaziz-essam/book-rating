import Button from 'react-bootstrap/Button';
import background from '../../img/book-library.png'
import designbook from '../../img/book-covers.png'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import './landingpage.css'
function SizesExample() {
  return (
<div>
    <img className='background' src={background} />
    <h1 className=''>see others opinions about books</h1>
    <div className='book-background'>
      <img className='books' src={background} />  
      <img className='books' src={background} />  
    </div>
</div>
  );
}

export default SizesExample;