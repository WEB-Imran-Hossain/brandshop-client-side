import { useLoaderData, useParams } from "react-router-dom";

const BrandProduct = (e) => {
    const singleBrandDetailData = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const brandDetails = singleBrandDetailData.find(brandDetails => brandDetails.id === idInt);
    console.log(brandDetails);



  return (
    <div className="mt-20 lg:w-3/4 w-[90vw] mx-auto">
      <div>
        <figure>
          <img className=" rounded-lg w-full" src={brandDetails.image} />
        </figure>
        <div className="absolute w-full lg:h-28 bottom-0 left-0 rounded-b-lg"></div>
      </div>

      <div>
        <h2 className="text-4xl font-bold text-[#0B0B0B] mt-12">
          {brandDetails.name}
        </h2>
        <p className="text-base font-normal text-[#0b0b0bb3] text-justify mt-3 mb-32">
          {brandDetails.short_description}
        </p>
      </div>
    </div>
  );
};

export default BrandProduct;