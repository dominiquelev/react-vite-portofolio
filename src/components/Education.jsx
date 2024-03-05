// eslint-disable-next-line react/prop-types
const CardEducation = ({ src, alt, title }) => {
  return (
    <div className=" shadow-xl w-[300] h-[250] justify-between text-center">
      <div className="w-[300px] h-[250px] mx-auto ">
        <img src={src} alt={alt} className="w-full h-full object-fill" />
      </div>
      <h3 className=" text-yellow-500 text-sm">{title}</h3>
    </div>
  );
};

function Education() {
  return (
    <>
      <div className="container mx-auto px-4 mt-8">
        <h1 className="justify-center text-center text-yellow-600 font-extrabold text-5xl">
          Education
        </h1>

        <div className="grid grid-cols-3 gap-4 my-8">
          <div>
            <CardEducation
              src="https://lh5.googleusercontent.com/p/AF1QipPk6xcc_2fiQ55pIYTOxAlKsren3YHPiVOXDo6y=w2048-h2048-k-no"
              alt="SMA Santa Ursula, Jakarta"
              title="SMA SANTA URSULA(Jakarta)"
            />
          </div>
          <div>
            <CardEducation
              src="https://asset.kompas.com/crops/jhXZzob9d3KxQMwjIeSLvwN4QmI=/16x22:596x408/750x500/data/photo/2023/11/21/655c1999eed5f.jpg"
              alt="Universitas Ciputra, Surabaya"
              title="UNIVERSITAS CIPUTRA(Surabaya)"
            />
          </div>
          <div>
            <CardEducation
              src="https://purwadhika.com/_next/image?url=https%3A%2F%2Fcms.purwadhika.com%2Fuploads%2Fjogja_28a5fc9c44.jpg&w=1920&q=75"
              alt="Purwadhika Yogyakarta"
              title="Purwadhika Digital Technology School(Yogyakarta)"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
