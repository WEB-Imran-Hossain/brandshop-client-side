import { useNavigate } from "react-router-dom";

const BrandCard = ({ e }) => {
 const navigate=useNavigate();
  const handleCard = () => {
    navigate(`/${e?.brand}/${e?.id}`);
  };

  return (
    <div onClick={handleCard} className="card bg-base-100 shadow-xl cursor-pointer">
      <figure>
        <img className="rounded-t-lg" src={e?.image} />
      </figure>
      <div className="card-body">
        <h2 className="text-3xl font-bold capitalize text-black">{e?.brand}</h2>
      </div>
    </div>
  );
};

export default BrandCard;

