
export default function Home() {
  return (
    <div className="w-screen flex flex-col md:flex-row md:gap-10">
      <div className="w-1/2 flex items-center justify-end">
        <p>imagem</p>
      </div>
      <div className="w-1/2 flex flex-col justify-left">
        <p className="text-5xl mb-4 font-bold">Oie!</p>
        <p className="text-3xl/11">Sou Vívian,</p>
        <p className="w-1/2 text-2xl/11">desenvolvedora front-end focada em design de interfaces intuitivas e acessíveis.</p>
      </div>
    </div>
  );
}
