import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import BrandIntro from '../BrandIntro.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(BrandIntro, { props: { msg: 'AshWig, Ltd.' } })
    expect(wrapper.text()).toContain('AshWig, Ltd.')
  })
})
