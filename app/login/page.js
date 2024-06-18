import Image from "next/image";
import Form from "@/components/custom ui/Form";

const Login = () => {
  return (
    <main className="h-full flex items-center justify-center">
      <div className="border-2 border-black rounded-[25px] p-6 w-[400px] h-[400px] flex flex-col">
        <Image
          src="/img/abccontrol_logo_desktop.webp"
          alt="ABC Control"
          width={90}
          height={90}
          className="text-center mx-auto mb-4"
        />
        <Form />
      </div>
    </main>
  );
};

export default Login;
