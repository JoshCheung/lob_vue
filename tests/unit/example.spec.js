import { shallowMount } from '@vue/test-utils'
import PostcardForm from '@/components/PostcardForm.vue'

describe('PostcardForm.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(PostcardForm, {
      props: { 
        addresses: [],
        filtered: [],
        search: '',
        showRecipientInputDropDown: true,
        selectedAddress: null,
        submitted: false, 
        hasGetAddressError: false,
        errorMessage: "" 
      }
    })
    console.log(wrapper);
    expect(wrapper.text()).toMatch(msg)
  })
})
