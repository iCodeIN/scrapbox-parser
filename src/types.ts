export type PathType = 'absolute' | 'relative' | 'root'
export type DecorationType = '*-1' | '*-2' | '*-3' | '*-4' | '*-5' | '*-6' | '*-7' | '*-8' | '*-9' | '!' | '"' | '#' | '%' | '&' | '\'' | '(' | ')' | '*' | '+' | ',' | '-' | '.' | '/' | '{' | '|' | '}' | '<' | '>' | '_' | '~'
export type NodeType = PlainNodeType | ImageNodeType | LinkNodeType | DecorationNodeType | StrongNodeType | CodeNodeType | CodeBlockNodeType | IconNodeType | QuoteNodeType | TableNodeType

export type PlainNodeType = {
  type: 'plain'
  text: string
}

export type ImageNodeType = {
  type: 'image'
  src: string
  link: string
 }

export type LinkNodeType = {
  type:'link'
  pathType: PathType
  href: string
  content: string
}

export type DecorationNodeType = {
  type: 'decoration'
  deco: Array<DecorationType>
  nodes: Array<NodeType>
}

export type StrongNodeType = {
  type: 'strong'
  nodes: Array<NodeType>
}

export type CodeNodeType = {
  type: 'code'
  text: string
}

export type CodeBlockNodeType = {
  type: 'codeBlock'
  fileName: string
  content: string
}
export type IconNodeType = {
  type: 'icon'
  pathType: PathType
  path: string
}

export type QuoteNodeType = {
  type: 'quote'
  nodes: Array<NodeType>
}

export type TableNodeType = {
  type: 'table'
  fileName: string
  cells: Array<Array<string>>
 }

export type _LineType = {
  indent: number
  text: string
}

export type LineType = {
  indent: number
  nodes: Array<NodeType>
}

export type PageType = {
  title: string
  lines: Array<LineType>
}