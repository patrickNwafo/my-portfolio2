import React from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:patrickchinwafor@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className=" absolute top-10 uppercase tracking-[10px] text-gray-500 md:text-2xl sm:text-lg lg:text-x4xl xl:text-4xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="sm:text-xl md:text-3xl lg:text-4xl font-semibold text-center mt-20">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk</span>
        </h4>
        <div className=" space-y-5">
          <div className=" flex items-center space-x-5 justify-center">
            <AiOutlinePhone
              size={40}
              className="text-[#F7AB0A] h-5 w-5 animate-pulse"
            />
            <p className="sm:text-xl md:text-3xl">+234 703 772 9150</p>
          </div>
          <div className=" flex items-center space-x-5 justify-center">
            <AiOutlineMail
              size={40}
              className="text-[#F7AB0A] h-7 w-7 animate-pulse"
            />
            <p className="sm:text-xl md:text-3xl">patrickchinwafor@gmail.com</p>
          </div>
          <div className=" flex items-center space-x-5 justify-center">
            <FaLocationDot
              size={40}
              className="text-[#F7AB0A] h-7 w-7 animate-pulse"
            />
            <p className="sm:text-xl text-2xl">123 Developer Lane</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput w-[100px] h-[30px] md:w-[250px]"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput w-[95px] h-[30px] md:w-[250px]"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput w-[200px] h-[30px] md:w-[506px]"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput w-[200px] sm:w-[50px] h-[40px] md:w-[506px]"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-3 px-10 rounded-md w-[200px] h-[50px] md:w-[500px] text-black font-bold text-lg "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
