import Image from "next/image";
import logo from "@/app/assets/images/logo.svg";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import icon1 from "@/app/assets/images/icon-todo.svg";

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
  iconImage?: string;
};
const navItem: NavItem[] = [
  {
    label: "Feature",
    link: "#",
    children: [
      {
        label: "Todo List",
        link: "#",
        iconImage: icon1
      },
      {
        label: "Calendar",
        link: "#",
        iconImage: icon1
      },
      {
        label: "Reminder",
        link: "#",
        iconImage: icon1
      },
      {
        label: "Planning",
        link: "#",
        iconImage: icon1
      }
    ]
  },
  {
    label: "Compnay",
    link: "#",
    children: [
      {
        label: "Todo List",
        link: "#"
      },
      {
        label: "Todo List",
        link: "#"
      },
      {
        label: "Todo List",
        link: "#"
      }
    ]
  },
  {
    label: "Career",
    link: "#"
  },
  {
    label: "About",
    link: "#"
  }
];

const Navbar = () => {
  return (
    <div className="mx-auto flex w-full max-w-2xl justify-between px-4 py-5 text-sm">
      {/* left side */}
      <section className="flex items-center gap-10">
        {/* logo */}
        <Image src={logo} alt="Company Logo" />
        {/* navitems */}
        <div className="flex items-center gap-4 transition-all">
          {navItem.map((d, i) => (
            <div key={i} className="relative group px-2 py-3 transition-all">
              <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black">
                <span>{d.label}</span>
                {d.children && (
                  <IoIosArrowDown className="group-hover:rotate-180 transition-all" />
                )}
              </p>
              {/* dropMenu */}
              {d.children && (
                <div className="absolute top-10 right-0 hidden w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-sm transition-all group-hover:flex">
                  {d.children.map((ch, j) => (
                    <Link
                      href={ch.link ?? "#"}
                      key={j}
                      className="flex items-center pl-6 py-1 pr-8 cursor-pointer text-neutral-400 hover:text-black"
                    >
                      {/* image section */}
                      {ch.iconImage && (
                        <Image
                          src={ch.iconImage}
                          alt={`${ch.label}-icon`}
                          width={16}
                          height={16}
                        />
                      )}
                      {/* items */}
                      <span className="whitespace-nowrap pl-3">{ch.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="flex items-center gap-8">
        <button className="h-fit text-neutral-400 transition-all capitalize hover:text-black/90">
          login
        </button>
        <button className="h-fit text-neutral-400 transition-all capitalize hover:text-black/90 rounded-xl border-2 border-neutral-400 px-4 py-2">
          register
        </button>
      </section>
    </div>
  );
};

export default Navbar;
