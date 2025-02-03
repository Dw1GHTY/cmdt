import React, { ReactNode } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

interface BasicDialogProps {
  triggerName: string;
  children: ReactNode;
}

const BasicDialog: React.FC<BasicDialogProps> = ({ children, triggerName }) => {
  return (
    <Dialog>
      <DialogTrigger className="bg-blue-800 rounded-md px-4 py-1 text-white hover:bg-blue-200">
        {triggerName}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a Company to Franchises</DialogTitle>
          <DialogDescription>
            By adding a Company to the list of Franchises it will become visible{" "}
            <br />
            on the home page and mobile menu
          </DialogDescription>
        </DialogHeader>
        {children} {/* ✅ Render children here */}
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BasicDialog;
