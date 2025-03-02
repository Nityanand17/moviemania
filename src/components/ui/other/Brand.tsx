import Link from "next/link";
import { Saira } from "@/utils/fonts";
import { GiClapperboard } from "react-icons/gi";

export default function Brand() {
  return (
    <div>
      <Link href="/" className={Saira.className} style={{ fontWeight: 600, fontSize: 30 }}>
        <span className="flex items-center tracking-widest">
          MOVIE{" "}
          <span>
            <GiClapperboard className="size-full px-[2px] text-primary" />
          </span>{" "}
          MANIA
        </span>
      </Link>
    </div>
  );
}
