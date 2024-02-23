"use client";
import { CldUploadButton } from "next-cloudinary";

//tags
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Tag, TagInput } from "@/components/ui/tag-input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
//end tags

import {
  CustomFormField,
  CustomFormFieldFile,
} from "@/components/FormComponents";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  CreateAndEditCertificateType,
  createAndEditCertificateSchema,
} from "@/lib/types/certification-types";
import { createCertificationAction } from "@/actions/certification.actions";
import { DatePicker } from "@/components/DatePicker";

function AddCertificationForm() {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const router = useRouter();

  const [whatILearned, setWhatILearned] = useState<Tag[]>([]);

  const [screenshotId, setScreenshotId] = useState("");

  const defaultDate: Date = new Date("2000-05-13") || "2000-05-13";

  const form = useForm<CreateAndEditCertificateType>({
    resolver: zodResolver(createAndEditCertificateSchema),
    defaultValues: {
      screenshot: "",
      title: "",
      organizationName: "",
      completionDate: defaultDate,
      credentialID: "",
      learned: [],
      certificateUrl: "",
    },
  });

  const { setValue } = form;

  const { mutate, isPending } = useMutation({
    mutationFn: (values: CreateAndEditCertificateType) =>
      createCertificationAction(values),
    onSuccess: (data) => {
      if (!data) {
        toast({ description: "there was an error" });
        return;
      }
      router.push("/admin-dashboard/manage-certification");
      toast({ description: "Certificate added successfully!" });
      queryClient.invalidateQueries({ queryKey: ["certification"] });
      return null;
    },
  });

  function onSubmit(values: CreateAndEditCertificateType) {
    const data: CreateAndEditCertificateType = {
      ...values,
      screenshot: screenshotId,
    };

    console.log(data);
    mutate(data);
  }
  return (
    <Form {...form}>
      <form className="pb-50" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-4 md:grid-cols-2  items-start">
          <CustomFormField name="title" control={form.control} />
          <CustomFormField
            name="organizationName"
            title="Organization Name"
            control={form.control}
          />

          <CustomFormField
            name="credentialID"
            title="credential ID"
            control={form.control}
          />
          <CustomFormField
            title="certificate Url"
            name="certificateUrl"
            control={form.control}
          />
          <DatePicker
            name="completionDate"
            dateTitle="Completion Date"
            control={form.control}
          />

          <div className="flex flex-col gap-3">
            <CustomFormFieldFile
              name="screenshot"
              value={screenshotId}
              control={form.control}
            />
            <Button asChild variant="outline">
              <CldUploadButton
                onUpload={(result: any) => {
                  setScreenshotId(result?.info?.secure_url);
                }}
                uploadPreset={process.env.NEXT_PUBLIC_UPLOAD_PRESET}
              />
            </Button>
          </div>
          <FormField
            control={form.control}
            name="learned"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
                <FormLabel className="text-left">What I Learned</FormLabel>
                <FormControl>
                  <TagInput
                    {...field}
                    tags={whatILearned}
                    className="sm:min-w-[350px]"
                    setTags={(newTags) => {
                      setWhatILearned(newTags);
                      setValue("learned", newTags as [Tag, ...Tag[]]);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="disabled md:col-span mt-auto"
            disabled={isPending}>
            {isPending ? "Please wait..." : "Add Certificate"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
export default AddCertificationForm;
