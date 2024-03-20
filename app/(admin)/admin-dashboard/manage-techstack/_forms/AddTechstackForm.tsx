"use client";
import { CldUploadButton } from "next-cloudinary";

//tags
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
//end tags

import {
  CustomFormField,
  CustomFormFieldFile,
  CustomFormSelect,
} from "@/components/FormComponents";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  CreateAndEditTechstackType,
  TechType,
  createAndEditTechstackType,
} from "@/lib/types/techstack-types";
import { createTechstackAction } from "@/actions/techstack.actions";

function AddTechstackForm() {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const router = useRouter();

  const [logoUrl, setLogoUrl] = useState("");

  const form = useForm<CreateAndEditTechstackType>({
    resolver: zodResolver(createAndEditTechstackType),
    defaultValues: {
      title: "",
      category: "",
      techstackType: TechType.Skills,
      imageUrl: "",
      url: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (values: CreateAndEditTechstackType) =>
      createTechstackAction(values),
    onSuccess: (data) => {
      if (!data) {
        toast({ description: "there was an error" });
        return;
      }
      router.push("/admin-dashboard/manage-techstack");
      toast({ description: "Techstack added successfully!" });
      queryClient.invalidateQueries({ queryKey: ["techstacks"] });
      queryClient.invalidateQueries({ queryKey: ["stats"] });
      return null;
    },
  });

  function onSubmit(values: CreateAndEditTechstackType) {
    const data: CreateAndEditTechstackType = {
      ...values,
      imageUrl: logoUrl,
    };
    mutate(data);
  }

  return (
    <Form {...form}>
      <form className="pb-50" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-4 md:grid-cols-2  items-start">
          <CustomFormField
            name="title"
            title="Techstack Title"
            control={form.control}
          />
          <CustomFormSelect
            name="techstackType"
            control={form.control}
            labelText="Techstack Type"
            items={Object.values(TechType)}
          />
          <CustomFormField
            name="url"
            title="Techstack Url"
            control={form.control}
          />
          <CustomFormField
            name="category"
            title="Techstack Category"
            control={form.control}
          />
          <div className="flex flex-col gap-3">
            <CustomFormFieldFile
              name="imageUrl"
              title="Techstack Logo"
              value={logoUrl}
              control={form.control}
            />
            <Button asChild variant="outline">
              <CldUploadButton
                onUpload={(result: any) => {
                  setLogoUrl(result?.info?.secure_url);
                }}
                uploadPreset={process.env.NEXT_PUBLIC_UPLOAD_PRESET}
              />
            </Button>
          </div>

          <Button
            type="submit"
            className="disabled md:col-span-1 mt-auto"
            disabled={isPending}>
            {isPending ? "Please wait..." : "Add Techstack"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
export default AddTechstackForm;
