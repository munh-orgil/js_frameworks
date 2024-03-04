import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    onClick: () => void;
    type?: string;
}

const CustomButton = ({ children, onClick, type = "primary" }: Props) => {
    return (
        <button className={"btn btn-" + type} onClick={onClick}>
            {children}
        </button>
    );
};

export default CustomButton;
