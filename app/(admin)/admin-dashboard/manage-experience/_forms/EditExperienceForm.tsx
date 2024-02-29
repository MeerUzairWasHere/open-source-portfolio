"use client";

import {
  getSingleExperienceAction,
  updateExperienceAction,
} from "@/actions/experience.actions";

import { DatePicker } from "@/components/DatePicker";

import { CustomFormField, CustomTagField } from "@/components/FormComponents";

import { Button } from "@/components/ui/button";

import { Form } from "@/components/ui/form";

import { Tag } from "@/components/ui/tag-input";

import { useToast } from "@/components/ui/use-toast";

import {
  CreateAndEditExperienceType,
  createAndEditExperienceSchema,
} from "@/lib/types/experience-types";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

function EditExperienceForm({ experienceId }: { experienceId: string }) {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const router = useRouter();

  const { data } = useQuery({
    queryKey: ["experience", experienceId],
    queryFn: () => getSingleExperienceAction(experienceId),
  });

  function onSubmit(values: CreateAndEditExperienceType) {
    mutate(values);
  }
  const [whatILearned, setWhatILearned] = useState<Tag[]>(
    data?.learned as Tag[]
  );

  const form = useForm<CreateAndEditExperienceType>({
    resolver: zodResolver(createAndEditExperienceSchema),
    defaultValues: {
      positionName: data?.positionName,
      companyName: data?.companyName,
      companyLocation: data?.companyLocation,
      startDate: data?.startDate,
      endDate: data?.endDate,
      learned: data?.learned as Tag[],
    },
  });
  const { setValue } = form;

  const { mutate, isPending } = useMutation({
    mutationFn: (values: CreateAndEditExperienceType) =>
      updateExperienceAction(experienceId, values),
    onSuccess: (data) => {
      if (!data) {
        toast({ description: "There was an error" });
        return;
      }
      router.push("/admin-dashboard/manage-experience");
      toast({ description: "Experience updated successfully!" });
      queryClient.invalidateQueries({
        queryKey: ["experience"],
      });
      queryClient.invalidateQueries({
        queryKey: ["stats"],
      });
      queryClient.invalidateQueries({
        queryKey: ["experience", experienceId],
      });
      return null;
    },
  });

  return (
    <Form {...form}>
      <form className="pb-50" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-4 md:grid-cols-2  items-start">
          <CustomFormField
            name="positionName"
            title="Position Name"
            control={form.control}
          />
          <CustomFormField
            name="companyName"
            title="Company Name"
            control={form.control}
          />

          <DatePicker
            name="startDate"
            dateTitle="Start Date"
            control={form.control}
          />
          <DatePicker
            name="endDate"
            dateTitle="End Date"
            control={form.control}
          />
          <CustomFormField
            name="companyLocation"
            title="Company Location"
            control={form.control}
          />

          <Button
            type="submit"
            className="disabled md:col-span mt-auto"
            disabled={isPending}>
            {isPending ? "Please wait..." : "Edit Experience"}
          </Button>
          <CustomTagField
            control={form.control}
            name="learned"
            title="What I Did"
            tagsList={whatILearned}
            setTagsList={setWhatILearned}
            setValue={setValue}
          />
        </div>
      </form>
    </Form>
  );
}

export default EditExperienceForm;
