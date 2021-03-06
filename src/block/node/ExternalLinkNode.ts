import { createNodeParser } from './creator'

import type { LinkNode } from './type'
import type { NodeCreator } from './creator'

const hrefFirstUrlRegExp = /\[https?:\/\/[^\s\]]+(?:\s+[^\]]*[^\s])?\]/
const contentFirstUrlRegExp = /\[[^\]]*[^\s]\s+https?:\/\/[^\s\]]+\]/
const httpRegExp = /(?<=^| )https?:\/\/[^\s\]]+/

const createExternalLinkNode: NodeCreator<LinkNode> = raw => {
  const inner = raw.startsWith('[') && raw.endsWith(']') ? raw.substring(1, raw.length - 1) : raw

  const isHrefFirst = /^https?:\/\/[^\s\]]/.test(inner)
  const match = (isHrefFirst ? /^https?:\/\/[^\s\]]+/ : /https?:\/\/[^\s\]]+$/).exec(inner)
  if (match === null) {
    return []
  }

  const c = isHrefFirst ? inner.substring(match[0].length) : inner.substring(0, match.index - 1)

  return {
    type: 'link',
    raw,
    pathType: 'absolute',
    href: match[0],
    content: c.trim()
  }
}

export const ExternalLinkNodeParser = createNodeParser(createExternalLinkNode, {
  parseOnNested: true,
  parseOnQuoted: true,
  patterns: [hrefFirstUrlRegExp, contentFirstUrlRegExp, httpRegExp]
})
