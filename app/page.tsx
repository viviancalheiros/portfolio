import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-screen flex flex-col md:flex-row items-center gap-10">
      <div className="w-1/2 flex items-center justify-end">
        <div className='rounded-xl'>
          <Image 
            src="/home/me.jpg" 
            alt="Foto de Vívian" 
            width={300} height={300} 
            style={{ borderRadius: "20px", }}
          />
        </div>
      </div>
      <div className="w-1/2 flex flex-col justify-left">
        <p className="text-3xl md:text-5xl mb-4 font-bold">Oie!</p>
        <p className="text-2xl/11 md:text-3xl/11">Sou Vívian,</p>
        <p className="text-xl/9 md:w-1/2 md:text-2xl/11">desenvolvedora front-end focada em design de interfaces intuitivas e acessíveis.</p>
      </div>
    </div>
  );
}
