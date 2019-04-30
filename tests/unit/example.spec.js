import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Exchange from '@/components/Exchange.vue'
import Home from '@/views/Home.vue'

describe('Exchange.vue', () => {
  let wrapper

  beforeEach(function () {
    wrapper = shallowMount(Exchange)
  })

  it('Is called Exchange', () => {
    expect(wrapper.name()).to.equal('Exchange')
  })

  it('Message is well implemented', () => {
    const message = wrapper.find('h3').text()
    expect(message).to.equal('Currency Converter')
  })

  it('check if conversion works', () => {
    wrapper.setData({ amount: '1' })
    expect(wrapper.vm.finalamount).to.equal(0.14184)
  })
  it('Currencies acronyms with 3 letters', () => {
    expect(wrapper.vm.conFrom).to.have.lengthOf(3)
    expect(wrapper.vm.conTo).to.have.lengthOf(3)
  })
})
describe('Home.vue', () => {
  let wrapper = shallowMount(Home)
  it('Image loaded', () => {
    expect(wrapper.find('img').exists())
  })
})
