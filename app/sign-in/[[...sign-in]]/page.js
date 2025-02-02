import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import banner from "../../../public/uber_banner.png";

export default function Page() {
  return (
    <>
      <div>
        <Image
          src={banner}
          alt="banner"
          width={900}
          height={1000}
          className="object-contain h-full w-full"
        />
        <div className="absolute top-4 right-1">
          <SignIn />;
        </div>
      </div>
    </>
  );
}
