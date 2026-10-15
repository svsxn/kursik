import { UploadIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="my-4 space-y-6">
      <div className="bg-neutral-900 rounded-xl px-4 py-3 flex flex-col items-center gap-4 text-center">
        <div className="flex flex-col items-center gap-3">
          <div className="size-16 bg-yellow-300 rounded-full flex items-center justify-center">
            <UploadIcon color="black" size={28} />
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-xl max-w-76">
              Wklej lub wybierz zrzut ekranu z ofertą Glovo
            </p>
            <p className="text-neutral-400 text-[15px] max-w-68 leading-5">
              Automatycznie odczytamy kwotę, dystans i adresy
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <button className="bg-yellow-300 text-background text-lg font-semibold w-full rounded-[14px] h-14">
            Wybierz screenshot
          </button>
          <div className="flex justify-around items-center gap-2">
            <div className="bg-neutral-800 h-0.5 w-full" />
            <p className="text-neutral-400 text-[15px]">lub</p>
            <div className="bg-neutral-800 h-0.5 w-full" />
          </div>
          <button className="bg-neutral-800 text-lg font-semibold w-full rounded-[14px] h-14">
            Wklej ze schowka
          </button>
        </div>
      </div>
      <div className="flex justify-between bg-neutral-900 rounded-xl px-4 py-3">
        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <p className="font-semibold">Ostatnia analiza</p>
            <p className="text-xl font-semibold">12,50 zł</p>
            <div className="bg-green-400 rounded-lg text-background text-lg text-center px-1 font-semibold">
              Opłacalne
            </div>
            <div className="flex items-center gap-2 text-neutral-400">
              <p>4,2 km</p>
              <div className="size-1 bg-neutral-400 rounded-full" />
              <p>22 min</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="bg-white flex-1 w-22 rounded-md" />
          <p className="text-sm text-neutral-400">10:24</p>
        </div>
      </div>
    </div>
  );
}
