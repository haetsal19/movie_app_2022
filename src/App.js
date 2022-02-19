import React from 'react';
// import Home from './routes/Home'
// import axios from 'axios';
// import Movie from './Movie';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

function App() {
    // return <Home />;
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/movie-detail" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    );
}
// class App extends React.Component {
//     state = {
//         isLoading: true,
//         movies: [],
//     };

//     getMovies = async () => {
//         const {
//             data: {
//                 data: { movies },
//             },
//         } = await axios.get('http://yts-proxy.now.sh/list_movies.json?sort_by=rating');
//         this.setState({ movies, isLoading: false });
//         //this.setState({ movies: movies }); 
//         //객체의 키와 대입할 변수의 이름이 같다면 축약가능 in ES6
//     }
//     componentDidMount() {
//         //영화 데이터 로딩!
//         // setTimeout(() => {
//         //     this.setState({ isLoading: false });
//         // }, 6000);
//         this.getMovies();
//     }
//     render() {
//         const { isLoading, movies } = this.state;
//         return (
//             <section className="container">
//                 {isLoading ? (
//                 <div className="loader">
//                     <span className="loader__text">Loading...</span> 
//                  </div>
//                 ) : ( 
//                     <div className="movies">
//                     {movies.map(movie => (
//                         <Movie
//                           key={movie.id}
//                           id={movie.id}
//                           year={movie.year}
//                           title={movie.title}
//                           summary={movie.summary}
//                           poster={movie.medium_cover_image} 
//                           genres={movie.genres}
//                           />
//                     ))}
//                     </div>
//             )}
//             </section>
//         );
//     }
// }

export default App;