import { useRef } from "react";
import { useState } from "react";
import MainBudget from "./MainBudget";
import { v4 as uuidv4 } from "uuid";
import "./style.css";

const Budget = () => {
  const [expense, setExpense] = useState([]);
  const [price, setPrice] = useState(0);
  const [expName, setExpName] = useState("");
  const [expAmount, setExpAmount] = useState(0);
  const [currBudget, setCurrBudget] = useState(0);

  const budgetRef = useRef();
  const expNameRef = useRef();
  const expAmountRef = useRef();

  const totalExpense = expense?.reduce((tot, curr) => tot + curr.expAmo, 0);
  const netWorth = price - totalExpense;

  const editExpense = (id, amount, name) => {
    const editted = expense.find((exp) => exp.id === id);
    const newExpense = expense.map((exp) => {
      if (exp !== editted) {
        return exp;
      } else return { expAmo: amount, expName: name };
    });
    setExpense(newExpense);
  };

  const deleteExpense = (id) => {
    setExpense((exp) => exp.filter((exxp) => exxp.id !== id));
  };

  const addBudget = () => {
    if (currBudget < 1) {
      alert("Budget cannot be less than 1");
    } else {
      setPrice((currPrice) => currPrice + currBudget);
      budgetRef.current.value = "";
      setCurrBudget(0);
    }
  };

  const addExpense = () => {
    if (expAmount < 1) {
      alert("Express Amount cannot be less than 1 MF");
    }
    if (expName === "") {
      alert("Expense Amount cannot be empty");
    }
    if (expName !== "" && expAmount > 1) {
      setExpense((currentExpense) => [
        ...currentExpense,
        {
          id: uuidv4(),
          expName: expName,
          expAmo: expAmount,
        },
      ]);
      expNameRef.current.value = "";
      expAmountRef.current.value = "";
      setExpAmount(0);
      setExpName("");
    }
  };

  const formatNumber = (num) => {
    const options = {
      style: "currency",
      currency: "USD",
    };
    const newNumber = new Intl.NumberFormat("en-US", options).format(num);
    return newNumber;
  };

  const showFormNumber = (num) => {
    if (num >= 0) {
      if (num < 1000) {
        return formatNumber(num);
      } else if (num >= 1000 && num < 1000000) {
        const thous = Math.floor(num / 1000);
        const rem = Math.floor((num % 1000) / 100) / 10;
        const newNum = thous + rem;
        return `${formatNumber(newNum)}K`;
      } else if (num >= 1000000 && num < 1000000000) {
        const thous = Math.floor(num / 1000000);
        const rem = Math.floor((num % 1000000) / 100000) / 10;
        const newNum = thous + rem;
        return `${formatNumber(newNum)}M`;
      } else {
        const thous = Math.floor(num / 1000000000);
        const rem = Math.floor((num % 1000000000) / 100000) / 10;
        const newNum = thous + rem;
        return `${formatNumber(newNum)}B`;
      }
    } else {
      num = -num;
      if (num < 1000) {
        return `-${formatNumber(num)}`;
      } else if (num >= 1000 && num < 1000000) {
        const thous = Math.floor(num / 1000);
        const rem = Math.floor((num % 1000) / 100) / 10;
        const newNum = thous + rem;
        return `-${formatNumber(newNum)}K`;
      } else if (num >= 1000000 && num < 1000000000) {
        const thous = Math.floor(num / 1000000);
        const rem = Math.floor((num % 1000000) / 100000) / 10;
        const newNum = thous + rem;
        return `-${formatNumber(newNum)}M`;
      } else {
        const thous = Math.floor(num / 1000000000);
        const rem = Math.floor((num % 1000000000) / 100000) / 10;
        const newNum = thous + rem;
        return `-${formatNumber(newNum)}B`;
      }
    }
  };

  return (
    <main>
      <div className="text">Budget App</div>
      <div className="main_budget">
        <div className="add_budget_section">
          <div className="texts">Add Budget</div>
          <label htmlFor="budge_amount">Budget Amount</label>
          <input
            type="number"
            ref={budgetRef}
            onChange={(e) => setCurrBudget(Number(e.target.value))}
          />
          <div className="but_part">
            <button className="budge_btn" onClick={addBudget}>
              Add Budget
            </button>
          </div>
        </div>
        <div className="budge_section">
          <div className="total">
            <div className="sect_text">Total</div>
            <div className="main_total">{showFormNumber(price)}</div>
          </div>
          <div className="total">
            <div className="sect_text">Expense</div>
            <div className="main_expense">{showFormNumber(totalExpense)}</div>
          </div>
          <div className="total">
            <div className="sect_text">Net Worth</div>
            <div className="main_net">{showFormNumber(netWorth)}</div>
          </div>
        </div>
        <div className="add_expense_section">
          <div className="texts">Add Expense</div>
          <label htmlFor="expense_name">Expense Name</label>
          <input
            type="text"
            ref={expNameRef}
            onChange={(e) => setExpName(e.target.value)}
          />
          <label htmlFor="expense_amount">Expense Amount</label>
          <input
            type="number"
            ref={expAmountRef}
            onChange={(e) => setExpAmount(Number(e.target.value))}
          />
          <div className="but_part">
            <button className="exp_btn" onClick={addExpense}>
              Add Expense
            </button>
          </div>
        </div>
        <div className="show_expense_section">
          <div className="texts">Expenses</div>
          <div className="expenses">
            {expense?.map((exp, idx) => (
              <MainBudget
                key={idx}
                expense={exp}
                edit={editExpense}
                del={deleteExpense}
                form={showFormNumber}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Budget;
