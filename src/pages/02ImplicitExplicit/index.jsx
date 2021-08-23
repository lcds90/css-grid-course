import { useState } from 'react';
import { Button, Container, Item } from './styles';

export default () => {
  const [showItems, setShowItems] = useState(false);

  const onClick = () => {
    setShowItems(!showItems);
  };
  return (
    <Container>
      <Item>Row Explicito</Item>
      <Item>Row Explicito</Item>
      <Item>
        Row Explicito
        <Button type="button" onClick={onClick}>Mostrar Items</Button>
      </Item>
      <Item>Row Explicito</Item>
      {showItems && (
        <>
          <Item>Row Implicito</Item>
          <Item>Row Implicito</Item>
          <Item>Row Implicito</Item>
          <Item>Row Implicito</Item>
        </>
      )}

    </Container>
  );
};
