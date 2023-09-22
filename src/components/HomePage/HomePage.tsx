import Navbar from '../Navbar/Navbar';
 import { FlexDiv } from './HomePage.styled';

const HomePage = () => {
    return (
        <FlexDiv>
            <Navbar />
            <div style={{ width: '100%'}}>
                <h1>Fozan Rizvi | Frontend Developer</h1>
                <p>I like to craft solid and scalable frontend products with <br />
                    great user experience.
                </p>
            </div>
        </FlexDiv>
    );
}

export default HomePage;