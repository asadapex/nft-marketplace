"use client";
import Button from "@/components/Button";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Logo, UserIcon, UsIcon } from "@/public/icons";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useTransition } from "react";

const Header = () => {
  const t = useTranslations("HeaderItems");
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = e.target.value;
    document.cookie = `NEXT_LOCALE=${selectedLocale}; path=/`;

    startTransition(() => {
      router.replace(pathname, { locale: selectedLocale });
    });
  };

  return (
    <header className="flex justify-between items-center px-[50px] py-[27px]">
      <div>
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <div className="flex items-center font-semibold text-white text-[16px] py-[12px] gap-[40px]">
        <Link href="/marketplace">{t("NavItem1")}</Link>
        <Link href="/rankings">{t("Navitem2")}</Link>
        <Link href="/connect-wall">{t("Navitem3")}</Link>
        <Button
          title={t("Button")}
          type="button"
          variant="filled"
          icon={<UserIcon />}
          iconPosition="left"
        />
        <select onChange={handleLanguageChange} value={locale}>
          <option value="en">EN</option>
          <option value="ru">RU</option>
          <option value="uz">UZ</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
