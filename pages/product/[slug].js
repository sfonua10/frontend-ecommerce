import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useRouter } from "next/router";
import {
  Buy,
  DetailsStyle,
  ProductInfo,
  Quantity,
} from "../../styles/ProductDetails";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useStateContext } from "../../lib/context";

export default function ProductDetails() {
  //Fetch slug
  const { qty, increaseQty, decreaseQty } = useStateContext();

  console.log("whoa", qty);
  const { query } = useRouter();
  //Fetch graphql data
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });
  const { data, fetching, error } = results;
  if (fetching) return <p>Loading</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  const { title, description, image } = data.products.data[0].attributes;
  return (
    <DetailsStyle>
      <img src={image.data.attributes.formats?.small?.url} alt={title} />
      <ProductInfo>
        <h3>{title}</h3>
        <h3>{description}</h3>
        <Quantity>
          <span>Quantity</span>
          <button>
            {" "}
            <AiFillMinusCircle onClick={decreaseQty} />
          </button>
          <p>{qty}</p>
          <button>
            {" "}
            <AiFillPlusCircle onClick={increaseQty} />
          </button>
        </Quantity>
        <Buy>Add to cart</Buy>
      </ProductInfo>
    </DetailsStyle>
  );
}
