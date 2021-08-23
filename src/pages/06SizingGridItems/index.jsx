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
      <Item><Button type="button" onClick={onClick}>Mostrar Grid Repeat com Auto</Button></Item>
      {showItems && (
        <>
          <Item>1</Item>
          <Item>2</Item>
          <Item>3</Item>
          <Item>4</Item>
          <Item>5</Item>
          <Item>6</Item>
          <Item>7</Item>
          <Item>8</Item>
          <Item>9</Item>
          <Item>10</Item>
          <Item>11</Item>
          <Item>12</Item>
        </>
      )}
    </Container>
  );
};
