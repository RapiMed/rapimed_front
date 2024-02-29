import {
  GithubLogo,
  InstagramLogo,
} from "phosphor-react";

function Footer() {
  return (
    <>
      <div className="flex justify-center bg-turqueza text-white">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">
            Rapimed - Saúde para Todos | Copyright &copy;
          </p>
          <p className="text-lg">Acesse nossas redes sociais</p>
          <div className="flex gap-2">
            <GithubLogo size={32} weight="bold" />
            <InstagramLogo size={32} weight="bold" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;