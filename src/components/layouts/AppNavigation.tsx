"use client";

import Link from "next/link";

import {
  APP_ROUTES,
} from "@/config/routes";

export default function AppNavigation() {
  return (
    <nav className="border-b border-zinc-800">

      <div className="flex gap-6 overflow-x-auto p-4">

        {APP_ROUTES.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className="text-sm text-zinc-400 hover:text-white whitespace-nowrap"
          >
            {route.title}
          </Link>
        ))}

      </div>

    </nav>
  );
}