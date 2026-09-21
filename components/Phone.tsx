import Image from "next/image";

export function Phone({ src }: { src: string }) {
  return (
    <div className="mx-auto w-[min(300px,80%)] rounded-[48px] bg-[linear-gradient(155deg,#3A3A40,#121215)] p-2.75 shadow-[0_46px_70px_-34px_rgba(20,16,10,.6),inset_0_0_0_1px_rgba(255,255,255,.14)]">
      <div className="overflow-hidden rounded-[38px] bg-white">
        <Image
          src={src}
          alt="Doctio mobile product interface"
          width={1290}
          height={2796}
          className="block aspect-1290/2796 h-auto w-full object-cover object-top"
        />
      </div>
    </div>
  );
}
