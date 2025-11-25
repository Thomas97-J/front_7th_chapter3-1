import type { Meta, StoryObj } from "@storybook/react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import { Badge } from "./badge";
import { Button } from "./button";

const meta = {
  title: "UI/Organisms/Table",
  component: Table,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const WithCaption: Story = {
  render: () => (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>INV002</TableCell>
          <TableCell>Pending</TableCell>
          <TableCell>$150.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const UserManagement: Story = {
  render: () => (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[60px]">ID</TableHead>
            <TableHead>사용자명</TableHead>
            <TableHead>이메일</TableHead>
            <TableHead className="w-[100px]">역할</TableHead>
            <TableHead className="w-[100px]">상태</TableHead>
            <TableHead className="w-[120px]">생성일</TableHead>
            <TableHead className="w-[150px]">관리</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>testuser</TableCell>
            <TableCell>test@example.com</TableCell>
            <TableCell>
              <Badge variant="destructive">관리자</Badge>
            </TableCell>
            <TableCell>
              <Badge variant="success">활성</Badge>
            </TableCell>
            <TableCell>2024-01-15</TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  수정
                </Button>
                <Button size="sm" variant="destructive">
                  삭제
                </Button>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>john</TableCell>
            <TableCell>john@example.com</TableCell>
            <TableCell>
              <Badge>사용자</Badge>
            </TableCell>
            <TableCell>
              <Badge variant="success">활성</Badge>
            </TableCell>
            <TableCell>2024-01-14</TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  수정
                </Button>
                <Button size="sm" variant="destructive">
                  삭제
                </Button>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>3</TableCell>
            <TableCell>jane</TableCell>
            <TableCell>jane@example.com</TableCell>
            <TableCell>
              <Badge variant="warning">운영자</Badge>
            </TableCell>
            <TableCell>
              <Badge variant="warning">비활성</Badge>
            </TableCell>
            <TableCell>2024-01-10</TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  수정
                </Button>
                <Button size="sm" variant="destructive">
                  삭제
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
};

export const PostManagement: Story = {
  render: () => (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[60px]">ID</TableHead>
            <TableHead>제목</TableHead>
            <TableHead className="w-[100px]">작성자</TableHead>
            <TableHead className="w-[120px]">카테고리</TableHead>
            <TableHead className="w-[100px]">상태</TableHead>
            <TableHead className="w-20">조회수</TableHead>
            <TableHead className="w-[200px]">관리</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>리액트 시작하기</TableCell>
            <TableCell>John</TableCell>
            <TableCell>
              <Badge variant="outline">Development</Badge>
            </TableCell>
            <TableCell>
              <Badge variant="success">게시됨</Badge>
            </TableCell>
            <TableCell>1,234</TableCell>
            <TableCell>
              <div className="flex gap-2 flex-wrap">
                <Button size="sm" variant="outline">
                  수정
                </Button>
                <Button size="sm" variant="secondary">
                  보관
                </Button>
                <Button size="sm" variant="destructive">
                  삭제
                </Button>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>디자인 시스템 구축</TableCell>
            <TableCell>Jane</TableCell>
            <TableCell>
              <Badge variant="outline">Design</Badge>
            </TableCell>
            <TableCell>
              <Badge variant="warning">임시저장</Badge>
            </TableCell>
            <TableCell>0</TableCell>
            <TableCell>
              <div className="flex gap-2 flex-wrap">
                <Button size="sm" variant="outline">
                  수정
                </Button>
                <Button size="sm" variant="default">
                  게시
                </Button>
                <Button size="sm" variant="destructive">
                  삭제
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
};

export const EmptyTable: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell colSpan={3} className="h-24 text-center">
            No results found.
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const WithAlignment: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead className="text-center">Quantity</TableHead>
          <TableHead className="text-right">Price</TableHead>
          <TableHead className="text-right">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Widget A</TableCell>
          <TableCell className="text-center">5</TableCell>
          <TableCell className="text-right">$10.00</TableCell>
          <TableCell className="text-right font-semibold">$50.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Widget B</TableCell>
          <TableCell className="text-center">3</TableCell>
          <TableCell className="text-right">$15.00</TableCell>
          <TableCell className="text-right font-semibold">$45.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={3} className="text-right font-semibold">
            Grand Total:
          </TableCell>
          <TableCell className="text-right font-bold">$95.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};
