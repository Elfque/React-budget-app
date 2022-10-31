import { useRef, useState } from "react";

const MainBudget = ({ expense, edit, del, form }) => {
  const [editing, setEditing] = useState(true);
  const nameRef = useRef();
  const amountRef = useRef();

  const setNewParams = () => {
    edit(expense.id, Number(amountRef.current.value), nameRef.current.value);
    setEditing(true);
  };

  return (
    <div className="expense">
      <div className={`exp_name ${!editing ? "not_show" : ""}`}>
        {expense.expName}
      </div>
      <div className={`${editing ? "not_show" : "editor"}`}>
        <input
          type="text"
          className="edit_name"
          defaultValue={expense.expName}
          ref={nameRef}
        />
      </div>
      <div className={`exp_amount ${!editing ? "not_show" : ""}`}>
        {form(expense.expAmo)}
      </div>
      <div className={`${editing ? "not_show" : "editor"}`}>
        <input
          type="text"
          className="edit_amount"
          defaultValue={expense.expAmo}
          ref={amountRef}
        />
        <button className="update" onClick={setNewParams}>
          Update
        </button>
      </div>
      <div className="btns">
        <button className="delete" onClick={() => del(expense.id)}>
          🚮
        </button>
        <button className="edit" onClick={() => setEditing(!editing)}>
          ✍
        </button>
      </div>
    </div>
  );
};

export default MainBudget;
