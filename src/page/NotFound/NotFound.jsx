import React from "react";
import { Link, useNavigate } from "react-router";

export default function NotFound() {
  let navigate = useNavigate();
  return (
    <>
      <section>
        <div className="container flex justify-center gap-8">
          <div className="w-1/2 flex flex-col items-center justify-center gap-6">
            <span className="flex items-center gap-1.5 text-lg font-medium text-Caption">
              متاسفیم
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                className="text-Primary"
              >
                <path
                  d="M15 16s-1.125-1-3-1-3 1-3 1m9-14H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4m-1 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h2 className="flex flex-col items-center text-5xl/relaxed font-bold text-Title">
              صفحه مورد نظر
              <span className="text-Primary">پیدا نشد</span>
            </h2>
            <p className="text-base/relaxed font-medium text-Caption">
              صفحه ای که به دنبال آن هستید وجود ندارد <br /> یا ممکن است آدرس آن
              تغییر کرده باشد.
            </p>
            <div className="flex gap-4">
              <Link to={"/"}>
                <button className="flex items-center justify-center gap-1.5 w-66 py-2.5 font-medium text-base text-white bg-Primary rounded-lg cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21 17.967V10.15c0-1.21-.54-2.357-1.47-3.123l-5-4.118a3.975 3.975 0 0 0-5.06 0l-5 4.118A4.05 4.05 0 0 0 3 10.15v7.817C3 20.194 4.79 22 7 22h10c2.21 0 4-1.806 4-4.033Z"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 18h4"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                    />
                  </svg>
                  بازگشت به صفحه اصلی
                </button>
              </Link>
              <Link onClick={() => navigate(-1)}>
                <button className="flex items-center justify-center gap-1.5 w-66 py-2.5 font-medium text-base text-Title border border-Primary rounded-lg cursor-pointer">
                  بازگشت به صفحه قبل
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-Primary"
                  >
                    <path
                      d="m14 7-4 5 4 5"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
          <div className="w-1/2">
            <img
              src="/image/404.webp"
              className="w-full h-full mix-blend-darken"
              alt="error 404"
            />
          </div>
        </div>
      </section>
    </>
  );
}
