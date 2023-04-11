import { SVGProps } from "react";

export const ChevronRight = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            fill="none"
            version="1.1"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="m7.3959 5 5 5-5 5"
                stroke="currentColor"
                strokeLinecap="round"
            />
        </svg>
    );
};
