import { Parallax } from 'react-parallax';
import Building from '../Images/water2.jpg'

const Three = () => (
    <Parallax className='image' bgImage={Building} bgImageAlt="the cat" strength={800}  blur={{ min:-11, max: 15 }}>
        <div className="content">
            <span className="img-txt">A trip to Nature</span>
        </div>
    </Parallax>
);


export default Three