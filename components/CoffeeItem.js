import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function CoffeeItem({ coffee }) {
  const { description, name, type } = coffee;

  return (
    <Card>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{type}</p>
    </Card>
  );
}
