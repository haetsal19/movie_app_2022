import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name} </h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  )
}


const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220105_25%2F1641348286138nOuO1_JPEG%2F42484119953249610_564125269.jpg&type=sc960_832',
    rating: 5.00,
  },
  {
    id:2,
    name: 'Samgiopsal',
    image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAxMDZfMjY2%2FMDAxNjQxNDU0MjA2NDU4.tsOJGg7Zo8724MiqDsNmqMi6UifbgNzWWDfZ5g5w4q0g.uHk5J1RdASeD24p3FNaJnnjGRpoBAq3u21rs06z23pYg.JPEG.wcw93%2F1641453317617.jpg&type=sc960_832',
    rating: 4.92,
  },
  {
    id:3,
    name: 'Bibimbap',
    image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA2MTFfODUg%2FMDAxNjIzNDE3MTY3ODkz.24djMPeFd0D1VddYWNIK9sU5Q8kxhoAiQsEk7U_H7I4g.j2S5mr2LrTyxIxPtMMv9PyYXBHLgFwKj7H75gkGrsEUg.JPEG.teensee%2Fimage.JPEG&type=sc960_832',
    rating: 3.78,
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMjdfNCAg%2FMDAxNjQwNTk1MzMxODIz.-De_N9sqqzVI2YhxAyLbyN7I3g9KfZuanirq6-DncsYg.zG4G6gTKfoDgV5kXmiaZ99tsTHU3GxbcQ2utruLiNCsg.JPEG.yfls2%2F20211225%25A3%25DF125701.jpg&type=sc960_832',
    rating: 4.33
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMjFfMTIz%2FMDAxNjQwMDk1NDIzNDM0.EuXORzZOfcq62y1lFaSY0OM4llRHSpBSz1u7C5pYkrQg.tfQ6AsqZWEfQCHXsoqwP8Maq9zO3_dMVqyYyiD6P4iwg.JPEG.kdj3439%2F1640094861135.jpg&type=sc960_832',
    rating: 4.54,
  },
];


function App() {
  return (
  <div>
    {foodILike.map(dish => (
      <Food key={dish.id} name={dish.name} picture={dish.image} 
      rating={dish.rating} />
    ))}
  </div>
 );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired, 
  rating: PropTypes.number,
};

export default App;