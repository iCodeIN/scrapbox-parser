/* global describe it expect */

import { BlockComponentType, convertToBlockComponents } from '../../src/block/BlockComponent'
import { BlockType } from '../../src/block'
import { convertToBlocks } from '../../src/parse'

describe('code', () => {
  it('Simple code with backquote', () => {
    const input = '`Simple code`'
    const blockComponents: Array<BlockComponentType> = convertToBlockComponents(input)
    const blocks: Array<BlockType> = convertToBlocks(blockComponents)
    expect(blocks).toEqual([
      {
        indent: 0,
        type: 'line',
        nodes: [
          {
            type: 'code',
            text: 'Simple code'
          }
        ]
      }
    ])
  })

  it('Simple code with $', () => {
    const input = '$ Simple code'
    const blockComponents: Array<BlockComponentType> = convertToBlockComponents(input)
    const blocks: Array<BlockType> = convertToBlocks(blockComponents)
    expect(blocks).toEqual([
      {
        indent: 0,
        type: 'line',
        nodes: [
          {
            type: 'code',
            text: '$ Simple code'
          }
        ]
      }
    ])
  })

  it('Empty code with backquote', () => {
    const input = '``'
    const blockComponents: Array<BlockComponentType> = convertToBlockComponents(input)
    const blocks: Array<BlockType> = convertToBlocks(blockComponents)
    expect(blocks).toEqual([
      {
        indent: 0,
        type: 'line',
        nodes: [
          {
            type: 'code',
            text: ''
          }
        ]
      }
    ])
  })

  it('`$` is not code', () => {
    const input = '$'
    const blockComponents: Array<BlockComponentType> = convertToBlockComponents(input)
    const blocks: Array<BlockType> = convertToBlocks(blockComponents)
    expect(blocks).toEqual([
      {
        indent: 0,
        type: 'line',
        nodes: [
          {
            type: 'plain',
            text: '$'
          }
        ]
      }
    ])
  })

  it('`$ ` is not code', () => {
    const input = '$ '
    const blockComponents: Array<BlockComponentType> = convertToBlockComponents(input)
    const blocks: Array<BlockType> = convertToBlocks(blockComponents)
    expect(blocks).toEqual([
      {
        indent: 0,
        type: 'line',
        nodes: [
          {
            type: 'plain',
            text: '$ '
          }
        ]
      }
    ])
  })

  it('`$s` is not code', () => {
    const input = '$not code'
    const blockComponents: Array<BlockComponentType> = convertToBlockComponents(input)
    const blocks: Array<BlockType> = convertToBlocks(blockComponents)
    expect(blocks).toEqual([
      {
        indent: 0,
        type: 'line',
        nodes: [
          {
            type: 'plain',
            text: '$not code'
          }
        ]
      }
    ])
  })

  it('Bulleted code with backquote', () => {
    const input = ' `Bulleted code`'
    const blockComponents: Array<BlockComponentType> = convertToBlockComponents(input)
    const blocks: Array<BlockType> = convertToBlocks(blockComponents)
    expect(blocks).toEqual([
      {
        indent: 1,
        type: 'line',
        nodes: [
          {
            type: 'code',
            text: 'Bulleted code'
          }
        ]
      }
    ])
  })

  it('Bulleted code with $', () => {
    const input = ' $ Bulleted code'
    const blockComponents: Array<BlockComponentType> = convertToBlockComponents(input)
    const blocks: Array<BlockType> = convertToBlocks(blockComponents)
    expect(blocks).toEqual([
      {
        indent: 1,
        type: 'line',
        nodes: [
          {
            type: 'code',
            text: '$ Bulleted code'
          }
        ]
      }
    ])
  })
})