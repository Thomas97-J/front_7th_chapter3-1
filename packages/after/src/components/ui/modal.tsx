import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const modalOverlayVariants = cva(
  "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity",
  {
    variants: {
      open: {
        true: "opacity-100",
        false: "opacity-0 pointer-events-none",
      },
    },
    defaultVariants: {
      open: false,
    },
  }
)

const modalContentVariants = cva(
  "fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-background shadow-lg transition-all border",
  {
    variants: {
      size: {
        sm: "w-full max-w-sm",
        default: "w-full max-w-lg",
        lg: "w-full max-w-2xl",
        xl: "w-full max-w-4xl",
        full: "w-[calc(100%-2rem)] h-[calc(100%-2rem)]",
      },
      open: {
        true: "opacity-100 scale-100",
        false: "opacity-0 scale-95 pointer-events-none",
      },
    },
    defaultVariants: {
      size: "default",
      open: false,
    },
  }
)

interface ModalProps extends VariantProps<typeof modalContentVariants> {
  open: boolean
  onClose: () => void
  children: React.ReactNode
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
}

function Modal({
  open,
  onClose,
  children,
  size,
  closeOnOverlayClick = true,
  closeOnEscape = true,
}: ModalProps) {
  React.useEffect(() => {
    if (!closeOnEscape) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [open, onClose, closeOnEscape])

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      <div
        className={cn(modalOverlayVariants({ open }))}
        onClick={closeOnOverlayClick ? onClose : undefined}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        className={cn(modalContentVariants({ size, open }))}
      >
        {children}
      </div>
    </>
  )
}

function ModalHeader({
  className,
  children,
  onClose,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { onClose?: () => void }) {
  return (
    <div
      className={cn(
        "flex items-center justify-between border-b px-6 py-4",
        className
      )}
      {...props}
    >
      <div className="flex-1">{children}</div>
      {onClose && (
        <button
          onClick={onClose}
          className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <X className="size-4" />
          <span className="sr-only">Close</span>
        </button>
      )}
    </div>
  )
}

function ModalTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn("text-lg font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  )
}

function ModalBody({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("px-6 py-4", className)} {...props} />
  )
}

function ModalFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-end gap-2 border-t px-6 py-4",
        className
      )}
      {...props}
    />
  )
}

export { Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter }
