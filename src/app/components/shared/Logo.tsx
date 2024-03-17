import Image from "next/image";

export default function Logo() {
  return (  
      <div>
        <Image src="/assets/images/components/Logo/logo.svg" alt="shop-logo" width={120} height={120}/>
      </div>
  );
}
