import React, { useCallback, useEffect } from "react";
import { TextEditor, Input, Button, Select } from "./index";
import { useForm } from "react-hook-form";
import dbService from "../appwrite/dbService";
import storageService from "../appwrite/storageService";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function PostForm({ post }) {
  const userData = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
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

  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? await storageService.uploadFile(data.image[0])
        : null;

      if (file) {
        storageService.deleteFile(post.image);
      }

      const dbPost = await dbService.updatePost(post.$id, {
        ...data,
        image: file ? file.$id : undefined,
      });

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await storageService.uploadFile(data.image[0]);

      if (file) {
        const fileId = file.$id;
        data.image = fileId;
        const dbPost = await dbService.createPost({
          ...data,
          userId: userData.$id,
        });
        console.log("data", data);
        console.log("post", dbPost);

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
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
          {...register("title", { required: true })}
          className="px-4 w-full py-3 mb-3 border-2 rounded-xl border-gray-600 bg-gray-700 focus:outline-none focus:border-blue-500"
        />
        <Input
          type="text"
          placeholder="Slug"
          {...register("slug", { required: true })}
          className="px-4 w-full py-3 mb-3 border-2 rounded-xl border-gray-600 bg-gray-700 focus:outline-none focus:border-blue-500"
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={storageService.getPreview(post.image)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Input
          label="Featured Image :"
          type="file"
          className="px-4 w-full py-3 mb-3 border-2 rounded-xl border-gray-600 bg-gray-700 focus:outline-none focus:border-blue-500  file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-800"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={storageService.getPreview(post.image)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          className="mb-4"
          {...register("status", { required: true })}
        />

        <TextEditor control={control} getValues={getValues("content")} />
        <Button>Submit</Button>
      </form>
    </div>
  );
}

export default PostForm;
