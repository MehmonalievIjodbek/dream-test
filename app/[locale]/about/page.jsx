import { getI18n } from "@/locales/server";

// export async function generateMetadata() {
//   const t = await getI18n();

//   return { title: t("about") };
// }

const AboutPage = async () => {
  const t = await getI18n();
  return (
    <>
      <div className="container bg-white mt-[100px]">
        <div className=" sm:mt-[200px] mt-[100px] sm:mx-24 mx-5 mb-[200px]">
          <div
            data-aos="fade-up"
            className="text-[#b99a56] xs:text-[72px] text-[35px] sm:mb-24 mb-16 font-intro font-normal"
          >
            <h1 className="leading-4">{t("our")}</h1>
            <h1>{t("price")}</h1>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-y-[50px]  mx-[50px] sm:mx-0">
            <div className="flex gap-x-10 items-center">
              <img
                width={60}
                height={45}
                src="/assets/images/good.png"
                alt=""
              />
              <p>{t("quality")}</p>
            </div>
            <div className="flex gap-x-10 items-center">
              <img width={60} height={45} src="/assets/images/22.png" alt="" />
              <p>{t("partner")}</p>
            </div>
            <div className="flex gap-x-10 items-center">
              <img width={60} height={45} src="/assets/images/3.png" alt="" />
              <p>{t("consumer")}</p>
            </div>
            <div className="flex gap-x-10 items-center">
              <img width={60} height={45} src="/assets/images/4.png" alt="" />
              <p>{t("development")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
