import { useEffect, useState } from "react";
import Background from "../components/Background";
import Button from "../components/Button";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { data } from "autoprefixer";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../hooks/schema";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { t } = useTranslation();

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = (data) => {
    const templateParams = {
      phone: data.phone,
      email: data.email,
      message: data.message,
    };

    console.log("Sending email with the following data:", templateParams);

    emailjs
      .send(
        "service_8hutyql",
        "template_ar46vjr",
        templateParams,
        "UZ16V7aOepQVpGrq9"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccess(true);
          reset();
        },
        (err) => {
          console.error("FAILED...", err);
          setError("Failed to send message. Please try again.");
        }
      );
  };

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess(false);
        setError(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success, error]);

  return (
    <section id="contact">
      <Background
        src="/images/banner1.png"
        className="min-h-screen text-color-primary flex gap-5 pb-5 max-w-sm:px-[15px] justify-evenly lg:items-center items-start pt-[40px] flex-wrap-reverse max-w-md:flex-col"
      >
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="ml-auto md:mx-auto flex flex-col gap-5 relative"
          >
            <div className="input-spacing">
              <label htmlFor="phone">{t("Contact.Tel")}</label>

              <input
                {...register("phone")}
                className="input-field"
                placeholder={t("Contact.telPlaceholder")}
                required
              />
              {errors.phone && (
                <p className="text-red-500">{errors.phone.message}</p>
              )}
            </div>
            <div className="input-spacing">
              <label htmlFor="email">{t("Contact.Email")}</label>
              <input
                {...register("email")}
                className="input-field"
                required
                placeholder={t("Contact.emailPlaceholder")}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="input-spacing">
              <label htmlFor="message">{t("Contact.Message")}</label>
              <textarea
                {...register("message")}
                placeholder={t("Contact.messagePlaceholder")}
                className="input-field h-[100px] md:h-[120px]"
                required
              ></textarea>
              {errors.message && (
                <p className="text-red-500">{errors.message.message}</p>
              )}
            </div>
            <div className="ml-auto">
              <Button
                type="submit"
                text={t("Buttons.Send")}
                variant="primary"
                className="py-2 md:py-3 px-10 md:mt-10"
              />
            </div>
            {success && (
              <p className="text-green-600 text-center absolute bottom-[-2rem]">
                Message sent successfully!
              </p>
            )}
            {error && <p className="text-red-500 text-center">{error}</p>}
          </form>
        </div>
        <div className="flex flex-col h-auto md:mb-5 gap-5 lg:gap-[10px] xl:mb-20 max-w-[50vw] sm:max-w-[45vw]">
          <p className="text-style">{t("Contact.Paragraph1")}</p>
          <p className="text-style">{t("Contact.Paragraph2")}</p>
        </div>
      </Background>
    </section>
  );
};

export default Contact;
