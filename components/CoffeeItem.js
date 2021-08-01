import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Card = styled.a`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin: 1rem 0;
  position: relative;
  padding: 0.5rem;
  gap: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 10rem auto;
    text-align: left;
  }

  img {
    object-fit: cover;
    border-radius: 50%;
    grid-column-start: 1;
    grid-column-end: 2;
  }

  .card__content {
    grid-column-start: 2;
    grid-column-end: 3;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 0 0.5rem;
  }
`;

export default function CoffeeItem({ coffee }) {
  const { description, name, type, image, price, slug } = coffee;

  return (
    <Link href={`/coffees/${slug}`}>
      <Card>
        <Image
          src={image.formats.large.url}
          alt={image.name}
          width='150'
          height='150'
          className='thumbnail'
          layout='fixed'
        />
        <div className='card__content'>
          <h3 className='title'>{name}</h3>
          <p className='description'>{description}</p>
          <p className='price'>$ {price}</p>
          <p className='type'>{type}</p>
        </div>
      </Card>
    </Link>
  );
}
