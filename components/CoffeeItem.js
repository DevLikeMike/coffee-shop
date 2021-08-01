import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  position: relative;

  img {
    object-fit: cover;
  }

  .card__content {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, auto);
    grid-gap: 0.75rem;
    padding: 0.5rem;

    // row-start/column-start/row-end/column-end
    .title {
      grid-area: 1/1/2/3;
      font-size: 1.5rem;
      text-align: center;
    }
    .price {
      grid-area: 3/1/4/2;
      text-align: center;
      color: black;
      border: 1px solid black;
      border-radius: 8px;
      padding: 0.5rem;
    }
    .description {
      grid-area: 2/1/3/3;
    }
    .linkTo {
      grid-area: 3/2/4/3;
      background-color: transparent;
      color: brown;
      border: 1px solid brown;
      border-radius: 8px;
      padding: 0.5rem;
      text-align: center;
    }
    .type {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background-color: #fff;
      color: #333;
      padding: 0.5rem;
      border-radius: 8px;
      color: #fff;
      background: rgb(158, 83, 10);
      background: linear-gradient(
        0deg,
        rgba(158, 83, 10, 1) 0%,
        rgba(198, 134, 37, 1) 100%
      );
    }
  }
`;

export default function CoffeeItem({ coffee }) {
  const { description, name, type, image, price, slug } = coffee;

  const clickHandler = (slug) => {
    console.log(slug);
  };

  return (
    <Card>
      <Image
        src={image.formats.large.url}
        alt={image.name}
        width='100%'
        height='200px'
      />
      <div className='card__content'>
        <h3 className='title'>{name}</h3>
        <p className='price'>$ {price}</p>
        <p className='description'>{description}</p>
        <p className='type'>{type}</p>
        <Link href={`/coffees/${slug}`}>
          <a className='linkTo'>Add To Cart</a>
        </Link>
      </div>
    </Card>
  );
}
