import type { User } from "@/services/userService";
import type { Post } from "@/services/postService";

export type EntityType = "user" | "post";
export type Entity = User | Post;

export type BadgeVariant = "success" | "warning" | "destructive" | "secondary" | "info" | "default" | "outline";

export type StatColor = "blue" | "green" | "orange" | "red" | "gray";

export interface Stat {
  label: string;
  value: number;
  color: StatColor;
  textColor: string;
}

export interface AlertState {
  show: boolean;
  message: string;
  variant: "success" | "destructive";
}
