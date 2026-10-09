import { Inter } from "next/font/google";
import { House, BookUser, FolderCode } from 'lucide-react';

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "600"],
});

export default function Header () {
    return (
        <div className="w-screen md:h-16 h-20 bg-purple-dark text-white flex flex-col gap-2 justify-center flex-row items-center">
            <div className="w-2/4 justify-center md:w-3/4 md:justify-start flex flex-row h-fit gap-2">
                <span className="font-semibold md:text-2xl md:ml-4">Vívian Calheiros</span>
                <span className={`${inter.className} md:uppercase md:self-end md:block hidden`}>/ Desenvolvedora</span>
            </div>
            {/* Em telas médias */}
            <div className="md:w-1/4 md:grid grid-cols-3 divide-x-2 hidden">
                <button className="flex justify-center">Home</button>
                <button className="flex justify-center">Sobre</button>
                <button className="flex justify-center mr-4">Projetos</button>
            </div>
            {/* Em telas pequenas: apenas ícones */}
            <div className="md:hidden w-2/4 flex flex-row justify-around">
                <House />
                <BookUser />
                <FolderCode />
            </div>
        </div>
    )
}