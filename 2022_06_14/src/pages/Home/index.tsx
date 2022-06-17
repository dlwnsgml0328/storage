import { useEffect, useState } from 'react';
import { Iperson } from '../../interface';
import { person } from '../../types';

const Home = () => {
  const [people, setPeople] = useState<Iperson[]>([]);

  const [people2, setPeople2] = useState<person[]>([]);

  useEffect(() => {
    if (people.length === 0) {
      setTimeout(() => {
        setPeople([
          { age: 25, name: 'Hyun woo' },
          { age: 26, name: 'John' },
          { age: 46, name: 'don lee' },
        ]);
      }, 4000);
    }
  }, [people]);

  useEffect(() => {
    if (people2.length === 0) {
      setTimeout(() => {
        setPeople2([
          { age: 35, name: 'A' },
          { age: 36, name: 'B' },
          { age: 16, name: 'C' },
        ]);
      }, 2000);
    }
  }, [people2]);

  if (people2.length === 0) {
    return <div>loading people group 2...</div>;
  }

  if (people.length === 0) {
    return <div>Loading people group 1...</div>;
  }

  return (
    <div>
      <h3>Home</h3>

      {people.map((item) => (
        <div key={item.name}>
          <span>{item.age + ', ' + item.name}</span>
        </div>
      ))}

      <br />

      {people2.map((item) => (
        <div key={item.name}>
          <span>{item.age + ', ' + item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Home;
