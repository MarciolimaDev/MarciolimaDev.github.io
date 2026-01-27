import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 py-20">
                Alguns Projetos
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                <ProjectCard
                    src="/project-recipes.png"
                    title="Django Template + Postgres"
                    description="Projeto de uma página web para uma loja de refeições, utilizando Django como framework backend e Postgres como banco de dados."
                />
                <ProjectCard
                    src="/virtualtips.png"
                    title="Sistema de Aposta Virtual"
                    description="Projeto de um sistema de apostas virtual, utilizando Django como framework backend e Postgres como banco de dados."
                />
                <ProjectCard
                    src="/botpython.jpg"
                    title="Bot Python"
                    description="Projeto de um bot python para o Telegram, utilizando o framework Telegram Bot API."
                />
            </div>
        </div>
    );
};

export default Projects;