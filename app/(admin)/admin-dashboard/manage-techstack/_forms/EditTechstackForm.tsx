"use client";

import {
  getSingleTechstackAction,
  updateTechstackAction,
} from "@/actions/techstack.actions";

import { DatePicker } from "@/components/DatePicker";

import {
  CustomFormField,
  CustomFormFieldFile,
  CustomFormSelect,
  CustomTagField,
} from "@/components/FormComponents";

import { Button } from "@/components/ui/button";

import { Form } from "@/components/ui/form";

import { Tag } from "@/components/ui/tag-input";

import { useToast } from "@/components/ui/use-toast";
import {
  CreateAndEditTechstackType,
  TechType,
  createAndEditTechstackType,
} from "@/lib/types/techstack-types";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

function EditTechstackForm({ techstackId }: { techstackId: string }) {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const router = useRouter();

  const { data } = useQuery({
    queryKey: ["techstack", techstackId],
    queryFn: () => getSingleTechstackAction(techstackId),
  });

  function onSubmit(values: CreateAndEditTechstackType) {
    const data: CreateAndEditTechstackType = {
      ...values,
      imageUrl: logoUrl,
    };

    mutate(data);
  }

  const [logoUrl, setLogoUrl] = useState(data?.imageUrl || "");

  const form = useForm<CreateAndEditTechstackType>({
    resolver: zodResolver(createAndEditTechstackType),
    defaultValues: {
      imageUrl: logoUrl,
      title: data?.title,
      category: data?.category,
      url: data?.url,
      techstackType: data?.techstackType as TechType,
    },
  });
  const { setValue } = form;

  const { mutate, isPending } = useMutation({
    mutationFn: (values: CreateAndEditTechstackType) =>
      updateTechstackAction(techstackId, values),
    onSuccess: (data) => {
      if (!data) {
        toast({ description: "There was an error" });
        return;
      }
      router.push("/admin-dashboard/manage-techstack");
      toast({ description: "Certificate updated successfully!" });
      queryClient.invalidateQueries({
        queryKey: ["techstacks"],
      });
      queryClient.invalidateQueries({
        queryKey: ["stats"],
      });
      queryClient.invalidateQueries({
        queryKey: ["techstack", techstackId],
      });
      return null;
    },
  });

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
            {isPending ? "Please wait..." : "Edit Techstack"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default EditTechstackForm;
