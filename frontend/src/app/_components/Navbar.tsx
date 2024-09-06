"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between py-4 bg-[#835562] shadow-md">
      <ul className="flex space-x-6">
        <li className="font-bold text-black">
          <Link
            className={`hover:text-white link ${
              pathname === "/" ? "active" : ""
            }`}
            href="/"
          >
            Line Chart
          </Link>
        </li>
        <li className="font-bold text-black">
          <Link
            className={`hover:text-white link ${
              pathname === "/pie" ? "active" : ""
            }`}
            href="/pie"
          >
            Pie Chart
          </Link>
        </li>
        <li className="font-bold text-black">
          <Link
            className={`hover:text-white link ${
              pathname === "/bar" ? "active" : ""
            }`}
            href="/bar"
          >
            Bar Chart
          </Link>
        </li>
        <li className="font-bold text-black">
          <Link
            className={`hover:text-white link ${
              pathname === "/candlestick" ? "active" : ""
            }`}
            href="/candlestick"
          >
            CandleStick Chart
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
