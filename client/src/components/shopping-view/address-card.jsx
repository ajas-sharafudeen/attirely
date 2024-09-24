import { Button } from '../ui/button';
import { Card, CardContent, CardFooter } from '../ui/card';
import { Label } from '../ui/label';

export default function AddressCard({
  addressInfo,
  handleEditAddress,
  handleDeleteAddress,
  setCurrentSelectedAddress,
}) {
  return (
    <Card
      onClick={
        setCurrentSelectedAddress
          ? () => setCurrentSelectedAddress(addressInfo)
          : null
      }
    >
      <CardContent className="grid p-4 gap-4">
        <Label className="font-bold">Address : {addressInfo?.address}</Label>
        <Label className="font-bold">City : {addressInfo?.city}</Label>
        <Label className="font-bold">Pincode : {addressInfo?.pincode}</Label>
        <Label className="font-bold">Phone : {addressInfo?.phone}</Label>
        <Label className="font-bold">Notes : {addressInfo?.notes}</Label>
      </CardContent>
      <CardFooter className="flex p-3 justify-between">
        <Button onClick={() => handleEditAddress(addressInfo)}>Edit</Button>
        <Button onClick={() => handleDeleteAddress(addressInfo)}>Delete</Button>
      </CardFooter>
    </Card>
  );
}
