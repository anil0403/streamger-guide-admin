"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { isValid, z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { ComboboxForm } from "./add-tv-shows-form";

const formSchema = z.object({
  title: z.string().min(1),
  rating: z.string(),
  ageRating: z.string(),
  duration: z.string(),
  description: z.string(),
  audioLanguages: z.array(
    z.string({
      required_error: "Please select at least one language.",
    })
  ),
  service: z.string(),
  isArchived: z.boolean().default(false).optional(),
});

type MovieFormValues = z.infer<typeof formSchema>;

const AddMovieForm = () => {
  const audioLanguages = [
    { label: "English", value: "en" },
    { label: "French", value: "fr" },
    { label: "German", value: "de" },
    { label: "Spanish", value: "es" },
    { label: "Portuguese", value: "pt" },
    { label: "Russian", value: "ru" },
    { label: "Japanese", value: "ja" },
    { label: "Korean", value: "ko" },
    { label: "Chinese", value: "zh" },
  ] as const;
  const form = useForm<MovieFormValues>({
    resolver: zodResolver(formSchema),
    // defaultValues,
  });
  const onSubmit = async (data: MovieFormValues) => {
    console.log("onsubmit");
    console.log(data);
  };
  return (
    <div className="py-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-3 gap-8 min-h-fit">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter title of movie" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rating</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter IMDB rating of movie"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="ageRating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age Rating</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter age rating of movie" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Duration</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter duration of movie" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* audioLanguages */}
            <div className="col-span-3">
              <FormField
                control={form.control}
                name="audioLanguages"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Audio Languages</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              "justify-between",
                              !(field.value && field.value.length) &&
                                "text-muted-foreground"
                            )}
                          >
                            {field.value && field.value.length
                              ? field.value
                                  .map(
                                    (lang) =>
                                      audioLanguages.find(
                                        (language) => language.value === lang
                                      )?.label
                                  )
                                  .join(", ")
                              : "select audio languages..."}
                            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-[200px] p-0">
                        <Command>
                          <CommandInput
                            placeholder="Search framework..."
                            className="h-9"
                          />
                          <CommandEmpty>No framework found.</CommandEmpty>
                          <CommandGroup>
                            {audioLanguages.map((language) => (
                              <CommandItem
                                value={language.label}
                                key={language.value}
                                onSelect={() => {
                                  const isSelected = field.value?.includes(
                                    language.value
                                  );
                                  const updatedaudioLanguages = isSelected
                                    ? (field.value || []).filter(
                                        (lang) => lang !== language.value
                                      )
                                    : [...(field.value || []), language.value];

                                  form.setValue(
                                    "audioLanguages",
                                    updatedaudioLanguages
                                  );
                                }}
                              >
                                {language.label}
                                <CheckIcon
                                  className={cn(
                                    "ml-auto h-4 w-4",
                                    (field.value || []).includes(language.value)
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* service */}
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Service</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "w-[200px] justify-between",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value
                            ? audioLanguages.find(
                                (language) => language.value === field.value
                              )?.label
                            : "select service..."}
                          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput
                          placeholder="Search framework..."
                          className="h-9"
                        />
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                          {audioLanguages.map((language) => (
                            <CommandItem
                              value={language.label}
                              key={language.value}
                              onSelect={() => {
                                form.setValue("service", language.value);
                              }}
                            >
                              {language.label}
                              <CheckIcon
                                className={cn(
                                  "ml-auto h-4 w-4",
                                  language.value === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="col-span-3">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter description of movie"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="isArchived"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      // @ts-ignore
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>isArchived</FormLabel>
                    <FormDescription>
                      This movie will be visible on site
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
          </div>

          <Button className="ml-auto" type="submit">
            Add Movie
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddMovieForm;
