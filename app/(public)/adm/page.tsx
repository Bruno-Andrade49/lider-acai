import NavbarAdm from "../components/navbar/navbarAdm";

const AdmPage = () => {
  return (
    <>
      <NavbarAdm />
      <div className="w-full h-full flex flex-row justify-center items-center bg-gray-100">
        <h1 className="text-4xl font-extrabold text-red-950 shadow-lg p-5 rounded-lg">
          Adm Page
        </h1>
      </div>
    </>
  );
};

export default AdmPage;
