import {
  Button,
  Card,
  Input,
  Typography,
} from "@material-tailwind/react";

export function Contact() {
  return (
    <div className="sm:m-10 bg-verde-banner p-4 sm:rounded-[30px]">
      <Card
        placeholder="oi"
        color="transparent"
        shadow={true}
        className="flex flex-col items-center m-auto  bg-branco max-w-[500px]"
      >
        <Typography placeholder="oi" variant="h4" color="blue-gray">
          Entre em Contato!
        </Typography>
        <form className="mt-8 mb-2 w-80  sm:w-[40%] ">
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              placeholder="oi"
              variant="h6"
              color="blue-gray"
              className="-mb-3"
            >
              Seu Nome
            </Typography>
            <Input
              crossOrigin={undefined}
              size="lg"
              placeholder="John Doe"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography
              placeholder="oi"
              variant="h6"
              color="blue-gray"
              className="-mb-3"
            >
              Seu Email
            </Typography>
            <Input
              crossOrigin={undefined}
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

            <Typography
              placeholder="oi"
              variant="h6"
              color="blue-gray"
              className="-mb-3"
            >
              Celular
            </Typography>
            <Input
              crossOrigin={undefined}
              size="lg"
              placeholder="(xx)-xxxx-xxxx"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

            <Typography
              placeholder="oi"
              variant="h6"
              color="blue-gray"
              className="-mb-3"
            >
              Mensagem
            </Typography>
            <Input
              crossOrigin={undefined}
              size="lg"
              placeholder="text"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Button className="mt-6 bg-turqueza" fullWidth placeholder="oi">
            Enviar
          </Button>
      
        </form>
      </Card>
    </div>
  );
}

export default Contact;
