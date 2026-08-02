import React from "react";
import { Link } from "react-router";

export default function TopHeader() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Link to={"/"}>
          <img src="/image/logo.webp" alt="Digi Market" className="w-28" />
        </Link>
        <div className="flex items-center pl-1 pr-3 w-100 max-w-xl h-12 bg-[#FAFAFA] border border-Caption/25 rounded-xl overflow-hidden">
          <button className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11.5 21.75c-5.65 0-10.25-4.6-10.25-10.25S5.85 1.25 11.5 1.25s10.25 4.6 10.25 10.25-4.6 10.25-10.25 10.25m0-19c-4.83 0-8.75 3.93-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.93 8.75-8.75-3.92-8.75-8.75-8.75m10.5 20c-.19 0-.38-.07-.53-.22l-2-2a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22"
                fill="currentColor"
              />
            </svg>
          </button>
          <input
            type="text"
            placeholder="جستجو در کالا، برند و ..."
            className="flex-1 h-full px-4 text-sm outline-none placeholder:text-gray-400"
          />
          <button className="flex items-center justify-center p-2 bg-white border border-Caption/25 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M22 7.25h-6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75m-16 0H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75"
                fill="currentColor"
              />
              <path
                d="M10 10.75A4.26 4.26 0 0 1 5.75 6.5 4.26 4.26 0 0 1 10 2.25a4.26 4.26 0 0 1 4.25 4.25A4.26 4.26 0 0 1 10 10.75m0-7c-1.52 0-2.75 1.23-2.75 2.75S8.48 9.25 10 9.25s2.75-1.23 2.75-2.75S11.52 3.75 10 3.75m12 14.5h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75m-14 0H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75"
                fill="currentColor"
              />
              <path
                d="M14 21.75a4.26 4.26 0 0 1-4.25-4.25A4.26 4.26 0 0 1 14 13.25a4.26 4.26 0 0 1 4.25 4.25A4.26 4.26 0 0 1 14 21.75m0-7c-1.52 0-2.75 1.23-2.75 2.75s1.23 2.75 2.75 2.75 2.75-1.23 2.75-2.75-1.23-2.75-2.75-2.75"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button className="flex items-center justify-center w-12 h-12 text-Primary border border-Caption/25 rounded-lg cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18.19 17.75H7.54c-.99 0-1.94-.42-2.61-1.15A3.57 3.57 0 0 1 4 13.9l.83-9.96c.03-.31-.08-.61-.29-.84s-.5-.35-.81-.35H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.74c.73 0 1.42.31 1.91.84.27.3.47.65.58 1.04h12.49c1.01 0 1.94.4 2.62 1.12.67.73 1.01 1.68.93 2.69l-.54 7.5c-.11 1.83-1.71 3.31-3.54 3.31M6.28 4.62l-.78 9.4c-.05.58.14 1.13.53 1.56s.93.66 1.51.66h10.65c1.04 0 1.98-.88 2.06-1.92l.54-7.5a2.04 2.04 0 0 0-2.06-2.21H6.28zm9.97 18.13c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m0-2.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5m-8 2.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m0-2.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5"
              fill="currentColor"
            />
            <path
              d="M21 8.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
          </svg>
        </button>
        <button className="flex items-center gap-2.5 px-4 h-12 font-bold text-Title border border-Caption/25 rounded-lg cursor-pointer">
          ورود / ثبت نام
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
            className="-rotate-90"
          >
            <path
              d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75m-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25z"
              fill="currentColor"
            />
            <path
              d="M15 10.26c-.19 0-.38-.07-.53-.22L12 7.57l-2.47 2.47c-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06l3-3c.29-.29.77-.29 1.06 0l3 3c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22"
              fill="currentColor"
            />
            <path
              d="M12 15.26c-.41 0-.75-.34-.75-.75v-8c0-.41.34-.75.75-.75s.75.34.75.75v8c0 .42-.34.75-.75.75m0 2.97c-2.11 0-4.23-.34-6.24-1.01a.753.753 0 0 1-.47-.95c.13-.39.56-.61.95-.47 3.72 1.24 7.81 1.24 11.53 0 .39-.13.82.08.95.47s-.08.82-.47.95c-2.02.68-4.14 1.01-6.25 1.01"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
