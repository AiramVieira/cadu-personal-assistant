import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import './FunctionList.css';

function FunctionList(props) {
  const commands = props.commands;
  return (
    <div className='FunctionList'>
      <Button color='primary' id='toggler' style={{ marginBottom: '1rem' }}>
        Lista de funções do pai
      </Button>
      <UncontrolledCollapse toggler='#toggler'>
        <Card>
          <CardBody>
            {commands.map((c, index) => {
              return (
                <ul key={index} className='list' >
                  <div className='list__index'>{index + 1}</div>
                  <li key={index} className='list__item'>
                    {c.command.join(' ou ')}
                  </li>
                </ul>
              );
            })}
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>
  );
}

export default FunctionList;
