
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}
const slideImages = [
  {
    url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'GET 50% OF SELL PRODUCTS'
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    caption: 'GREATE JOURNEY WITH YOUR SHOPPING ASSISTANT'
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'The leading B2B ecommerce platform for global trade'
  },
];

function Header() {
    return (
      <div className="slide-container">
         
        
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className='' key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <span className='font-bold md:text-black text-center text-white flex items-center md:text-4xl text-3xl md:ml-3 md:mr-3 ml-5 ' >{slideImage.caption}</span>
                <div></div>
                
              </div>
            </div>
          ))} 
        </Slide>
       
      </div>
    )
}export default Header