import { INIT_CODE_HASH_SWAPS, SWAP_NAME } from '../src/constants'
import fs from 'fs'
import path from 'path'
import { keccak256 } from '@ethersproject/solidity'

const bytecode = fs.readFileSync(path.join(__dirname, './bytecode'), 'utf8')

// this _could_ go in constants, except that it would cost every consumer of the sdk the CPU to compute the hash
// and load the JSON.
const COMPUTED_INIT_CODE_HASH = keccak256(['bytes'], [`0x${bytecode}`])

describe('constants', () => {
  describe('INIT_CODE_HASH', () => {
    it('matches computed bytecode hash', () => {
      expect(COMPUTED_INIT_CODE_HASH).toEqual(INIT_CODE_HASH_SWAPS[SWAP_NAME.pancakeswap])
    })
  })
})
