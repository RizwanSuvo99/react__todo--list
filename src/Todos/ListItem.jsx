/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

const ListItem = ({
  todo,
  index,
  updateTodo,
  deleteTodo,
  isEdit,
  updateId,
  updateTodoInput,
  getTodo,
  updateInput,
}) => {
  const [isComplete, setIsComplete] = useState(false);
  return (
    <li key={index}>
      <hr className="mt-2" />
      <div className="my-4 flex justify-between px-1">
        <div className="flex items-center gap-2">
          <span
            onClick={() => setIsComplete((prevState) => !prevState)}
            className="h-8 cursor-pointer w-8 flex justify-center items-center border border-gray-600 rounded-full"
          >
            <i
              id="checked1"
              className="transition-all hover:text-lg text-blue-500 hover:text-blue-900 fa fa-check"
            ></i>
          </span>

          {isEdit && updateId === index ? (
            <form action="" onSubmit={(e) => updateTodo(index, e)}>
              <input
                onChange={updateTodoInput}
                type="text"
                className="update__input"
                value={updateInput}
              />
            </form>
          ) : (
            <p
              className={`md:max-w-[375px] truncate max-w-[280px] ${
                isComplete && "line-through"
              }`}
            >
              {todo}
            </p>
          )}
        </div>

        {isEdit && updateId === index ? (
          <span
            onClick={(e) => updateTodo(index, e)}
            className="h-8 cursor-pointer w-8 flex justify-center items-center border border-gray-600 rounded-full "
          >
            <i className="transition-all hover:text-lg text-red-600 hover:text-red-900 fa fa-check"></i>
          </span>
        ) : (
          <span
            onClick={() => getTodo(index)}
            className="h-8 cursor-pointer w-8 flex justify-center items-center border border-gray-600 rounded-full "
          >
            <i className="transition-all hover:text-lg text-red-600 hover:text-red-900 fa fa-edit"></i>
          </span>
        )}

        <span
          onClick={() => deleteTodo(index)}
          className="h-8 cursor-pointer w-8 flex justify-center items-center border border-gray-600 rounded-full"
        >
          <i className="transition-all hover:text-lg text-red-600 hover:text-red-900 fa fa-trash"></i>
        </span>
      </div>
    </li>
  );
};

export default ListItem;
