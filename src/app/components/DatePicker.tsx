import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

interface ChildProps {
  startDate: Date
  setStartDate: (date: Date) => void
}

export default function DatePickerComp({
  startDate,
  setStartDate,
}: ChildProps) {
  return (
    <DatePicker
      className="border-0 bg-gray-900 text-sm text-gray-200"
      selected={startDate}
      onChange={(date: Date) => setStartDate(date)}
      showTimeSelect
      name="datePicker"
    />
  )
}
