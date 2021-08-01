import styled from "styled-components";

const Item = styled.div`
  display: flex;
  width: 100%;
  min-height: 10rem;
  gap: 5rem;
`;

export default function CartItem({ item, deleteCartItem }) {
  const { name, quantity, price } = item;

  const clickHandler = (e) => {
    deleteCartItem(item);
  };

  return (
    <Item>
      <p>{name}</p>
      <p>{quantity}</p>
      <p>{price}</p>
      <button onClick={clickHandler}>Delete</button>
    </Item>
  );
}
