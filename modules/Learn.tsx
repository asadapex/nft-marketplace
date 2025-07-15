import { Collection, Korzinka, Wallet } from "@/public/icons";

const Learn = () => {
  return (
    <div className="flex flex-col gap-[48px] px-[115px] py-[80px]">
      <div className="flex flex-col gap-[10px] ml-[30px]">
        <h2 className="font-semibold text-[38px]">How it works</h2>
        <p className="font-normal text-[22px]">Find out how to get started</p>
      </div>
      <div className="flex items-center justify-around">
        <div className="w-[330px] h-[439px] flex flex-col items-center bg-[#3B3B3B] rounded-[20px]">
          <div className="w-[250px] h-[250px]">
            <Wallet />
          </div>
          <strong className="mt-[20px] text-[22px] font-semibold text-center">
            Setup Your wallet
          </strong>
          <p className="mt-[10px] text-[16px] font-normal w-[270px] text-center">
            Set up your wallet of choice. Connect it to the Animarket by
            clicking the wallet icon in the top right corner.
          </p>
        </div>

        <div className="w-[330px] h-[439px] flex flex-col items-center bg-[#3B3B3B] rounded-[20px]">
          <div className="w-[250px] h-[250px]">
            <Collection />
          </div>
          <strong className="mt-[20px] text-[22px] font-semibold text-center">
            Create Collection
          </strong>
          <p className="mt-[10px] text-[16px] font-normal w-[270px] text-center">
            Upload your work and setup your collection. Add a description,
            social links and floor price.
          </p>
        </div>

        <div className="w-[330px] h-[439px] flex flex-col items-center bg-[#3B3B3B] rounded-[20px]">
          <div className="w-[250px] h-[250px]">
            <Korzinka />
          </div>
          <strong className="mt-[20px] text-[22px] font-semibold text-center">
            Start Earning
          </strong>
          <p className="mt-[10px] text-[16px] font-normal w-[270px] text-center">
            Choose between auctions and fixed-price listings. Start earning by
            selling your NFTs or trading others.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Learn;
