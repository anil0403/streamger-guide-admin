"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormState } from "react-dom";
import { useToast } from "@/components/ui/use-toast";
import { postGenre } from "@/lib/action/genre/action";

export const AddGenreDialog = () => {
  const [open, setOpen] = React.useState(false);
  const [state, formAction] = useFormState(postGenre, undefined);
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">Add New Genre</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Genre</DialogTitle>
        </DialogHeader>
        <form action={formAction} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              name="name"
              placeholder="enter name of genre..."
              className="col-span-3"
            />
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
