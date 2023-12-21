import { Parallax } from 'react-parallax';
import Flag from '../Images/water4.jpg'

const Two = () => (
    <Parallax className='image' bgImage={Flag} bgImageAlt="the cat" strength={800}>
        <div className="content">
            <span className="img-txt">A trip to Nature</span>
        </div>
    </Parallax>
);


export default Two 