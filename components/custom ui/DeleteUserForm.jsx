"use client";

import { deleteUser } from "@/actions/user";
import { Form } from "../ui/form";
import { SubmitButton } from "./SubmitButton";

const DeleteUserForm = ({ id }) => {
  const userIdToDelete = deleteUser.bind(null, id);

  return (
    <Form>
      <form action={userIdToDelete} className="space-y-8">
        <SubmitButton text="Sterge" size="sm" variant="destructive" />
      </form>
    </Form>
  );
};

export default DeleteUserForm;
