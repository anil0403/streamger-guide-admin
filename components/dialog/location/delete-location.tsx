"use client";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";
import { useToast } from "@/components/ui/use-toast";
import { deleteLocation } from "@/lib/action/location/action";
interface Props {
  id: string;
}
export const DeleteLocationDialog = ({ id }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [state, formAction] = useFormState(deleteLocation, undefined);

  const { toast } = useToast();
  React.useEffect(() => {
    if (state?.success) {
      toast({
        description: state?.data,
      });
      setOpen(false);
    } else {
      setOpen(false);
      if (state === undefined) {
        return;
      }
      toast({
        description: state?.message,
      });
    }
  }, [state]);
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="sm" variant="destructive">
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your your
            data.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <form action={formAction}>
            <input type="hidden" name="id" value={id} />
            <AlertDialogAction type="submit" color="red">
              Continue
            </AlertDialogAction>
          </form>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
