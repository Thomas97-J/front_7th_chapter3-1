import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox";
import { Label } from "./label";

const meta = {
  title: "UI/Atoms/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
    },
    checked: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms1" />
      <Label htmlFor="terms1">Accept terms and conditions</Label>
    </div>
  ),
};

export const WithLongLabel: Story = {
  render: () => (
    <div className="flex items-start space-x-2 max-w-sm">
      <Checkbox id="terms2" className="mt-1" />
      <Label htmlFor="terms2" className="font-normal leading-relaxed">
        I agree to the terms and conditions and privacy policy. By checking
        this box, I consent to receive marketing communications.
      </Label>
    </div>
  ),
};

export const MultipleCheckboxes: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <Checkbox id="option1" />
        <Label htmlFor="option1">Option 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option2" />
        <Label htmlFor="option2">Option 2</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option3" />
        <Label htmlFor="option3">Option 3</Label>
      </div>
    </div>
  ),
};

export const CheckboxGroup: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-semibold mb-2">Select your interests</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="interest1" />
            <Label htmlFor="interest1">Development</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="interest2" />
            <Label htmlFor="interest2">Design</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="interest3" />
            <Label htmlFor="interest3">Marketing</Label>
          </div>
        </div>
      </div>
    </div>
  ),
};
