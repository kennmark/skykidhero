import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from '@material-tailwind/react'
import { useState, useEffect } from 'react'

const AnnouncementModal = () => {
  const handleOpen = () => setOpen(!open)
  const monthName = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const ONE_DAY = 24 * 60 * 60 * 1000;
  const today = new Date();
  const year = today.getFullYear()
  let mm = monthName[today.getMonth()]
  let dd = today.getDate()
  if (dd < 10) dd = '0' + dd
  const formattedToday = mm + ' ' + dd + ', ' + year

 const [open, setOpen] = useState(() => {
  const lastShown = Number(localStorage.getItem("announcement-time") || 0);
  return Date.now() - lastShown > ONE_DAY;
});

  useEffect(() => {
    if (!open) return;

    // Mark as shown today
    localStorage.setItem("announcement-last-shown", today);

    const timer = setTimeout(() => {
      setOpen(false);
    }, 25000);

    return () => clearTimeout(timer);
  }, [open, today]);

  if (!open) return null;

  localStorage.setItem("announcement-time", Date.now().toString());
  
  return (
    <Dialog
      open={open}
      handler={setOpen}
      className="bg-[#233d4d] h-auto -top-14 md:top-0 overflow-hidden"
    >
      <DialogHeader className="flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#fe7f2d"
          className="h-10 w-10 text-color"
        >
          <path
            fillRule="evenodd"
            d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
            clipRule="evenodd"
          />
        </svg>
        <Typography variant="h6" className="text-[#fe7f2d]">
          Greetings SkyKid!
          <br /> {formattedToday}
        </Typography>
      </DialogHeader>
      <DialogBody divider className="grid place-items-center gap-4">
        <Typography variant="h6" className="text-[#fe7f2d]">
          Word from Dev
        </Typography>

        <Typography color="white" className="text-center text-sm lg:text-lg ">
          This website was created to serve as a guide for the game{' '}
          <a href="https://www.thatskygame.com/">
            {' '}
            Sky: Children of the Light
          </a>{' '}
          . The purpose of this website is to help new players or "moths" who have chosen to play the game navigate its various aspects, such as the locations where spirits can be found and how to obtain each one, including both regular and seasonal spirits, winged lights (Children of the Light), geyser locations, Grandma locations, and turtle locations. Additionally, it provides guidance for upcoming events currently happening within the game.
        </Typography>
        <Typography color="white" className="text-center text-sm lg:text-lg ">
          So that's it for now, I hope you find this website useful and that it helps you in your journey as a SkyKid. If you have any suggestions or feedback, please feel free to reach out to me. Happy flying!
        </Typography>
      </DialogBody>
      <DialogFooter className="space-x-2 m-2">
        <Button
          onClick={() => setOpen(false)}
          className="bg-[#fe7f2d] text-[#233d4d] border-2 border-[#233d4d] hover:bg-[#233d4d] hover:text-[#fe7f2d] hover:border-2 hover:border-[#fe7f2d]"
        >
          Continue
        </Button>
      </DialogFooter>
    </Dialog>
  )
}

export default AnnouncementModal
