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
  CreateAndEditProjectType,
  ProjectType,
  createAndEditProjectSchema,
} from "@/lib/types/project-types";

import {
  CustomFormField,
  CustomFormFieldFile,
  CustomFormSelect,
  CustomFormTextArea,
  CustomTagField,
} from "@/components/FormComponents";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { createProjectAction } from "@/actions/project.actions";
import { useState } from "react";

function AddProjectForm() {
  const [techStackTags, setTechStackTags] = useState<Tag[]>([]);
  const [keywordTags, setKeywordTags] = useState<Tag[]>([]);
  const [logoId, setLogoId] = useState("");
  const [screenshotId, setScreenshotId] = useState("");

  const form = useForm<CreateAndEditProjectType>({
    resolver: zodResolver(createAndEditProjectSchema),
    defaultValues: {
      title: "",
      oneLiner: "",
      logo: "",
      screenshot: "",
      projectType: ProjectType.FullStack,
      liveURL: "",
      techStack: [],
      keywords: [],
      description: "",
    },
  });

  const { setValue } = form;

  const queryClient = useQueryClient();
  const { toast } = useToast();
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: (values: CreateAndEditProjectType) =>
      createProjectAction(values),
    onSuccess: (data) => {
      if (!data) {
        toast({ description: "there was an error" });
        return;
      }
      router.push("/admin-dashboard/manage-projects");
      toast({ description: "Project added successfully!" });
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      queryClient.invalidateQueries({ queryKey: ["stats"] });
      return null;
    },
  });

  function onSubmit(values: CreateAndEditProjectType) {
    const data: CreateAndEditProjectType = {
      ...values,
      logo: logoId,
      screenshot: screenshotId,
    };
    mutate(data);
  }

  return (
    <Form {...form}>
      <form className="pb-50" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-4 md:grid-cols-2  items-start">
          <div className="flex flex-col gap-3">
            <CustomFormFieldFile
              name="logo"
              title="Project logo"
              value={logoId}
              control={form.control}
            />
            <Button asChild variant="outline">
              <CldUploadButton
                onUpload={(result: any) => {
                  setLogoId(result?.info?.secure_url);
                }}
                uploadPreset={process.env.NEXT_PUBLIC_UPLOAD_PRESET}
              />
            </Button>
          </div>
          <div className="flex flex-col gap-3">
            {/* project screen */}
            <CustomFormFieldFile
              name="screenshot"
              title="Project Screenshot"
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
          {/* project title */}
          <CustomFormField
            name="title"
            title="Project Title"
            control={form.control}
          />
          {/* project oneliner */}
          <CustomFormField
            name="oneLiner"
            title="Project One - Liner"
            control={form.control}
          />
          {/* project liveUrl */}
          <CustomFormField
            name="liveURL"
            title="Project Live Url"
            control={form.control}
          />
          {/* project type */}
          <CustomFormSelect
            name="projectType"
            control={form.control}
            labelText="Project Type"
            items={Object.values(ProjectType)}
          />
          {/* tech stack */}

          <CustomTagField
            control={form.control}
            name="techStack"
            title="Used techstack"
            tagsList={techStackTags}
            setTagsList={setTechStackTags}
            setValue={setValue}
          />
          {/* keywords stack */}

          <CustomTagField
            control={form.control}
            name="keywords"
            title="Project keywords"
            tagsList={keywordTags}
            setTagsList={setKeywordTags}
            setValue={setValue}
          />
          {/* project type */}
          <div className="md:col-span-2">
            <CustomFormTextArea
              name="description"
              title="Project Description"
              control={form.control}
            />
          </div>
          <Button
            type="submit"
            className="disabled md:col-span-2"
            disabled={isPending}>
            {isPending ? "Please wait..." : "Add Project"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
export default AddProjectForm;
