import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <div>
        <Image src="/assets/images/components/Logo/logo.svg" alt="shop-logo" width={120} height={120}/>
      </div>
    </Link>
  );
}
