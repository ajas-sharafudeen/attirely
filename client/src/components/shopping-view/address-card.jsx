import { Card, CardContent } from "../ui/card";
import { Label } from "../ui/label";

export default function AddressCard() {
  return (
    <Card>
      <CardContent className='grid gap-4'>
        <Label>{addressInfo?.address}</Label>
        <Label>{addressInfo?.city}</Label>
        <Label>{addressInfo?.pincode}</Label>
        <Label>{addressInfo?.phone}</Label>
        <Label>{addressInfo?.notes}</Label>
      </CardContent>
    </Card>
  )
}