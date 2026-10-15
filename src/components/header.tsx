import { SettingsIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="size-5 bg-yellow-300 rounded-md" />
        <p className="text-xl font-bold">Kursik</p>
      </div>
      <SettingsIcon size={20} className="cursor-pointer" />
    </header>
  );
}
