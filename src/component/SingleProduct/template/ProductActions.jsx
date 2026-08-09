import React from "react";

export default function ProductActions() {
  const ActionButtons = [
    {
      id: 1,
      title: "مقایسه",
      icon: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21.97 15V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7h6c5 0 7-2 7-7m-7-13v20"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.97 9.44 10.53 12l-2.56 2.56"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </>
      ),
    },
    {
      id: 2,
      title: "اشتراک گذاری",
      icon: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16.96 6.17c2 1.39 3.38 3.6 3.66 6.15m-17.13.05a8.6 8.6 0 0 1 3.6-6.15m1.1 14.72c1.16.59 2.48.92 3.87.92 1.34 0 2.6-.3 3.73-.85M12.06 7.7a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56M4.83 19.92a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56m14.34 0a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </>
      ),
    },
    {
      id: 3,
      title: "اطلاع رسانی",
      icon: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12.02 2.91c-3.31 0-6 2.69-6 6v2.89c0 .61-.26 1.54-.57 2.06L4.3 15.77c-.71 1.18-.22 2.49 1.08 2.93 4.31 1.44 8.96 1.44 13.27 0 1.21-.4 1.74-1.83 1.08-2.93l-1.15-1.91c-.3-.52-.56-1.45-.56-2.06V8.91c0-3.3-2.7-6-6-6Z"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeMiterlimit={10}
              strokeLinecap="round"
            />
            <path
              d="M13.87 3.2a6.75 6.75 0 0 0-3.7 0c.29-.74 1.01-1.26 1.85-1.26s1.56.52 1.85 1.26"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.02 19.06c0 1.65-1.35 3-3 3-.82 0-1.58-.34-2.12-.88a3 3 0 0 1-.88-2.12"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeMiterlimit={10}
            />
          </svg>
        </>
      ),
    },
    {
      id: 4,
      title: "مورد علاقه",
      icon: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 21.65c-.31 0-.61-.04-.86-.13-3.82-1.31-9.89-5.96-9.89-12.83 0-3.5 2.83-6.34 6.31-6.34 1.69 0 3.27.66 4.44 1.84a6.2 6.2 0 0 1 4.44-1.84c3.48 0 6.31 2.85 6.31 6.34 0 6.88-6.07 11.52-9.89 12.83-.25.09-.55.13-.86.13M7.56 3.85c-2.65 0-4.81 2.17-4.81 4.84 0 6.83 6.57 10.63 8.88 11.42.18.06.57.06.75 0 2.3-.79 8.88-4.58 8.88-11.42 0-2.67-2.16-4.84-4.81-4.84-1.52 0-2.93.71-3.84 1.94-.28.38-.92.38-1.2 0a4.77 4.77 0 0 0-3.85-1.94"
              fill="currentColor"
            />
          </svg>
        </>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      {ActionButtons.map((button) => (
        <button
          key={button.id}
          className="flex items-center justify-center gap-2 py-3 font-bold text-Title hover:text-Primary transition-all bg-white border border-Caption/35 rounded-xl cursor-pointer"
        >
          {button.icon}
          {button.title}
        </button>
      ))}
    </div>
  );
}
