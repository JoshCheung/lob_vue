import { mount, shallowMount } from '@vue/test-utils'
import PostcardForm from '@/components/PostcardForm.vue'
import AddressListDropDown from '@/components/AddressListDropDown'
import AddressRow from '@/components/AddressRow';

describe('PostcardForm.vue', () => {
  test('Testing input box for "to"', async () => {
    const input = "Adriana"
    // Arrange 
    const wrapper = mount(PostcardForm)

    // Act
    const toInputbox = wrapper.find('#to').element.value = input;

    // Assert
    expect(wrapper.find('#to').element.value).toBe('Adriana');
  });

  test('Check dropdown flag', async () => {
    const wrapper = shallowMount(PostcardForm, {
      data() {
        return {
          showRecipientInputDropDown: true,
        }
      }
    });

  
    const dropdown =  wrapper.findComponent(AddressListDropDown);
    expect(dropdown.exists()).toBeTruthy();
    wrapper.setData({ showRecipientInputDropDown: false })
    await wrapper.vm.$forceUpdate();
    expect(wrapper.findComponent(AddressListDropDown).exists()).toBeFalsy();
  });

  test('Test filter function when in "To" input changes', async () => {
    const wrapper = shallowMount(PostcardForm);
    const searchItem = "Adriana"
    wrapper.setData({ search: searchItem });
    const mockFilterMethod = jest.spyOn(PostcardForm.methods, 'filterAddress')
    const input =  shallowMount(PostcardForm).find('#to');
    input.element.value = searchItem
    input.trigger('change')
    expect(mockFilterMethod).toHaveBeenCalled();
  });

  test('check selected address component exists when address is selected', async () => {
    const wrapper = shallowMount(PostcardForm, {
      data() {
        return {
          selectedAddress: {id: "adr_justiceLeaugue", name: 'Bruce Wayne', address_line1: '123 Harley Way', address_line2: '', address_city: "Gotham", address_state: "BM", address_zip: "34791"},
        }
      }
    });
    const selectedAddress = wrapper.findComponent(AddressRow);
    expect(selectedAddress.exists()).toBeTruthy();
    wrapper.setData({ selectedAddress: null })
    await wrapper.vm.$forceUpdate();
    expect(wrapper.findComponent(AddressListDropDown).exists()).toBeFalsy();
  });

  test('Alert appears when error is thrown from getting addresses or invalid API Key', async () => {
    const wrapper = shallowMount(PostcardForm, {
      data() {
        return {
          hasGetAddressError: true,
          errorMessage: "Error Message"        
        }
      }
    });

    const hasError = wrapper.find('alert');
    expect(hasError.exists()).toBeTruthy();

    const eMessage = wrapper.find('alert').text();
    expect(eMessage).toBe("Error Message");

    wrapper.setData({ hasGetAddressError: false })
    await wrapper.vm.$forceUpdate();
    expect(wrapper.find('alert').exists()).toBeFalsy();
  })
})
