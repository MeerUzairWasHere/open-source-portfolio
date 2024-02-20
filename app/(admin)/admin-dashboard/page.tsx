import { Button } from "@/components/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { FileEditIcon } from "lucide-react";
export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="grid items-center gap-2 md:grid-cols-[200px_1fr]">
        <h1 className="font-semibold text-lg md:text-2xl">Users</h1>
        <Button className="ml-auto w-[100px] md:w-[150px]" size="sm">
          Add new user
        </Button>
      </div>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Avatar</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="w-[100px] text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
              </TableCell>
              <TableCell className="font-semibold">Alice</TableCell>
              <TableCell>alice@example.com</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell className="text-right">
                <Button className="w-6 h-6" size="icon" variant="ghost">
                  <FileEditIcon className="w-4 h-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
              </TableCell>
              <TableCell className="font-semibold">Alice</TableCell>
              <TableCell>alice@example.com</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell className="text-right">
                <Button className="w-6 h-6" size="icon" variant="ghost">
                  <FileEditIcon className="w-4 h-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
              </TableCell>
              <TableCell className="font-semibold">Alice</TableCell>
              <TableCell>alice@example.com</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell className="text-right">
                <Button className="w-6 h-6" size="icon" variant="ghost">
                  <FileEditIcon className="w-4 h-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
              </TableCell>
              <TableCell className="font-semibold">Alice</TableCell>
              <TableCell>alice@example.com</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell className="text-right">
                <Button className="w-6 h-6" size="icon" variant="ghost">
                  <FileEditIcon className="w-4 h-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
              </TableCell>
              <TableCell className="font-semibold">Alice</TableCell>
              <TableCell>alice@example.com</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell className="text-right">
                <Button className="w-6 h-6" size="icon" variant="ghost">
                  <FileEditIcon className="w-4 h-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
              </TableCell>
              <TableCell className="font-semibold">Alice</TableCell>
              <TableCell>alice@example.com</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell className="text-right">
                <Button className="w-6 h-6" size="icon" variant="ghost">
                  <FileEditIcon className="w-4 h-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
              </TableCell>
              <TableCell className="font-semibold">Alice</TableCell>
              <TableCell>alice@example.com</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell className="text-right">
                <Button className="w-6 h-6" size="icon" variant="ghost">
                  <FileEditIcon className="w-4 h-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
              </TableCell>
              <TableCell className="font-semibold">Alice</TableCell>
              <TableCell>alice@example.com</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell className="text-right">
                <Button className="w-6 h-6" size="icon" variant="ghost">
                  <FileEditIcon className="w-4 h-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
              </TableCell>
              <TableCell className="font-semibold">Alice</TableCell>
              <TableCell>alice@example.com</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell className="text-right">
                <Button className="w-6 h-6" size="icon" variant="ghost">
                  <FileEditIcon className="w-4 h-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
              </TableCell>
              <TableCell className="font-semibold">Alice</TableCell>
              <TableCell>alice@example.com</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell className="text-right">
                <Button className="w-6 h-6" size="icon" variant="ghost">
                  <FileEditIcon className="w-4 h-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
              </TableCell>
              <TableCell className="font-semibold">Alice</TableCell>
              <TableCell>alice@example.com</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell className="text-right">
                <Button className="w-6 h-6" size="icon" variant="ghost">
                  <FileEditIcon className="w-4 h-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
              </TableCell>
              <TableCell className="font-semibold">Alice</TableCell>
              <TableCell>alice@example.com</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell className="text-right">
                <Button className="w-6 h-6" size="icon" variant="ghost">
                  <FileEditIcon className="w-4 h-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
              </TableCell>
              <TableCell className="font-semibold">Alice</TableCell>
              <TableCell>alice@example.com</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell className="text-right">
                <Button className="w-6 h-6" size="icon" variant="ghost">
                  <FileEditIcon className="w-4 h-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
              </TableCell>
              <TableCell className="font-semibold">Alice</TableCell>
              <TableCell>alice@example.com</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell className="text-right">
                <Button className="w-6 h-6" size="icon" variant="ghost">
                  <FileEditIcon className="w-4 h-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
              </TableCell>
              <TableCell className="font-semibold">Alice</TableCell>
              <TableCell>alice@example.com</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell className="text-right">
                <Button className="w-6 h-6" size="icon" variant="ghost">
                  <FileEditIcon className="w-4 h-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
              </TableCell>
              <TableCell className="font-semibold">Alice</TableCell>
              <TableCell>alice@example.com</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell className="text-right">
                <Button className="w-6 h-6" size="icon" variant="ghost">
                  <FileEditIcon className="w-4 h-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
              </TableCell>
              <TableCell className="font-semibold">Alice</TableCell>
              <TableCell>alice@example.com</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell className="text-right">
                <Button className="w-6 h-6" size="icon" variant="ghost">
                  <FileEditIcon className="w-4 h-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
              </TableCell>
              <TableCell className="font-semibold">Alice</TableCell>
              <TableCell>alice@example.com</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell className="text-right">
                <Button className="w-6 h-6" size="icon" variant="ghost">
                  <FileEditIcon className="w-4 h-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
              </TableCell>
              <TableCell className="font-semibold">Alice</TableCell>
              <TableCell>alice@example.com</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell className="text-right">
                <Button className="w-6 h-6" size="icon" variant="ghost">
                  <FileEditIcon className="w-4 h-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
              </TableCell>
              <TableCell className="font-semibold">Alice</TableCell>
              <TableCell>alice@example.com</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell className="text-right">
                <Button className="w-6 h-6" size="icon" variant="ghost">
                  <FileEditIcon className="w-4 h-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
              </TableCell>
              <TableCell className="font-semibold">Alice</TableCell>
              <TableCell>alice@example.com</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell className="text-right">
                <Button className="w-6 h-6" size="icon" variant="ghost">
                  <FileEditIcon className="w-4 h-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
              </TableCell>
              <TableCell className="font-semibold">Alice</TableCell>
              <TableCell>alice@example.com</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell className="text-right">
                <Button className="w-6 h-6" size="icon" variant="ghost">
                  <FileEditIcon className="w-4 h-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
              </TableCell>
              <TableCell className="font-semibold">Alice</TableCell>
              <TableCell>alice@example.com</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell className="text-right">
                <Button className="w-6 h-6" size="icon" variant="ghost">
                  <FileEditIcon className="w-4 h-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
              </TableCell>
              <TableCell className="font-semibold">Alice</TableCell>
              <TableCell>alice@example.com</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell className="text-right">
                <Button className="w-6 h-6" size="icon" variant="ghost">
                  <FileEditIcon className="w-4 h-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
              </TableCell>
              <TableCell className="font-semibold">Alice</TableCell>
              <TableCell>alice@example.com</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell className="text-right">
                <Button className="w-6 h-6" size="icon" variant="ghost">
                  <FileEditIcon className="w-4 h-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
              </TableCell>
              <TableCell className="font-semibold">Alice</TableCell>
              <TableCell>alice@example.com</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell className="text-right">
                <Button className="w-6 h-6" size="icon" variant="ghost">
                  <FileEditIcon className="w-4 h-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
              </TableCell>
              <TableCell className="font-semibold">Alice</TableCell>
              <TableCell>alice@example.com</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell className="text-right">
                <Button className="w-6 h-6" size="icon" variant="ghost">
                  <FileEditIcon className="w-4 h-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
              </TableCell>
              <TableCell className="font-semibold">Alice</TableCell>
              <TableCell>alice@example.com</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell className="text-right">
                <Button className="w-6 h-6" size="icon" variant="ghost">
                  <FileEditIcon className="w-4 h-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
              </TableCell>
              <TableCell className="font-semibold">Bob</TableCell>
              <TableCell>bob@example.com</TableCell>
              <TableCell>User</TableCell>
              <TableCell className="text-right">
                <Button className="w-6 h-6" size="icon" variant="ghost">
                  <FileEditIcon className="w-4 h-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
              </TableCell>
              <TableCell className="font-semibold">Charlie</TableCell>
              <TableCell>charlie@example.com</TableCell>
              <TableCell>User</TableCell>
              <TableCell className="text-right">
                <Button className="w-6 h-6" size="icon" variant="ghost">
                  <FileEditIcon className="w-4 h-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
              </TableCell>
              <TableCell className="font-semibold">David</TableCell>
              <TableCell>david@example.com</TableCell>
              <TableCell>User</TableCell>
              <TableCell className="text-right">
                <Button className="w-6 h-6" size="icon" variant="ghost">
                  <FileEditIcon className="w-4 h-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
              </TableCell>
              <TableCell className="font-semibold">Eve</TableCell>
              <TableCell>eve@example.com</TableCell>
              <TableCell>User</TableCell>
              <TableCell className="text-right">
                <Button className="w-6 h-6" size="icon" variant="ghost">
                  <FileEditIcon className="w-4 h-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
