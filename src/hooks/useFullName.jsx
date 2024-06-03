import { useEffect, useState } from "react";

export default function useFullName(nameUser) {
  const [name, setName] = useState("");
  useEffect(() => {
    setName(nameUser.target.value);
  }, []);
  return name;
}
