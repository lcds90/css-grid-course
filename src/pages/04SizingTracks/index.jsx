import { useState } from 'react';
import { Button, Container, Item } from './styles';

export default () => {
  const [showItems, setShowItems] = useState(false);

  const onClick = () => {
    setShowItems(!showItems);
  };

  return (
    <Container>
      <Item>Normal</Item>
      <Item><Button type="button" onClick={onClick}>Mostrar Items</Button></Item>
      {showItems && (
        <>
          <Item>Auto Flow</Item>
          <Item>Auto Flow</Item>
          <Item>Auto Flow</Item>
          <Item>Auto Flow</Item>
          <Item>Auto Flow</Item>
          <Item>Auto Flow</Item>
          <Item>Auto Flow</Item>
        </>
      )}
    </Container>
  );
};
