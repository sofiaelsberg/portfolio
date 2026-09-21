import Image from "next/image";

export function MacBook({ src, alt }: { src: string; alt: string }) {
  return (
    <div>
      <div className="rounded-[17px_17px_5px_5px] bg-[linear-gradient(160deg,#43434A,#1A1A1E)] p-[13px_13px_15px] shadow-[0_46px_70px_-40px_rgba(20,16,10,.6),inset_0_0_0_1px_rgba(255,255,255,.1)]">
        <div className="flex justify-center pb-2">
          <span className="h-1.25 w-1.25 rounded-full bg-[#5A5A62]" />
        </div>
        <div className="overflow-hidden rounded-md bg-white">
          <Image
            className="shot block aspect-3024/1481 h-auto w-full object-cover object-top"
            src={src}
            alt={alt}
            width={3024}
            height={1481}
          />
        </div>
      </div>
      <div className="relative ml-[-7%] h-2.75 w-[114%] rounded-b-sm bg-[linear-gradient(#D9D6D2,#9C9995)] shadow-[0_12px_22px_-12px_rgba(20,16,10,.5)]">
        <span className="absolute left-1/2 top-0 h-1.25 w-[15%] -translate-x-1/2 rounded-b-[5px] bg-[#8A8784]" />
      </div>
    </div>
  );
}
