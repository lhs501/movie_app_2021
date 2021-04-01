import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component {
  
  state = {
    isLoading: true,
    movie: [],
  };

  getMovies = async () =>{
    const{
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState({ movies, isLoading: false });
  };
  componentDidMount(){
    //영화 데이터 로딩
    this.getMovies();
    
  }
  
  render(){
    const { isLoading, movies } = this.state;
    return (
    <section className="container">
      {isLoading ?(
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) :(
        <div className="movies">
          {movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image}
            genres={movie.genres}
          />
        ))}
        </div>
      )}
      </section>
    );
  }
}

export default App;




// class App extends React.Component {

//   constructor(props){
//     super(props);
//     console.log('hello');
//   }

//   state = {
//     count:0,
//   };

//   add = () => {
//     this.setState(current =>  ({
//       count : current.count + 1,
//     }));
//   };

//   minus = () =>{
//     this.setState(current =>({
//       count : current.count - 1,
//     }));
//   };
//   componentDidMount(){
//     console.log('component rendered');
//   }
//   componentDidUpdate(){
//     console.log('I just updated');
//   }
//   componentWillUnmount(){
//     console.log('Goodbye, cruel world');
//   }

//   render(){
//     console.log("I'm rendering");
//     return (
//     <div>
//         <h1>The number is: {this.state.count}</h1>
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.minus}>Minus</button>
//     </div>
//     );
//   }
// }


// export default App;







// import PropTypes from 'prop-types';

// function Food({ name, picture, rating }){
//   return (
//     <div>
//       <h2>I like { name }</h2>
//       <h4>{rating}/5.0</h4>
//       <img src={ picture } alt={name}/>
//       </div>
//   );
// }

// const foodLike = [
// {
//   id: 1,
//   name:'IU',
//   image: 'https://i.pinimg.com/originals/52/c7/ab/52c7ab7f3825f0b804555681b7c6098b.jpg', rating:5, 
// },
// {
//   id: 2,
//   name: 'IU2',
//   image: 'https://blog.kakaocdn.net/dn/bie8yq/btqUeitAhZI/cCN2ZeS9brlsxlo2LtS4j1/img.jpg',rating: 4.8
// }, 
// {
//   id: 3,
//   name: 'IU3',
//   image: 'https://img.hankyung.com/photo/201910/BF.20710448.1.jpg',rating: 4.9
// },
// {
//   id: 4,
//   name: 'IU4',
//   image: 'http://img.wkorea.com/w/2020/03/style_5e799a235ecb0-539x700.jpeg',rating: 4.7
// },
// {
//   id: 5,
//   name: 'IU5',
//   image: 'https://mblogthumb-phinf.pstatic.net/MjAyMDA3MTZfMjc2/MDAxNTk0ODc1Nzk2Njgy.esTO9gYebl4p8z0jR7c1Nz3tHLa9SS5xUdUn6vdmAtUg.5iPqN5dP0SYPOdm0sns82foz6cZwI3cXRcugv22aElUg.JPEG.stdasan/Who_K-pop_%EC%95%84%EC%9D%B4%EC%9C%A0-%ED%91%9C1.jpg?type=w800', rating: 5
// },

// ];

// function App() {
//   return (
//       <div>
//         {
//           foodLike.map(dish=>(
//           <Food key={dish.id} name={dish.name} picture={dish.image}
//           rating={dish.rating}/>))
//         } 
//       </div>
//   );   
// }

// Food.propTypes = {
//   name:PropTypes.string.isRequired,
//   picture:PropTypes.string.isRequired,
//   rating:PropTypes.number.isRequired,
// };

// export default App;