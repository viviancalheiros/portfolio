import { Inter } from "next/font/google";
import { House, BookUser, FolderCode } from 'lucide-react';
import Link from "next/link";

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
            <div className="md:w-full md:flex flex-row text-center gap-10 align-center justify-end mr-10 hidden">
                <button className="hover:border-b-3 hover:mb-1 w-20 cursor-pointer">
                    <Link href="/">
                        Home
                    </Link>
                </button>
                <button className="hover:border-b-3 hover:mb-1 w-20 cursor-pointer">
                    <Link href="/about">Sobre</Link>
                </button>
                <button className="hover:border-b-3 hover:mb-1 w-20 cursor-pointer">
                    <Link href="/projects">Projetos</Link>
                </button>
                
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