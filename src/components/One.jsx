import { Parallax } from 'react-parallax';
import Tree from '../Images/water0.jpg'

const One = () => (
    <Parallax className='image' bgImage={Tree} bgImageAlt="the cat" strength={800}>
        <div className="content">
            <span className="img-txt">A trip to Nature</span>
        </div>
    </Parallax>
);


export default One 