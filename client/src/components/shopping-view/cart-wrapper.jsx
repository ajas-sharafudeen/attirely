import { Button } from "../ui/button";
import { SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";

export default function UserCartWrapper() {
  return (
    <SheetContent className='sm:max-w-md'>
      <SheetHeader>
        <SheetTitle>Your Cart</SheetTitle>
      </SheetHeader>
      <div className="mt-8 space-y-4">

      </div>
      <div className="mt-8 space-y-4">
        <div className="flex justify-between">
          <span className="font-bold">Total</span>
          <span className="font-bold">$990</span>
        </div>
      </div>
      <Button className='mt-6 w-full'>Checkout</Button>
    </SheetContent>
  )
}