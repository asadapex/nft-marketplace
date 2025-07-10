import Button from "@/components/Button";
import { Logo, UserIcon } from "@/public/icons";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-[50px] py-[27px]">
      <div>
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <div className="flex items-center font-semibold text-white text-[16px] py-[12px] gap-[40px]">
        <Link href="/marketplace">Marketplace</Link>
        <Link href="/rankings">Rankings</Link>
        <Link href="/connect-wall">Connect a wallet</Link>
        <Button
          title="Sign up"
          type="button"
          variant="filled"
          icon={<UserIcon />}
          iconPosition="left"
        />
      </div>
    </header>
  );
};

export default Header;
