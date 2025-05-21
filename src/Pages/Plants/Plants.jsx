
import AllPlants from '../../Component/AllPlants';
import Loading from '../../Component/Loading';
import { Suspense, useState } from 'react';

const Plants = () => {
    const[sortby, setSortby] = useState('');

    const plants = fetch(`http://localhost:5000/plants?sort=${sortby}`).then(res => res.json());

    return (
        <div>
            <Suspense fallback={<Loading />}>
                <AllPlants plants={plants} setSortby={setSortby} sortby={sortby} />
            </Suspense>
        </div>
    );
};

export default Plants;