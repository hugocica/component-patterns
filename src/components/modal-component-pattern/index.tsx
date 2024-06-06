import { ReactNode } from "react";
import { X } from "@phosphor-icons/react";

export function onClose() {
  alert("fechou outro coisa");
}

export function Root({ children }: { children: ReactNode }) {
  return (
    <dialog
      open
      className="rounded border-solid border-[#243c5a] border-2 flex w-3/5 m-h-2/5 flex-col"
    >
      {children}
    </dialog>
  );
}

export function Header({ children }: { children: ReactNode }): JSX.Element {
  return (
    <div className="flex items-center justify-between min-w-full border-b-2 p-2 mb-2">
      {children}
    </div>
  );
}

export function HeaderTitle({ children }: { children: ReactNode }) {
  return <p className="text-lg flex items-center gap-1">{children}</p>;
}

export function HeaderCloseButton({ onClick }: { onClick: () => void }) {
  return (
    <X
      onClick={() => {
        onClick();
        onClose();
      }}
      size={24}
      className="cursor-pointer"
    />
  );
}

export function Body({ children }: { children: ReactNode }) {
  return <div className="p-2 overflow-auto h-fit">{children}</div>;
}

export function Footer({ children }: { children: ReactNode }) {
  return (
    <footer className="flex justify-end items-center gap-2 p-2 border-t-2 mt-2">
      {children}
    </footer>
  );
}

export default { Root, Header, HeaderCloseButton, HeaderTitle, Body, Footer };
