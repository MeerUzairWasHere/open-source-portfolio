"use client";

import {
  getSingleCertificationAction,
  updateCertificationAction,
} from "@/actions/certification.actions";

import { DatePicker } from "@/components/DatePicker";

import {
  CustomFormField,
  CustomFormFieldFile,
  CustomTagField,
} from "@/components/FormComponents";

import { Button } from "@/components/ui/button";

import { Form } from "@/components/ui/form";

import { Tag } from "@/components/ui/tag-input";

import { useToast } from "@/components/ui/use-toast";

import {
  CreateAndEditCertificateType,
  createAndEditCertificateSchema,
} from "@/lib/types/certification-types";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

function EditCertificationForm({ certificateId }: { certificateId: string }) {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const router = useRouter();

  const { data } = useQuery({
    queryKey: ["certificate", certificateId],
    queryFn: () => getSingleCertificationAction(certificateId),
  });

  function onSubmit(values: CreateAndEditCertificateType) {
    const data: CreateAndEditCertificateType = {
      ...values,
      screenshot: screenshotId,
    };

    mutate(data);
  }
  const [whatILearned, setWhatILearned] = useState<Tag[]>(
    data?.learned as Tag[]
  );

  const [screenshotId, setScreenshotId] = useState(data?.screenshot || "");

  const form = useForm<CreateAndEditCertificateType>({
    resolver: zodResolver(createAndEditCertificateSchema),
    defaultValues: {
      screenshot: screenshotId,
      title: data?.title,
      organizationName: data?.organizationName,
      completionDate: data?.completionDate,
      credentialID: data?.credentialID,
      learned: data?.learned as Tag[],
      certificateUrl: data?.certificateUrl,
    },
  });
  const { setValue } = form;

  const { mutate, isPending } = useMutation({
    mutationFn: (values: CreateAndEditCertificateType) =>
      updateCertificationAction(certificateId, values),
    onSuccess: (data) => {
      if (!data) {
        toast({ description: "There was an error" });
        return;
      }
      router.push("/admin-dashboard/manage-certification");
      toast({ description: "Certificate updated successfully!" });
      queryClient.invalidateQueries({
        queryKey: ["certification"],
      });
      queryClient.invalidateQueries({
        queryKey: ["certificate", certificateId],
      });
      queryClient.invalidateQueries({
        queryKey: ["stats"],
      });
      return null;
    },
  });

  return (
    <Form {...form}>
      <form className="pb-50" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-4 md:grid-cols-2  items-start">
          <CustomFormField
            title="certification title"
            name="title"
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
          <div className="row-span-1">
            <DatePicker
              name="completionDate"
              dateTitle="Certification Completion Date"
              control={form.control}
            />
          </div>
          <div className="flex flex-col gap-3">
            <CustomFormFieldFile
              name="screenshot"
              title="project screenshot"
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
            {isPending ? "Please wait..." : "Edit Certificate"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default EditCertificationForm;
