export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export type Paginate<T> = {
  data: T[];
  first: number;
  items: number;
  last: number;
  next: number | null;
  pages: number;
  prev: number | null;
};

// 비동기 함수
export async function getTodos() {
  const res = await fetch("http://localhost:4000/todos?_page=1&_per_page=25");
  const data: Paginate<Todo> = await res.json();

  return data;
}

// 위와 같음
// export async function getTodos(): Promise<Todo[]> {
//   const res = await fetch("http://localhost:4000/todos");
//   const data = await res.json();

//   return data;
// }
