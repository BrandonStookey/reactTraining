/* eslint-env mocha */

const { expect } = require('chai')
const React = require('react')
const Search = require('../js/Search')
const ShowCard = require('../js/ShowCard')
const { shallow, mount } = require('enzyme')
const { shows } = require('../public/data')
//This is arbitrary, you can call it whaterver it is just a footnote for you
describe('<Search />', () => {
  it('should render the brand', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.contains(<h1 className='brand'>Stookey's Video</h1>)).to.be.true
  })

  it('should render as many shows as there are data for', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.find(ShowCard).length).to.equal(shows.length)
  })

  it('should filter correctly given new state', () => {
    const wrapper = mount(<Search />)
    const input = wrapper.find('.search-input')
    input.node.value = 'house'
    input.simulate('change')
    expect(wrapper.state('searchTerm')).to.equal('house')
    expect(wrapper.find('.show-card').length).to.equal(2)
  })
})
