import { useState, useEffect } from 'react';
import User from './User';

const colors = ['#0c9bbd', 'red', 'orange', 'green'];

const RandomUserTwo = () => {
  const [num, setNum] = useState(0);
  const [searchChange, setSearchChange] = useState('');
  const [searchWord, setSearchWord] = useState(
    localStorage.getItem('user') || 'foobar'
  );

  // const [searchWord, setSearchWord] = useState('foobar');
  
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`https://randomuser.me/api/?seed=${searchWord}`);
      const data = await res.json();
      setData(data.results);
    };
    // return inside a useEffect is equivelant = componentDidUnmount
    // clean up function
    // if an unmount occurs
    fetchUser()
  }, [searchWord]);

  useEffect(() => {
    localStorage.setItem('user', searchWord);
  }, [searchWord]);

  useEffect(()=>{
    const currentUser = localStorage.getItem('user')
    if (currentUser){
      setSearchWord(currentUser)
    }
  }, [])

  useEffect(() => {
    const colorInterval = setInterval(() => {
      console.log('i am running');
      setNum((prevNum) => (prevNum === 3 ? 0 : prevNum + 1));
    }, 7000);

    return () => {
      clearInterval(colorInterval)
    }
  }, []);

  return (
    <div
      style={{
        backgroundColor: colors[num],
        transition: 'background-color 4s'
      }}
      className='container'
    >
      <div className='person'>
        {data?.map((data) => (
          <User key={data.id.value} data={data} />
        ))}
      </div>
      <div className='form-wrapper'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (searchChange === '') return;
            setSearchWord(searchChange);
            setSearchChange('');
          }}
        >
          <label htmlFor='search'>Search</label>
          <input
            id='search'
            onChange={(e) => setSearchChange(e.target.value)}
            value={searchChange}
            name='searchWord'
            placeholder='Username'
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RandomUserTwo;
