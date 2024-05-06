import React, { useState } from 'react'
import { fetchData, postData } from '../helpers'
import Table from '../components/Table'

const ExpensesPage = () => {
  const [expenses, setExpenses] = useState(JSON.parse(fetchData('expenses')) ?? [])

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter(expense => {
      return expense.id !== id
    })
    postData('expenses', JSON.stringify(updatedExpenses))
    setExpenses(updatedExpenses)
  }

  return (
    <div className="grid-lg">
      <h1>All expenses</h1>
      {
        expenses.length > 0
          ? <div className="grid-md">
            <h2>Recent Expenses <small>({expenses.length} total)</small></h2>
            <Table expenses={expenses} handleExpenses={deleteExpense} />
          </div>
          : <p>No Expenses to show</p>
      }
    </div>
  )
}

export default ExpensesPage