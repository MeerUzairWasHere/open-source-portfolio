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
  CreateAndEditProjectType,
  ProjectType,
  createAndEditProjectSchema,
} from "@/lib/types/project-types";

import {
  CustomFormField,
  CustomFormFieldFile,
  CustomFormSelect,
  CustomFormTextArea,
} from "@/components/FormComponents";

import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { createJobAction } from "@/utils/actions";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { createProjectAction } from "@/actions/project.actions";
import { useState } from "react";

export type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};
function AddProjectForm() {
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
  const [techStackTags, setTechStackTags] = useState<Tag[]>([]);
  const [keywordTags, setKeywordTags] = useState<Tag[]>([]);
  const [logoId, setLogoId] = useState("");
  const [screemshotId, setScreenshotId] = useState("");
  console.log(logoId);
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
      toast({ description: "Project added sucessfully!" });
      queryClient.invalidateQueries({ queryKey: ["projects"] });

      router.push("/admin-dashboard/manage-projects");
    },
  });

  function onSubmit(values: CreateAndEditProjectType) {
    console.log(values);
    console.log("consoled on submit ");
    mutate(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-start">
          {/* project logo */}
          <div className="">
            <CustomFormFieldFile
              name="logo"
              value={logoId}
              control={form.control}
            />
            <CldUploadButton
              onUpload={(result: any) => {
                setLogoId(result?.info?.secure_url);
              }}
              uploadPreset="ghjltfqr"
            />
          </div>

          <CldUploadButton
            onUpload={(result: any) => {
              setScreenshotId(result?.info?.secure_url);
            }}
            uploadPreset="ghjltfqr"
          />
          {/* project logo */}
          <CustomFormFieldFile
            name="screenshot"
            value={screemshotId}
            control={form.control}
          />
          {/* project title */}
          <CustomFormField name="title" control={form.control} />
          {/* project oneliner */}
          <CustomFormField name="oneLiner" control={form.control} />
          {/* project liveUrl */}
          <CustomFormField name="liveURL" control={form.control} />
          {/* project type */}
          <CustomFormSelect
            name="projectType"
            control={form.control}
            labelText="job mode"
            items={Object.values(ProjectType)}
          />
          {/* tech stack */}
          <FormField
            control={form.control}
            name="techStack"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
                <FormLabel className="text-left">Techstack</FormLabel>
                <FormControl>
                  <TagInput
                    {...field}
                    tags={techStackTags}
                    className="sm:min-w-[450px]"
                    setTags={(newTags) => {
                      setTechStackTags(newTags);
                      setValue("techStack", newTags as [Tag, ...Tag[]]);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* keywords stack */}
          <FormField
            control={form.control}
            name="keywords"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
                <FormLabel className="text-left">Keywords</FormLabel>
                <FormControl>
                  <TagInput
                    {...field}
                    tags={keywordTags}
                    className="sm:min-w-[450px]"
                    setTags={(newTags) => {
                      setKeywordTags(newTags);
                      setValue("keywords", newTags as [Tag, ...Tag[]]);
                    }}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          {/* project type */}
          <CustomFormTextArea name="description" control={form.control} />
          <Button type="submit" className=" capitalize" disabled={isPending}>
            {isPending ? "loading..." : "Create Project"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
export default AddProjectForm;
