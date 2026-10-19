import { TiSocialLinkedinCircular } from "react-icons/ti";
import { VscGithub } from "react-icons/vsc";
import Link from "next/link";

export default function Footer () {
    return (
        <div className="w-full h-16 bg-purple-dark dark:bg-[#390047] text-white flex flex-row items-center justify-center gap-2 shadow-lg">
            <Link href={"https://www.linkedin.com/in/v%C3%ADvian-calheiros/"}>
                <TiSocialLinkedinCircular size={44} />
            </Link>
            <Link href="https://github.com/viviancalheiros">
                <VscGithub size={32} />
            </Link>
        </div>
    )
}