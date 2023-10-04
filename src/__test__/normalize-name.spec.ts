import { it, expect } from 'vitest'
import { get_capitalizeInitialName } from '../utils/normalize-name'

it('get capitalizeInitialName', () => {
    const name = 'player'
    const capitalizeInitialName = get_capitalizeInitialName(name)
    expect(capitalizeInitialName).toBe('Player')
})
