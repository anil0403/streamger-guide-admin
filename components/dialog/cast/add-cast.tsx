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
import { postCast } from "@/lib/action/cast/action";
import ImageUploader from "@/components/ImageUpload";
export const AddCastDialog = () => {
  const [open, setOpen] = React.useState(false);

  const [icons, setIcons] = React.useState<string | null>(null);
  const handleImageChange = (imageData: string | null) => {
    setIcons(imageData);
  };
  const handlePostService = async (formData: FormData) => {
    formData.append("icons", icons as string);
    try {
      await postCast(formData);
    } catch (error) {
      console.log(error);
    }
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">Add New Cast</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Service</DialogTitle>
        </DialogHeader>
        <form action={handlePostService} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              name="name"
              type="text"
              placeholder="enter name of service..."
              className="col-span-3"
            />
          </div>
          <ImageUploader onImageChange={handleImageChange} />
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
