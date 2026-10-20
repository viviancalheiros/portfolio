import Image from 'next/image';
import Reveal from '@/components/Reveal';

export default function Home() {
  return (
    <div className='w-full overflow-x-clip bg-slate-50 dark:bg-[#14001A] text-shadow-sm text-purple-dark dark:text-slate-50'>
      <div className="w-full md:h-screen md:mb-0 md:mt-0 flex flex-col md:flex-row items-center gap-10">
        <div className="w-1/2 md:-mt-24 flex items-center justify-end">
          <Reveal direction="left">
              <Image
                src="/home/me.jpg"
                alt="Foto de Vívian"
                width={280}
                height={280}
                style={{ borderRadius: "20px" }}
                className='shadow-lg mt-16 mb-8 border border-2 border-slate-50 md:border-purple-dark'
              />
          </Reveal>
        </div>
        <div className="w-4/5 md:-mt-24 md:w-1/2 flex flex-col justify-left">
          <Reveal direction="right">
            <p className="text-3xl md:text-4xl mb-4 font-semibold">Oie!</p>
            <p className="text-2xl/11 md:text-3xl/12">Sou Vívian,</p>
            <p className="text-lg/8 text-justify md:w-1/2 md:text-2xl/11">desenvolvedora front-end focada em design de interfaces intuitivas e acessíveis.</p>
          </Reveal>
        </div>
      </div>
      <div className='w-full flex flex-col items-center'>
        <div className="w-4/5 md:-mt-12 md:w-2/3 flex flex-col md:flex-row mb-12 mt-12">
          <div className='md:w-1/4'>
            <Reveal direction='left'>
              <p className="text-2xl/11 font-semibold mb-4">
                QUEM SOU EU?
              </p>
            </Reveal>
          </div>
          <div className='md:w-3/4'>
            <Reveal direction='right'>
              <p className="text-lg/8 text-justify">Estudante de Ciência da Computação, técnica em Desenvolvimento de Sistemas e apaixonada por unir design e tecnologia.</p>
              <p className="text-lg/8 text-justify">Tenho experiência com desenvolvimento web e atualmente estou aprofundando meus conhecimentos em Next.js, Laravel e desenvolvimento de APIs, com foco em me tornar uma desenvolvedora full stack.</p>
            </Reveal>
          </div>
        </div>
        <div className='w-4/5 md:w-2/3 flex flex-col md:flex-row mb-12'>
          <div className='md:w-1/4'>
            <Reveal direction='left'>
              <p className="text-2xl/11 font-semibold mb-4">TRAJETÓRIA</p>
            </Reveal>
          </div>
          <ul className="text-lg/8 md:w-3/4">
            <Reveal direction='right'>
              <li>2020 - Formação técnica</li>
              <p className="text-base text-gray-500 dark:text-gray-400 mb-2">Início do curso técnico em Desenvolvimento de Sistemas no Instituto Federal de Alagoas.</p>
              <li>2022 - Primeira experiência profissional</li>
              <p className="text-base text-gray-500 dark:text-gray-400 mb-2">Atuação com UX/UI Design e desenvolvimento front-end.</p>
              <li>2023 - Início da graduação</li>
              <p className="text-base text-gray-500 dark:text-gray-400 mb-2">Início da graduação em Ciência da Computação.</p>
              <li>2025 - Bolsista</li>
              <p className="text-base text-gray-500 dark:text-gray-400 mb-2">Atuação como bolsista na residência em TIC - Easy/Brisa/UFAL.</p>
              <li>2025 - atual - Estagiária full-stack</li>
              <p className="text-base text-gray-500 dark:text-gray-400">Experiência em desenvolvimento de sistemas utilizando Laravel e Blade, correção de bugs e manutenção e otimização de consultas SQL.</p>
            </Reveal>
          </ul>
        </div>
      </div>
    </div>
  );
}
