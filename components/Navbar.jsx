/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ShMRXXwH55o
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"

export default function Component() {
  return (
    <header className="flex h-16 w-full items-center justify-between px-4 md:px-6">
      <Link className="flex items-center gap-2 text-lg font-semibold" href="#">
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
        <Link className="hover:underline hover:underline-offset-4" href="#">
          Home
        </Link>
        <Link className="hover:underline hover:underline-offset-4" href="#">
          Features
        </Link>
        <Link className="hover:underline hover:underline-offset-4" href="#">
          Pricing
        </Link>
        <Link className="hover:underline hover:underline-offset-4" href="#">
          About
        </Link>
        <Link className="hover:underline hover:underline-offset-4" href="#">
          Contact
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="md:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full max-w-xs" side="right">
          <div className="flex flex-col gap-6 p-6">
            <Link className="flex items-center gap-2 text-lg font-semibold" href="#">
              <MountainIcon className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <nav className="grid gap-4">
              <Link className="text-base font-medium hover:underline hover:underline-offset-4" href="#">
                Home
              </Link>
              <Link className="text-base font-medium hover:underline hover:underline-offset-4" href="#">
                Features
              </Link>
              <Link className="text-base font-medium hover:underline hover:underline-offset-4" href="#">
                Pricing
              </Link>
              <Link className="text-base font-medium hover:underline hover:underline-offset-4" href="#">
                About
              </Link>
              <Link className="text-base font-medium hover:underline hover:underline-offset-4" href="#">
                Contact
              </Link>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}