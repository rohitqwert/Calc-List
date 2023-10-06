import * as React from "react";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const Calculator = () => {
    const [speedObj, setSpeedObj] = React.useState({
        kmph: 0, 
        mph: 0
    });

    const convertKmphToMph = (kmph)=>{
        const mph = kmph/1.6;
        setSpeedObj({
            kmph: kmph,
            mph : mph 
        });
    }

    const convertMphToKmph = (mph)=>{
        const kmph = mph*1.6;
        setSpeedObj({
            kmph: kmph ,
            mph: mph
        });
    }
  return (
    <Card bg="warning"className="pos-centre" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>SPEED CONVERTED</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Convert Kmph To Mph</Card.Subtitle>
        <hr/>
        <Card.Text>
            {/*both of my input goes here*/}
          <KmphInput converter={convertKmphToMph} speed={speedObj.kmph}/>
          <MphInput converter={convertMphToKmph} speed={speedObj.mph}/>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

const KmphInput = ({converter,speed}) => {
    const handler =(e)=>{
        converter(e.target.value);
    }
    return(
        <Form.Group className="mb-3">
            <Form.Label>Speed(KMPH)</Form.Label>
            
            <Form.Control onChange={handler} type="number" value={speed} placeholder="Enter speed in Kmph"/>
            <Form.Text className="text-muted">
            
            </Form.Text>
       </Form.Group>
    )
};

const MphInput = ({converter,speed}) => {
    const handler=(e)=>{
        converter(e.target.value);
    }
    return(
        <Form.Group className="mb-3">
            <Form.Label>Speed(MPH)</Form.Label>
            <Form.Control onChange={handler} type="number" value={speed} placeholder="Enter speed in mph"/>
            <Form.Text className="text-muted">
            
            </Form.Text>
       </Form.Group>
    )
};




export default Calculator;