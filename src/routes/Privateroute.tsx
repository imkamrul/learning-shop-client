// import { useAppSelector } from "@/redux/hook";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
// import { useAppSelector } from "../redux/hooks";

interface IProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: IProps) {
  const { user } = useAppSelector((state) => state.user);

  const { pathname } = useLocation();
  if (!user.email) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return children;
}
