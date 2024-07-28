import React from "react";

type CategoryType = {
  name: string;
  id: number;
};
const dummyCategory = [
  { name: "공부", id: 1 },
  { name: "요리", id: 2 },
  { name: "게임", id: 3 },
  { name: "일상", id: 4 },
  { name: "공부", id: 1 },
  { name: "요리", id: 2 },
  { name: "게임", id: 3 },
];

function MainPage() {
  return (
    <div className="flex w-full">
      <nav className="flex flex-wrap sm:justify-center w-full">
        {dummyCategory.map((category: CategoryType) => (
          <div
            key={category.id}
            className="flex justify-center items-center border rounded-md px-3 h-10 mx-1 sm:mx-2 my-1 hover:bg-primary hover:text-white"
          >
            {category.name}
          </div>
        ))}
      </nav>
    </div>
  );
}

export default MainPage;
