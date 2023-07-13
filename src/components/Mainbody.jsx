import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Row } from 'react-bootstrap';


export default function Mainbody(){

    return(
        <Row className='px-5 my-5 pt-5 me-5'>
          <Col sm={7}>
          <Image src="/images/elonMuskPic.jpg" className='w-75 m-2 ms-5 border border-3 border-white'fluid rounded/>
          </Col>
          <Col sm={5}>
            <h1 id='founder' className='font-weight-light text-white fs-2'>The Story.</h1>
            <p className='mt-4 text-white fs-5 text-left'>Tesla is a company that has become synonymous with electric vehicles, renewable energy, and sustainable transportation. Founded in 2003, Tesla's first car was the Roadster, a high-performance sports car that was ahead of its time. Since then, Tesla has continued to innovate and lead the way in the electric vehicle market with models such as the Model S, Model X, Model 3, and Model Y. In addition to its electric cars, Tesla is also involved in the development of energy storage systems and solar panels.</p>
          </Col>
        </Row>
    )
}