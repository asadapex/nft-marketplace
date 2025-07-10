import Button from "@/components/Button";
import {
  DiscordIcon,
  InstagramIcon,
  Logo,
  TwitterIcon,
  YoutubeIcon,
} from "@/public/icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full px-[115px] py-[27px] bg-[#3B3B3B]">
      <div className="flex justify-between items-center w-full border-b-[1px] pb-[30px] border-[#858584]">
        <div className="pt-[40px] flex flex-col gap-[30px]">
          <Logo />
          <div className="flex flex-col gap-[20px]">
            <p className="w-[238px] text-[#CCCCCC]">
              NFT marketplace UI created with Anima for Figma.
            </p>
            <div className="flex flex-col gap-[15px]">
              <p className="text-[#CCCCCC]">Join our community</p>
              <div className="flex items-center gap-2.5">
                <Link href={"https://discord.com/"}>
                  <DiscordIcon />
                </Link>
                <Link href={"https://twitter.com/"}>
                  <YoutubeIcon />
                </Link>
                <Link href={"https://twitter.com/"}>
                  <TwitterIcon />
                </Link>
                <Link href={"https://twitter.com/"}>
                  <InstagramIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-[15px] flex flex-col gap-[30px]">
          <h3 className="font-bold text-[22px]">Explore</h3>
          <div className="flex flex-col gap-[20px]">
            <p className="text-[#CCCCCC]">Marketplace</p>
            <p className="text-[#CCCCCC]">Rankings</p>
            <p className="text-[#CCCCCC]">Connect a wallet</p>
          </div>
        </div>

        <div className="pt-[15px] flex flex-col gap-[30px]">
          <h3 className="font-bold text-[22px]">Join our weekly digest</h3>

          <div className="flex flex-col gap-[20px]">
            <p className="w-[330px] text-[#CCCCCC]">
              Get exclusive promotions & updates straight to your inbox.
            </p>

            <div className="flex items-center relative">
              <input
                className="bg-white py-[15px] outline-none px-[20px] rounded-[20px] text-[#2B2B2B]"
                type="email"
                placeholder="Enter your email here"
              />
              <Button
                extraClass="absolute left-45"
                title="Subscribe"
                type="button"
                variant="filled"
              />
            </div>
          </div>
        </div>
      </div>

      <p className="text-[#cccccc] pt-[20px] pb-[40px]">
        Ⓒ NFT Market. Use this template freely.
      </p>
    </footer>
  );
};

export default Footer;
