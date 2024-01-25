import React, { useCallback, useEffect } from "react";
import { TextEditor, Input, Button } from "./index";
import { useForm } from "react-hook-form";

function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.$id || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), {
          shouldValidate: true,
        });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  const submit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-[90vw] mx-auto">
      <form
        className="flex flex-col mt-20 gap-5"
        onSubmit={handleSubmit(submit)}
      >
        <Input
          type="text"
          placeholder="Title"
          {...register("title")}
          className="px-4 w-full py-3 mb-3 border-2 rounded-xl border-gray-600 bg-gray-700 focus:outline-none focus:border-blue-500"
        />
        <Input
          type="text"
          placeholder="Slug"
          {...register("slug")}
          className="px-4 w-full py-3 mb-3 border-2 rounded-xl border-gray-600 bg-gray-700 focus:outline-none focus:border-blue-500"
        />
        <Input
          label="Featured Image :"
          type="file"
          className="px-4 w-full py-3 mb-3 border-2 rounded-xl border-gray-600 bg-gray-700 focus:outline-none focus:border-blue-500  file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-800"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        <TextEditor control={control} getValues={getValues("content")} />
        <Button>Submit</Button>
      </form>
    </div>
  );
}

export default PostForm;
