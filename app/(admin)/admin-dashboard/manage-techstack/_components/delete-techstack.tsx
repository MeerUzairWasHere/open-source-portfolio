import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteTechstackAction } from "@/actions/techstack.actions";

export const DeleteTechstackButton = ({ id }: { id: string }) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (id: string) => deleteTechstackAction(id),
    onSuccess: (data) => {
      if (!data) {
        toast({
          description: "There was an error",
        });
        return;
      }
      queryClient.invalidateQueries({ queryKey: ["techstacks"] });
      queryClient.invalidateQueries({ queryKey: ["stats"] });
      toast({ description: "Techstack deleted successfully!" });
    },
  });

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className="flex items-center text-xsm gap-2"
          size="sm"
          variant="destructive">
          <Trash className="w-3 h-3" />
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            techstack from your database.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              className="flex items-center text-xsm gap-2"
              onClick={() => {
                mutate(id);
              }}>
              <span className="dark:text-black text-white">
                {isPending ? "Deleting..." : "Delete"}
              </span>
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
