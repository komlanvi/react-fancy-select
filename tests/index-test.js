import React from "react";
import { mount, shallow } from "enzyme";
import { expect } from "chai";

import FancySelect from "src/";

const testData = [
  {
    id: 0,
    value: "Apple",
    text: "Apple"
  },
  {
    id: 1,
    value: "Orange",
    text: "Orange"
  },
  {
    id: 2,
    value: "Pear",
    text: "Pear"
  }
];

describe("<FancySelect />", () => {
  it("should render a select element", () => {
    const wrapper = shallow(<FancySelect items={testData} />);
    expect(wrapper.find("select")).to.have.length(1);
  });

  it("should render an unordered list element", () => {
    const wrapper = shallow(<FancySelect items={testData} />);
    expect(wrapper.find("ul")).to.have.length(1);
  });

  it("should render an unordered list element with list items", () => {
    const wrapper = shallow(<FancySelect items={testData} />);
    expect(wrapper.find("ul").children()).to.have.length(testData.length);
  });

  it("should have the items prop defined", () => {
    const wrapper = shallow(<FancySelect items={testData} />);
    expect(wrapper.props().items).to.be.defined;
  });

  it("should show the placeholder text from props", () => {
    const placeholder = "Placeholder test...";
    const wrapper = mount(
      <FancySelect items={testData} placeholder={placeholder} />
    );
    expect(wrapper.props().placeholder).to.equal(placeholder);
    expect(wrapper.find(".FancySelect__Control > span").text()).to.equal(
      placeholder
    );
  });

  it("should have the item selected from the defaultValue prop", () => {
    const defaultValue = "Pear";
    const wrapper = mount(
      <FancySelect items={testData} defaultValue={defaultValue} />
    );
    expect(wrapper.props().defaultValue).to.equal(defaultValue);
    expect(wrapper.find(".FancySelect__Control > span").text()).to.equal(
      defaultValue
    );
    expect(wrapper.state().selectedItem.value).to.equal(defaultValue);
  });

  it("should open the dropdown list on toggleList()", () => {
    const wrapper = mount(<FancySelect items={testData} />);
    wrapper.instance().toggleList();
    expect(wrapper.state().isOpen).to.equal(true);
  });

  it("should select an item on item click", () => {
    const wrapper = mount(<FancySelect items={testData} />);
    wrapper
      .find(".FancySelect__ListItem")
      .first()
      .simulate("click");
    expect(wrapper.state().selectedItem).to.equal(testData[0]);
  });
});
