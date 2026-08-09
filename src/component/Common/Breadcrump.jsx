import React from "react";
import { Link, useLocation } from "react-router";

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const getDisplayName = (path) => {
    const names = {
      "": "خانه",
      "shop": "فروشگاه",
      "products": "محصولات",
      "list": "علاقه مندی ها",
      "about-us": "درباره ما",
      "blog": "بلاگ",
      "contact-us": "تماس با ما",
      "cart": "سبد خرید",
      "checkout": "تسویه حساب",
    };
    return names[path] || path;
  };
  return (
    <nav className="container bg-white px-3 py-3 rounded-2xl border border-Caption/35">
      <ul className="text-sm flex items-center gap-3 text-Caption">
        <li className="flex items-center gap-1.5">
          <Link to="/">خانه</Link>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="m14 7-4 5 4 5"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={to} className="flex items-center gap-1.5">
              {isLast ? (
                <span>{getDisplayName(value)}</span>
              ) : (
                <>
                  <Link to={to}>{getDisplayName(value)}</Link>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="m14 7-4 5 4 5"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
