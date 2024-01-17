/*This component is to display support-navigation */
import ButtonArrow from "../ui/button/ButtonArrow";
import Link from "next/link";
import Image from "next/image";

export default function SupportNav() {
  return (
    <div>
      <div className="flex w-4/5 mx-auto gap-4 justify-between">
        <div className="relative flex flex-col gap-3 items-center px-20 pt-20 pb-7 bg-light-300">
          <Image src = "/assets/images/components/Categories/image-category-thumbnail-headphones.png" 
          width = {150} 
          height = {160} 
          alt = "headphone-thumbnail"
          className="absolute bottom-24"
          />
          <h3 className="font-bold">HEADPHONES</h3>
          <Link href="/category/headphones">
            <ButtonArrow label={"SHOP"} />
          </Link>
        </div>

        <div className="relative flex flex-col gap-3 items-center px-20 pt-20 pb-7 bg-light-300">
        <Image src = "/assets/images/components/Categories/image-category-thumbnail-speakers.png" 
          width = {150} 
          height = {160} 
          alt = "speaker-thumbnail"
          className="absolute bottom-24"
          />
          <h3 className="font-bold">SPEAKERS</h3>
          <Link href="/category/speakers">
            <ButtonArrow label={"SHOP"} />
          </Link>
        </div>

        <div className="relative flex flex-col gap-3  items-center px-20 pt-20 pb-7 bg-light-300">
        <Image src = "/assets/images/components/Categories/image-category-thumbnail-earphones.png" 
          width = {150} 
          height = {160} 
          alt = "earphone-thumbnail"
          className="absolute bottom-24"
          />
          <h3 className="font-bold" >EARPHONES</h3>
          <Link href="/category/speakers">
            <ButtonArrow label={"SHOP"} />
          </Link>
        </div>

      </div>
    </div>
  );
}
