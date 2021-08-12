import { mount, shallowMount } from '@vue/test-utils'
import PostcardForm from '@/components/PostcardForm.vue'
import AddressListDropDown from '@/components/AddressListDropDown'
import AddressRow from '@/components/AddressRow';

import LobComponents from '@lob/ui-components';  

describe('PostcardForm.vue', () => {
  test('Testing input box for "to"', async () => {
    const searchItem = "Adriana"
    
    // Arrange 
    const wrapper = mount(PostcardForm, {
      components: {
        AddressListDropDown,
        AddressRow
      },
      global: {
        plugins: [LobComponents]
      }
    })

    // Act
    const input = wrapper.find('#to');
    input.element.value = searchItem
    input.trigger('change')

    // Assert
    expect(wrapper.find('#to').element.value).toBe('Adriana');
  });

  test('Check dropdown flag', async () => {
    // Arrange 
    const wrapper = mount(PostcardForm, {
      data() {
        return {
          showRecipientInputDropDown: true,
        }
      },
      global: {
        plugins: [LobComponents]
      },
      components: {
        AddressListDropDown
      }
    });

    // Act
    const dropdown = wrapper.findComponent(AddressListDropDown);

    // Assert
    expect(dropdown.exists()).toBeTruthy();
    // Act
    wrapper.setData({ showRecipientInputDropDown: false })
    await wrapper.vm.$forceUpdate();
    // Assert
    expect(wrapper.findComponent(AddressListDropDown).exists()).toBeFalsy();
  });

  test('Test filter function when in "To" input changes', async () => {
   
    // Arrange 
    const mockFilterMethod = jest.spyOn(PostcardForm.methods, 'filterAddress')
    const wrapper = mount(PostcardForm, {
      data() {
        return {
          
        }
      },
      components: {
        AddressRow
      },
      global: {
        plugins: [LobComponents]
      },
    });
    
    
    // Act
    const searchItem = "Adriana"
    const input = wrapper.find('#to');
    input.element.value = searchItem;
    input.trigger('input');

    await wrapper.vm.$forceUpdate();

    // Assert
    expect(mockFilterMethod).toHaveBeenCalled();
  });

  test('check selected address component exists when address is selected', async () => {
    // Arrange 
    const wrapper = mount(PostcardForm, {
      data() {
        return {
          selectedAddress: {id: "adr_justiceLeaugue", name: 'Bruce Wayne', address_line1: '123 Harley Way', address_line2: '', address_city: "Gotham", address_state: "BM", address_zip: "34791"},
        }
      },
      global: {
        plugins: [LobComponents]
      },
      components: {
        AddressRow
      }
    });
    // Act
    const selectedAddress = wrapper.findComponent(AddressRow);

    // Assert
    expect(selectedAddress.exists()).toBeTruthy();

    // Act
    wrapper.setData({ selectedAddress: null })
    await wrapper.vm.$forceUpdate();

    // Assert
    expect(wrapper.findComponent(AddressListDropDown).exists()).toBeFalsy();
  });

  test('Alert appears when error is thrown from getting addresses or invalid API Key', async () => {
    // Arrange
    const wrapper = mount(PostcardForm, {
      data() {
        return {
          hasGetAddressError: true,
          errorMessage: "Error Message"        
        }
      },
      global: {
        plugins: [LobComponents]
      },
    });

    // Act
    const hasError = wrapper.find('#alert');
    
    // Assert
    expect(hasError.exists()).toBeTruthy();

    // Act
    const eMessage = wrapper.find('#alert').text();
    
    // Assert
    expect(eMessage).toBe("Error Message");

    // Act
    wrapper.setData({ hasGetAddressError: false })
    await wrapper.vm.$forceUpdate();
    // Assert
    expect(wrapper.find('#alert').exists()).toBeFalsy();
  })

  test('Testing cancel button in selected Address', async () => {
    // Arrange 
    const wrapper = mount(PostcardForm, {
      data() {
        return {
          selectedAddress: {id: "adr_justiceLeaugue", name: 'Bruce Wayne', address_line1: '123 Harley Way', address_line2: '', address_city: "Gotham", address_state: "BM", address_zip: "34791"},
        }
      },
      components: {
        AddressRow
      },
      global: {
        plugins: [LobComponents]
      },
    });
    // Act
    const selectedAddress = wrapper.findComponent(AddressRow);

    // Assert
    expect(selectedAddress.exists()).toBeTruthy();

    // Act
    const cancelButton = wrapper.findComponent(AddressRow).find('button');
    await cancelButton.trigger('click');

    // Assert
    expect(wrapper.findComponent(AddressRow).exists()).toBeFalsy();

    // Act
    wrapper.setData({ selectedAddress: null })
    await wrapper.vm.$forceUpdate();

    // Assert
    expect(wrapper.findComponent(AddressListDropDown).exists()).toBeFalsy();
  });

})
