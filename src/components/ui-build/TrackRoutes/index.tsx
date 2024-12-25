// app/TrackRoutes.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { addRoute } from "@/store/features/routes-slice";

const TrackRoutes = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();

  useEffect(() => {
    if (pathname) {
      dispatch(addRoute(pathname));
    }
  }, [pathname, dispatch]);

  return null;
};

export default TrackRoutes;
