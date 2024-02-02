import { ChangeEvent, useState } from "react";
import styles from "./imageUpload.module.css";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ImageUploaderProps {
  onImageChange: (imageData: string | null) => void;
  title?: string;
  warning?: string;
  name?: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
  title,
  warning,
  name,
  onImageChange,
}) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    // onImageChange(file || null);

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
        onImageChange(e.target?.result as string);
      };

      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
      onImageChange(null);
    }
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    onImageChange(null);
  };

  return (
    <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor="name" className="text-right">
        Name
      </Label>
      <Input
        onChange={handleImageChange}
        type="file"
        name="picture"
        accept="image/*"
        placeholder="Choose Icon..."
        className="col-span-3"
      />
    </div>
  );
};

export default ImageUploader;
