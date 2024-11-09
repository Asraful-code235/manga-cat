"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-white">
      <header className="container flex justify-between p-4">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
        </Link>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            <Image
              src={"/owk.png"}
              width={64}
              height={64}
              alt="owl"
              className="w-12 h-12 max-lg:w-8 max-lg:h-8"
            />
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            <Image
              src={"/telegram.png"}
              width={64}
              height={64}
              alt="owl"
              className="w-12 h-12 max-lg:w-8 max-lg:h-8"
            />
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            <Image
              src={"/x.png"}
              width={64}
              height={64}
              alt="owl"
              className="w-12 h-12 max-lg:w-8 max-lg:h-8"
            />
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            <Image
              src={"/buy.png"}
              width={64}
              height={64}
              alt="owl"
              className="w-12 h-12 max-lg:w-8 max-lg:h-8"
            />
          </Link>
        </div>
      </header>
      <main className="container flex flex-col items-center px-4">
        <div className="mb-8 grid w-full max-w-4xl gap-4 grid-cols-2">
          <Image
            src="/grid1.png"
            alt="Manga panel 1"
            width={500}
            height={300}
            className="w-full rounded-lg object-cover h-full "
          />
          <Image
            src="/grid2.png"
            alt="Manga panel 2"
            width={500}
            height={300}
            className="w-full rounded-lg object-cover h-full"
          />
        </div>
        <h1 className="mb-12 text-center font-bold uppercase tracking-wider md:text-4xl">
          How to Buy Manga Cat
        </h1>
        <Image
          src="/grid3.png"
          alt="Manga hallway scene"
          width={800}
          height={400}
          className="w-full max-w-4xl rounded-lg object-cover mt-[200px] lg:mt-[282px]"
        />
      </main>
      <footer className="container mt-8 flex justify-center p-4">
        <Link href="#" className="text-gray-600 hover:text-gray-900">
          <Image
            src={"/buy.png"}
            width={64}
            height={64}
            alt="owl"
            className="w-12 h-12 max-lg:w-8 max-lg:h-8"
          />
        </Link>
      </footer>
    </div>
  );
}
