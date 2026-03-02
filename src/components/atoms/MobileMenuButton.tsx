import { CgMenu, CgClose } from "react-icons/cg";


export const MobileMenuButton = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      type="button"
      aria-label="Toggle Menu"
      className="lg:hidden hover:cursor-pointer"
      onClick={onClick}
    >
      {isOpen ? (
        <CgClose className="w-6 h-6" />
      ) : (
        <CgMenu className="w-6 h-6" />
      )}
    </button>
  );
};
