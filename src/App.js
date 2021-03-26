
import React from "react";
import Potato from "./Potato";

function Food({ name, picture }){
  return (
    <div>
      <h2>I like { name }</h2>
      <img src={ picture }/>
      </div>
  );
}

const foodLike = [
{
  name:'IU',
  image: 'https://i.pinimg.com/originals/52/c7/ab/52c7ab7f3825f0b804555681b7c6098b.jpg',  
},
{
  name: 'IU2',
  image: 'https://blog.kakaocdn.net/dn/bie8yq/btqUeitAhZI/cCN2ZeS9brlsxlo2LtS4j1/img.jpg',
}, 
{
  name: 'IU3',
  image: 'https://img.hankyung.com/photo/201910/BF.20710448.1.jpg',
},
{
  name: 'IU4',
  image: 'http://img.wkorea.com/w/2020/03/style_5e799a235ecb0-539x700.jpeg',
},
{
  name: 'IU5',
  image: 'https://mblogthumb-phinf.pstatic.net/MjAyMDA3MTZfMjc2/MDAxNTk0ODc1Nzk2Njgy.esTO9gYebl4p8z0jR7c1Nz3tHLa9SS5xUdUn6vdmAtUg.5iPqN5dP0SYPOdm0sns82foz6cZwI3cXRcugv22aElUg.JPEG.stdasan/Who_K-pop_%EC%95%84%EC%9D%B4%EC%9C%A0-%ED%91%9C1.jpg?type=w800',
},

];

function App() {
  return (
      <div>
        {
          foodLike.map(dish => (<Food name={dish.name} picture={dish.image}/>))
        } 
      </div>
  );   
}

export default App;