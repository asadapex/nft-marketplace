import Button from "@/components/Button";
import { GetStartedIcon } from "@/public/icons";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Hero = () => {
  const t = useTranslations("HeroItems");
  return (
    <div className="max-xl:w-[90%] max-xl:flex-col max-xl:items-center max-xl:gap-5 px-[115px] py-[80px] flex items-center justify-between mt-[90px]">
      <div className="max-xl:flex max-xl:items-center max-xl:flex-col max-xl:text-center">
        <div className="flex flex-col gap-[20px]">
          <h1 className="w-[510px] text-[64px] font-semibold leading-[70px]">
            {t("Header")}
          </h1>
          <p className="w-[510px] text-[22px] font-normal">{t("Desc")}</p>
        </div>
        <Button
          title={t("Button")}
          variant={"filled"}
          type="button"
          icon={<GetStartedIcon />}
          iconPosition="left"
          extraClass="mt-[30px]"
        />

        <div className="mt-[30px] flex items-center gap-[30px]">
          <div>
            <h3 className="text-[28px] font-bold">240k+</h3>
            <span className="font-[23px]">{t("TSale")}</span>
          </div>

          <div>
            <h3 className="text-[28px] font-bold">100k+</h3>
            <span className="font-[23px] f">{t("Auction")}</span>
          </div>

          <div>
            <h3 className="text-[28px] font-bold">240k+</h3>
            <span className="font-[23px] f">{t("Artists")}</span>
          </div>
        </div>
      </div>

      <div className="w-[510px] h-[510px] bg-[#3B3B3B] rounded-[20px]">
        <Image
          className="w-[510px] h-[401px] object-cover rounded-tl-[20px] rounded-tr-[20px]"
          alt="Hero img"
          src={"/images/hero-img.png"}
          priority
          width={510}
          height={401}
        />

        <div className="px-[22px] py-[20px] flex flex-col gap-[10px]">
          <strong className="font-semibold text-[22px] ">Space Walking</strong>
          <div className="flex items-center gap-[12px]">
            <Image
              className="w-[24px] h-[24px] object-cover rounded-full"
              alt="Hero ava"
              src={"/images/hero-ava.png"}
              width={24}
              height={24}
            />
            <span className="font-normal text-[16px]">Animakid</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
