import { useParams } from "react-router-dom";

function BidPage() {
  const { id } = useParams();
  return <h2>Placing a bid for service ID: {id}</h2>;
}

export default BidPage;
