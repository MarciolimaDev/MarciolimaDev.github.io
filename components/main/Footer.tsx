import React from "react";
import Link from "next/link";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Redes Sociais</div>
                        <Link href="https://www.instagram.com/">
                            <p className="flex flex-row items-center my-[15px] cursor-pointer">
                                <RxInstagramLogo />
                                <span className="text-[15px] ml-[6px]">
                                    Instagram
                                </span>
                            </p>
                        </Link>
                        <Link href="https://www.github.com/">
                            <p className="flex flex-row items-center my-[15px] cursor-pointer">
                                <RxGithubLogo />
                                <span className="text-[15px] ml-[6px]">
                                    GitHub
                                </span>
                            </p>
                        </Link>
                        <Link href="https://www.linkedin.com/">
                            <p className="flex flex-row items-center my-[15px] cursor-pointer">
                                <RxLinkedinLogo />
                                <span className="text-[15px] ml-[6px]">
                                    Linkedin
                                </span>
                            </p>
                        </Link>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Sobre</div>

                        <Link href="/about">
                            <p className="flex flex-row items-center my-[15px] cursor-pointer">
                                <span className="text-[15px] ml-[6px]">
                                    Sobre mim
                                </span>
                            </p>
                        </Link>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className="text-[15px] ml-[6px]">
                                contato.cioli@gmail.com
                            </span>
                        </p>
                    </div>
                </div>

                <div className="mb-[20px] text-[15px] text-center">
                    &copy; Cioli 2026 Inc. Todos os direitos reservados
                </div>
            </div>
        </div>
    );
};

export default Footer;