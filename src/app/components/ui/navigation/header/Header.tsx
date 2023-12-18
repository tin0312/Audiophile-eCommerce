import Link from "next/link"

export default function Header(){
    return (
        <div>
            <Link href = "/">
                Home
            </Link>
            <Link href = "/category/headphone">
                Headphones
            </Link>
            <Link href = "/category/earphone">
                Earphone
            </Link>
            <Link href = "/category/speaker">
                Speaker
            </Link>
        </div>
    )
}