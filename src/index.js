import React, { Component } from "react";
import PropTypes from "prop-types";
import find from "lodash/find";

class FancySelect extends Component {
  constructor(props) {
    super(props);

    this.selectWrapper = React.createRef();
    this.menuList = React.createRef();
    this.currentListItem = null;

    const { defaultValue } = this.props;

    this.state = {
      selectedItem:
        (defaultValue &&
          find(this.props.items, i => i.value === defaultValue)) ||
        "",
      isOpen: false,
      items: this.props.items || [],
      focusedItem: 0
    };

    [
      "handleSelectChange",
      "handleSelectItem",
      "handleKeyDown",
      "handleClose",
      "toggleList"
    ].forEach(fn => (this[fn] = this[fn].bind(this)));
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClose);
  }

  componentWillUnmount() {
    document.addEventListener("mousedown", this.handleClose);
  }

  componentDidUpdate() {
    if (this.currentListItem && this.menuList) {
      const { offsetTop, clientHeight } = this.currentListItem;
      const scrollPosition =
        offsetTop + clientHeight - this.menuList.current.offsetHeight;

      this.menuList.current.scrollTop = scrollPosition;
    }
  }

  handleSelectChange(e) {
    const { value } = e.target;
    const { items } = this.state;

    const selectedItem = find(items, item => item.value === value);

    this.handleSelectItem(selectedItem);
  }

  handleSelectItem(item, focusedItem = 0) {
    if (!item) return;

    this.setState(
      {
        selectedItem: item,
        isOpen: false,
        focusedItem
      },
      () => {
        this.props.onSelection && this.props.onSelection(item);
      }
    );
  }

  handleKeyDown(e) {
    const { keyCode } = e;
    const { isOpen, items, focusedItem } = this.state;

    switch (keyCode) {
      case 13:
        e.preventDefault();
        e.stopPropagation();
        if (!isOpen) return;

        this.currentListItem.click();
        return;
      case 38:
        if (focusedItem === 0) return;

        this.setState(prevState => ({
          focusedItem: prevState.focusedItem - 1
        }));
        return;
      case 40:
        if (focusedItem === items.length - 1) return;
        if (!isOpen) this.toggleList();

        this.setState(prevState => ({
          focusedItem: prevState.focusedItem + 1
        }));
        return;
      default:
        return;
    }
  }

  handleClose(e) {
    const { isOpen } = this.state;

    if (
      this.selectWrapper &&
      !this.selectWrapper.current.contains(e.target) &&
      isOpen
    ) {
      this.toggleList(true);
    }
  }

  toggleList(close = false) {
    this.setState({
      isOpen: close ? false : true
    });
  }

  render() {
    const { items, isOpen, selectedItem, focusedItem } = this.state;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const { useNative, placeholder, name } = this.props;

    return (
      <div
        className="FancySelect"
        tabIndex={0}
        onKeyDown={this.handleKeyDown}
        ref={this.selectWrapper}
      >
        <div
          className="FancySelect__Control"
          onClick={() => {
            this.setState({ isOpen: isMobile && useNative ? false : true });
          }}
        >
          <span>{(selectedItem && selectedItem.text) || placeholder}</span>

          <select
            style={{
              visibility: isMobile && useNative ? "visible" : "hidden"
            }}
            onChange={this.handleSelectChange}
            value={selectedItem ? selectedItem.value : ""}
            name={name}
          >
            {items &&
              items.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.text}
                </option>
              ))}
          </select>
        </div>

        <div className="FancySelect__ListWrapper">
          <ul
            className="FancySelect__List"
            style={{ display: isOpen ? "block" : "none" }}
            ref={this.menuList}
          >
            {items &&
              items.map((item, index) => (
                <li
                  key={index}
                  onClick={() => this.handleSelectItem(item, index)}
                  className={[
                    "FancySelect__ListItem",
                    focusedItem === index
                      ? "FancySelect__ListItem--focused"
                      : ""
                  ].join(" ")}
                  ref={ref =>
                    focusedItem === index ? (this.currentListItem = ref) : null
                  }
                >
                  {item.text}
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

FancySelect.defaultProps = {
  useNative: true,
  placeholder: "Please select...",
  name: null
};

FancySelect.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ),
  onSelection: PropTypes.func,
  useNative: PropTypes.bool,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  defaultValue: PropTypes.string
};

export default FancySelect;
export { FancySelect };
