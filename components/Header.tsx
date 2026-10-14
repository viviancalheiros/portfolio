import { Inter } from "next/font/google";
import { FolderCode } from 'lucide-react';
import Link from "next/link";

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "600"],
});

export default function Header () {
    return (
        <div className="w-full md:h-16 h-20 bg-purple-dark text-white flex flex-row gap-2 justify-center items-center">
            <Link href="/" className="w-1/2 justify-center md:w-3/4 md:ml-10 md:justify-start flex flex-row h-fit gap-2">
                <span className="font-semibold md:text-2xl md:ml-4">Vívian Calheiros</span>
                <span className={`${inter.className} md:uppercase md:self-end md:block hidden`}>/ Desenvolvedora</span>
            </Link>
            {/* Em telas médias */}
            <div className="w-full md:flex flex-row text-lg text-center gap-10 align-center justify-end mr-16 hidden">
                <button className="hover:border-b-3 hover:mb-1 w-20 cursor-pointer">
                    <Link href="/projects">Projetos</Link>
                </button>
            </div>
            {/* Em telas pequenas: apenas ícones */}
            <div className="md:hidden w-1/2 flex flex-row justify-end mr-10">
                <Link href="/projects"><FolderCode /></Link>
            </div>
        </div>
    )
}