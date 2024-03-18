"use client";
import { CldUploadButton } from "next-cloudinary";

//tags
import { Form } from "@/components/ui/form";

import { Tag, TagInput } from "@/components/ui/tag-input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
//end tags

import {
  CustomFormField,
  CustomFormFieldFile,
  CustomTagField,
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
      queryClient.invalidateQueries({ queryKey: ["stats"] });
      return null;
    },
  });

  function onSubmit(values: CreateAndEditCertificateType) {
    const data: CreateAndEditCertificateType = {
      ...values,
      screenshot: screenshotId,
    };

    mutate(data);
  }
  return (
    <Form {...form}>
      <form className="pb-50" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-4 md:grid-cols-2  items-start">
          <CustomFormField
            name="title"
            title="certification title"
            control={form.control}
          />
          <CustomFormField
            name="organizationName"
            title="Organization Name"
            control={form.control}
          />

          <CustomFormField
            name="credentialID"
            title="Certification Credential ID"
            control={form.control}
          />
          <CustomFormField
            title="Certification Url"
            name="certificateUrl"
            control={form.control}
          />
          <DatePicker
            name="completionDate"
            dateTitle="Certification Completion Date"
            control={form.control}
          />

          <div className="flex flex-col gap-3">
            <CustomFormFieldFile
              name="screenshot"
              title="Certification screenshot"
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

          <CustomTagField
            control={form.control}
            name="learned"
            title="What I Learned"
            tagsList={whatILearned}
            setTagsList={setWhatILearned}
            setValue={setValue}
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
