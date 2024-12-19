"use client";

import { useQuery } from "@tanstack/react-query";
import { useCounterStore } from "./store/counterStore";

export default function Home() {
  useQuery({
    queryKey: ["counter"],
    queryFn: async () => {
      const response = await fetch("/api/counter");
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    },
  });

  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
