import { getUsers } from "@/actions/user";
import DeleteUserForm from "@/components/custom ui/deleteUserForm";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const Admin = async () => {
  const users = await getUsers();

  return (
    <div className="flex max-w-screen-2xl flex-col mx-auto min-h-[90%] items-end justify-center">
      <Button variant="outline" size="sm">
        <Link href="/admin/create-user">Creeaza User</Link>
      </Button>
      <Table>
        <TableCaption>O lista cu userii.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Username</TableHead>
            <TableHead>Rol</TableHead>
            <TableHead className="text-right">Optiuni</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{user.username}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell className="text-right">
                <Button variant="outline" size="sm">
                  <Link
                    href={{
                      pathname: "/admin/edit-user",
                      query: {
                        id: user.id,
                        username: user.username,
                        role: user.role,
                      },
                    }}
                  >
                    Editeaza
                  </Link>
                </Button>
                <DeleteUserForm id={user.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Admin;
