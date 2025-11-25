import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./textarea";
import { Label } from "./label";

const meta = {
  title: "UI/Atoms/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
    },
    rows: {
      control: "number",
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Type your message here.",
  },
};

export const WithValue: Story = {
  args: {
    value: "This is a sample text in the textarea.",
    placeholder: "Type your message here.",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "This textarea is disabled",
  },
};

export const WithRows: Story = {
  args: {
    rows: 10,
    placeholder: "Tall textarea with 10 rows",
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-[400px] space-y-2">
      <Label htmlFor="message">Message</Label>
      <Textarea
        id="message"
        placeholder="Type your message here."
        rows={4}
      />
    </div>
  ),
};

export const WithLabelAndHelper: Story = {
  render: () => (
    <div className="w-[400px] space-y-2">
      <Label htmlFor="bio">Bio</Label>
      <Textarea
        id="bio"
        placeholder="Tell us about yourself"
        rows={5}
      />
      <p className="text-sm text-muted-foreground">
        Your bio will be displayed on your public profile.
      </p>
    </div>
  ),
};

export const CommentForm: Story = {
  render: () => (
    <div className="w-[500px] space-y-4">
      <div className="space-y-2">
        <Label htmlFor="comment">Leave a comment</Label>
        <Textarea
          id="comment"
          placeholder="Share your thoughts..."
          rows={4}
        />
      </div>
      <div className="flex justify-end">
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
          Post Comment
        </button>
      </div>
    </div>
  ),
};
