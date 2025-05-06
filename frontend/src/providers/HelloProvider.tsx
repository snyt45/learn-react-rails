import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { hello } from "../api/v1/hello";

type HelloContextType = {
  message: string;
};

const HelloContext = createContext<HelloContextType | undefined>(undefined);

export const HelloProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [message, setMessage] = useState<string>("");
  const fetchMessage = async () => {
    const data = await hello();
    setMessage(data.message);
  };

  useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <HelloContext.Provider value={{ message }}>
      {children}
    </HelloContext.Provider>
  );
};

export const useHello = () => {
  const context = useContext(HelloContext);

  if (!context) {
    throw new Error("useHelloContext must be used within a HelloProvider");
  }

  return context;
};
