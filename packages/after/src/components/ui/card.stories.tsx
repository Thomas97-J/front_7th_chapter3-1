import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Button } from "./button";
import { Label } from "./label";
import { Input } from "./input";

const meta = {
  title: "UI/Organisms/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card has a footer with actions.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  ),
};

export const LoginForm: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Enter your credentials to access your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="email@example.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Sign in</Button>
      </CardFooter>
    </Card>
  ),
};

export const UserProfile: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>John Doe</CardTitle>
        <CardDescription>john.doe@example.com</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex justify-between">
          <span className="text-sm text-muted-foreground">Role:</span>
          <span className="text-sm font-medium">관리자</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-muted-foreground">Status:</span>
          <span className="text-sm font-medium">활성</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-muted-foreground">Joined:</span>
          <span className="text-sm font-medium">2024-01-01</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Edit Profile
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const Statistics: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">
            Total Users
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,234</div>
          <p className="text-xs text-muted-foreground">
            +20% from last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">
            Active Posts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">567</div>
          <p className="text-xs text-muted-foreground">
            +15% from last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">
            Total Views
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">45.2K</div>
          <p className="text-xs text-muted-foreground">
            +35% from last month
          </p>
        </CardContent>
      </Card>
    </div>
  ),
};

export const ContentOnly: Story = {
  render: () => (
    <Card className="w-[300px]">
      <CardContent className="pt-6">
        <p className="text-center">
          This card only has content, no header or footer.
        </p>
      </CardContent>
    </Card>
  ),
};

export const StatCards: Story = {
  render: () => (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      <Card variant="stat" statColor="blue" rounded="xl">
        <p className="text-sm text-gray-600 mb-1">전체</p>
        <p className="text-3xl font-bold text-blue-600">4</p>
      </Card>

      <Card variant="stat" statColor="green" rounded="xl">
        <p className="text-sm text-gray-600 mb-1">게시됨</p>
        <p className="text-3xl font-bold text-green-600">1</p>
      </Card>

      <Card variant="stat" statColor="orange" rounded="xl">
        <p className="text-sm text-gray-600 mb-1">임시저장</p>
        <p className="text-3xl font-bold text-orange-600">2</p>
      </Card>

      <Card variant="stat" statColor="red" rounded="xl">
        <p className="text-sm text-gray-600 mb-1">보관됨</p>
        <p className="text-3xl font-bold text-red-600">1</p>
      </Card>

      <Card variant="stat" statColor="gray" rounded="xl">
        <p className="text-sm text-gray-600 mb-1">총 조회수</p>
        <p className="text-3xl font-bold text-gray-700">3340</p>
      </Card>
    </div>
  ),
};

export const StatCardsUser: Story = {
  render: () => (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      <Card variant="stat" statColor="blue" rounded="xl">
        <p className="text-sm text-gray-600 mb-1">전체</p>
        <p className="text-3xl font-bold text-blue-600">10</p>
      </Card>

      <Card variant="stat" statColor="green" rounded="xl">
        <p className="text-sm text-gray-600 mb-1">활성</p>
        <p className="text-3xl font-bold text-green-600">8</p>
      </Card>

      <Card variant="stat" statColor="orange" rounded="xl">
        <p className="text-sm text-gray-600 mb-1">비활성</p>
        <p className="text-3xl font-bold text-orange-600">1</p>
      </Card>

      <Card variant="stat" statColor="red" rounded="xl">
        <p className="text-sm text-gray-600 mb-1">정지</p>
        <p className="text-3xl font-bold text-red-600">1</p>
      </Card>

      <Card variant="stat" statColor="gray" rounded="xl">
        <p className="text-sm text-gray-600 mb-1">관리자</p>
        <p className="text-3xl font-bold text-gray-700">2</p>
      </Card>
    </div>
  ),
};

export const ComplexLayout: Story = {
  render: () => (
    <Card className="w-[500px]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Project Settings</CardTitle>
            <CardDescription>Manage your project configuration</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            Reset
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="project-name">Project Name</Label>
          <Input id="project-name" defaultValue="My Project" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Input id="description" placeholder="Enter description" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost">Cancel</Button>
        <div className="space-x-2">
          <Button variant="outline">Save Draft</Button>
          <Button>Publish</Button>
        </div>
      </CardFooter>
    </Card>
  ),
};

export const RoundedVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card rounded="none" className="p-6">
          <p className="text-sm font-medium mb-2">rounded: none</p>
          <p className="text-xs text-muted-foreground">No border radius</p>
        </Card>

        <Card rounded="sm" className="p-6">
          <p className="text-sm font-medium mb-2">rounded: sm</p>
          <p className="text-xs text-muted-foreground">2px radius</p>
        </Card>

        <Card rounded="md" className="p-6">
          <p className="text-sm font-medium mb-2">rounded: md</p>
          <p className="text-xs text-muted-foreground">6px radius</p>
        </Card>

        <Card rounded="lg" className="p-6">
          <p className="text-sm font-medium mb-2">rounded: lg</p>
          <p className="text-xs text-muted-foreground">8px radius</p>
        </Card>

        <Card rounded="xl" className="p-6">
          <p className="text-sm font-medium mb-2">rounded: xl</p>
          <p className="text-xs text-muted-foreground">12px radius</p>
        </Card>

        <Card rounded="2xl" className="p-6">
          <p className="text-sm font-medium mb-2">rounded: 2xl</p>
          <p className="text-xs text-muted-foreground">16px radius</p>
        </Card>

        <Card rounded="3xl" className="p-6">
          <p className="text-sm font-medium mb-2">rounded: 3xl</p>
          <p className="text-xs text-muted-foreground">24px radius</p>
        </Card>

        <Card rounded="full" className="p-6 aspect-square flex items-center justify-center">
          <p className="text-sm font-medium text-center">rounded: full</p>
        </Card>
      </div>
    </div>
  ),
};
