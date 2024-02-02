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
import { Calendar } from "@/components/ui/calendar";

import Search from "../search";
import ImageUploader from "../ImageUpload";
import { postArchivedMovie } from "@/lib/action/archived/movies/action";

const formSchema = z.object({
  title: z.string().min(1),
  rating: z.string(),
  ageRating: z.string(),
  duration: z.string(),
  description: z.string(),
  producer: z.string(),
  director: z.string(),
  trailerLink: z.string(),
  releaseDate: z.string(),
  audioLanguages: z.array(
    z.string({
      required_error: "Please select at least one language.",
    })
  ),
  castOptions: z.array(
    z.string({
      required_error: "Please select at least one language.",
    })
  ),
  locationOptions: z.array(
    z.string({
      required_error: "Please select at least one language.",
    })
  ),

  genreOptions: z.array(
    z.string({
      required_error: "Please select at least one language.",
    })
  ),
  service: z.string(),
  isArchived: z.boolean().default(false).optional(),
});

type MovieFormValues = z.infer<typeof formSchema>;

interface AddMovieFormProps {
  languagesProps: any;
  castsProps: any;
  locationsProps: any;
  servicesProps: any;
  genresProps: any;
}

const AddMovieForm = ({
  languagesProps,
  castsProps,
  locationsProps,
  servicesProps,
  genresProps,
}: AddMovieFormProps) => {
  console.log("languages = ", languagesProps);
  // console.log("casts = ", casts);
  // console.log("locations = ", locations);
  // console.log("services = ", services);
  // console.log("genres = ", genres);
  // console.log("languages = ", languages);

  const [icons, setIcons] = React.useState<string | null>(null);
  const handleImageChange = (imageData: string | null) => {
    setIcons(imageData);
  };

  const languages = languagesProps?.map((language: any) => ({
    label: language.name,
    value: language.name, // Assuming `id` is a unique identifier
  }));

  const genres = genresProps?.map((genre: any) => ({
    label: genre.name,
    value: genre.name, // Assuming `id` is a unique identifier
  }));

  const locations = locationsProps?.map((location: any) => ({
    label: location.name,
    value: location.name, // Assuming `id` is a unique identifier
  }));

  const casts = castsProps?.map((member: any) => ({
    label: member.name,
    value: member?.id.toString(),
  }));

  const services = servicesProps?.map((service: any) => ({
    label: service.name,
    value: service?.id.toString(),
  }));

  const form = useForm<MovieFormValues>({
    resolver: zodResolver(formSchema),
    // defaultValues,
  });
  const onSubmit = async (data: MovieFormValues) => {
    console.log("onsubmit");
    console.log(data);
    const formData = new FormData();

    data?.audioLanguages?.map((language) =>
      formData.append("audiolanguages", language)
    );

    data?.castOptions?.map((cast) => formData.append("cast", cast));

    data?.locationOptions?.map((location) =>
      formData.append("location", location)
    );

    data?.genreOptions?.map((genre) => formData.append("genre", genre));

    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("age_rating", data.ageRating);
    formData.append("release_date", data.releaseDate);
    formData.append("director", data.director);
    formData.append("rating", data.rating);
    formData.append("duration", data.duration);


    
    formData.append("producer", data.producer);
    formData.append("thumbnail", icons as string);
    formData.append("service", data.service);
    formData.append("isArchived", String(data.isArchived));

    // formData.append("icons", icons as string);
    // try {
    //   await postService(formData);
    // } catch (error) {
    //   console.log(error);
    await postArchivedMovie(formData);
  };
  return (
    <div className="py-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-3 gap-8 min-h-fit">
            {/* title */}
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

            {/* director */}
            <FormField
              control={form.control}
              name="director"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Director</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter director" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* producer */}
            <FormField
              control={form.control}
              name="producer"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Producer</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter producer" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Release Date */}
            <FormField
              control={form.control}
              name="releaseDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Release Date</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      placeholder="Enter producer"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Trailer link */}
            <FormField
              control={form.control}
              name="trailerLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Trailer Link</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter Trailer Link"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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
                            " justify-between",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value
                            ? services.find(
                                (language: any) =>
                                  language.value === field.value
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
                        <CommandEmpty>No service found.</CommandEmpty>
                        <CommandGroup>
                          {services?.map((language: any) => (
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

            {/* casts */}
            <div className="col-span-3">
              <FormField
                control={form.control}
                name="castOptions"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Cast</FormLabel>
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
                                      casts.find(
                                        (language: any) =>
                                          language.value === lang
                                      )?.label
                                  )
                                  .join(", ")
                              : "select cast..."}
                            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-[200px] p-0">
                        <Command>
                          <Search placeholder="cast" />
                          <CommandEmpty>No cast found.</CommandEmpty>
                          <CommandGroup>
                            {casts?.map((language: any) => (
                              <CommandItem
                                value={language.label}
                                key={language.value}
                                onSelect={() => {
                                  const isSelected = field.value?.includes(
                                    language.value
                                  );
                                  const updatedcastOptions = isSelected
                                    ? (field.value || []).filter(
                                        (lang) => lang !== language.value
                                      )
                                    : [...(field.value || []), language.value];

                                  form.setValue(
                                    "castOptions",
                                    updatedcastOptions
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
                                      languages.find(
                                        (language: any) =>
                                          language.value === lang
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
                            placeholder="Search language..."
                            className="h-9"
                          />
                          <CommandEmpty>No framework found.</CommandEmpty>
                          <CommandGroup>
                            {languages?.map((language: any) => (
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

            {/* Genre */}
            <div className="col-span-3">
              <FormField
                control={form.control}
                name="genreOptions"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Select Genre</FormLabel>
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
                                      genres.find(
                                        (language: any) =>
                                          language.value === lang
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
                            placeholder="Search genre..."
                            className="h-9"
                          />
                          <CommandEmpty>No genre found.</CommandEmpty>
                          <CommandGroup>
                            {genres?.map((language: any) => (
                              <CommandItem
                                value={language.label}
                                key={language.value}
                                onSelect={() => {
                                  const isSelected = field.value?.includes(
                                    language.value
                                  );
                                  const updatedgenreOptions = isSelected
                                    ? (field.value || []).filter(
                                        (lang) => lang !== language.value
                                      )
                                    : [...(field.value || []), language.value];

                                  form.setValue(
                                    "genreOptions",
                                    updatedgenreOptions
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

            {/* location */}
            <div className="col-span-3">
              <FormField
                control={form.control}
                name="locationOptions"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Select Location</FormLabel>
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
                                      locations.find(
                                        (language: any) =>
                                          language.value === lang
                                      )?.label
                                  )
                                  .join(", ")
                              : "select location..."}
                            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-[200px] p-0">
                        <Command>
                          <CommandInput
                            placeholder="Search location..."
                            className="h-9"
                          />
                          <CommandEmpty>No genre found.</CommandEmpty>
                          <CommandGroup>
                            {locations?.map((language: any) => (
                              <CommandItem
                                value={language.label}
                                key={language.value}
                                onSelect={() => {
                                  const isSelected = field.value?.includes(
                                    language.value
                                  );
                                  const updatedlocationOptions = isSelected
                                    ? (field.value || []).filter(
                                        (lang) => lang !== language.value
                                      )
                                    : [...(field.value || []), language.value];

                                  form.setValue(
                                    "locationOptions",
                                    updatedlocationOptions
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

            {/* description */}
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

            {/* isArchivee */}
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
            <ImageUploader onImageChange={handleImageChange} />
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
