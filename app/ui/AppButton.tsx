'use client';

interface AppButtonprops {
    title: string;
    onClick: () => void;
}

export const AppButton: React.FC<AppButtonprops> = ({ title, onClick }) => {
    return (
        <button
            className="font-medium text-neutral-900 text-sm bg-white rounded-lg border-[1px] border-solid border-neutral-200 px-4 py-2.5 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
            onClick={onClick}
        >
            {title}
        </button>
    );
};
