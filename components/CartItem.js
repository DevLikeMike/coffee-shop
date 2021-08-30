import Image from "next/image";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0.5rem;
  gap: 1rem;
  min-height: 10rem;

  .content-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.25rem;
    flex: 1;
    max-width: 20rem;

    h2 {
      font-size: 1.2rem;
      text-align: center;
    }

    button {
      background-color: transparent;
      border: #333 1px solid;
      border-radius: 8px;
      padding: 0.5rem 1rem;
      width: 100%;

      &:hover {
        background-color: #333;
        color: #fff;
      }
    }
  }

  .thumbnail {
    border-radius: 50%;
  }
`;

export default function CartItem({ item, deleteCartItem }) {
  const { name, quantity, price, size, image } = item;

  const clickHandler = (e) => {
    deleteCartItem(item);
  };

  return (
    <Item>
      <div className='image-container'>
        <Image
          src={image.formats.thumbnail.url}
          alt={image.name}
          width='100'
          height='100'
          className='thumbnail'
          layout='fixed'
        />
      </div>
      <div className='content-container'>
        <h2>{name}</h2>
        <p>Size - {size}</p>
        <p>Quantity - {quantity}</p>
        <p>Subtotal - ${price * quantity}</p>
        <button onClick={clickHandler}>Delete</button>
      </div>
    </Item>
  );
}
