import { X } from "@phosphor-icons/react";
import { ReactNode } from "react";

interface IModalPropsPatterProps {
  title?: string;
  onClose?: () => void;
  children: ReactNode;
  footer?: ReactNode;
  isOpen: boolean;
  icon?: ReactNode;
}

export default function ModalPropsPatter({
  children,
  footer,
  onClose,
  title,
  isOpen,
}: IModalPropsPatterProps): JSX.Element | null {
  return isOpen ? (
    <dialog
      open={isOpen}
      className="rounded border-solid border-[#243c5a] border-2 flex w-3/5 m-h-2/5 flex-col "
    >
      {title || onClose ? (
        <div className="flex items-center justify-between min-w-full border-b-2 p-2 mb-2">
          {title ? <p className="text-lg">{title}</p> : null}

          <X onClick={onClose} size={24} className="cursor-pointer" />
        </div>
      ) : null}

      <div className="p-2 overflow-auto h-fit">{children}</div>

      {footer ? (
        <footer className="flex justify-end items-center gap-2 p-2 border-t-2 mt-2">
          {footer}
        </footer>
      ) : null}
    </dialog>
  ) : null;
}
