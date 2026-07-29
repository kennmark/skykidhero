import FaqContainer from './components/FaqContainer'
import { faqdetails } from '../data/faqdetails'
import { Typography } from '@material-tailwind/react'
import { useState } from 'react'

const FaQ = () => {
  const [open, setOpen] = useState(0)
  const handleOpen = (value) => setOpen(open === value ? 0 : value)
  return (
    <div className="my-10 border-t border-blue-gray-50 py-4 px-6 md:flex-row md:justify-between bg-[#233d4d] text-[#fe7f2d]">
      <Typography variant="h1">FAQ</Typography>
      {faqdetails.map((faq) => {
        return (
          <FaqContainer
            {...faq}
            key={faq.id}
            open={open}
            handleOpen={handleOpen}
          />
        )
      })}
    </div>
  )
}

export default FaQ
