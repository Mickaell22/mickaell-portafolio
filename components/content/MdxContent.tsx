"use client"

import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote"

interface MdxContentProps {
  source: MDXRemoteSerializeResult
}

export function MdxContent({ source }: MdxContentProps) {
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-foreground prose-a:underline-offset-4 prose-code:rounded prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:before:content-none prose-code:after:content-none prose-pre:bg-muted prose-pre:border prose-pre:border-border">
      <MDXRemote {...source} />
    </div>
  )
}
