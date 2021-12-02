import React from 'react';
import './Compiling.css'

export default class DynamicTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      items: []
    }
  }

  updateMessage(event) {
    this.setState({
      message: event.target.value
    });
  }

  handleClick() {
    var items = this.state.items;

    items.push(this.state.message);

    this.setState({
      items: items,
      message: ""
    });
  }

  handleItemChanged(i, event) {
    var items = this.state.items;
    items[i]  = event.target.value;

    this.setState({
      items: items
    });
  }

  handleItemDeleted(i) {
    var items = this.state.items;

    items.splice(i, 1);

    this.setState({
      items: items
    });
  }

  renderRows() {
    var context = this;

    return  this.state.items.map(function(o, i) {
              return (
                <tr key={"item-" + i}>              
                  <td>
                        <select size="1" id="row-1-code">
                            <option value=" ">
                             ChooseCode
                            </option>
                            <option value="New York ">
                             456313
                            </option>
                            <option value="New York">
                                265353365
                            </option>
                            <option value="San Francisco">
                                S45465
                            </option>
                            <option value="Tokyo">
                                T53483
                            </option>
                            <option value="London">
                             456313
                            </option>
                            <option value="New York">
                                265353365
                            </option>
                            <option value="San Francisco">
                                S45465
                            </option>
                            <option value="Tokyo">
                                T53483
                            </option>
                            <option value="London">
                             456313
                            </option>
                            <option value="New York">
                                265353365
                            </option>
                            <option value="San Francisco">
                              S45465
                            </option>
                            <option value="Tokyo">
                              T53483
                            </option>
                        </select>
                    </td>
                    <td><input type="Text"id="row-1-drug" /></td>
                    <td><input type="Text" id="row-1-quantity" /></td>
                    <td><input type="Text"id="row-1-price" /></td>
                    <td id="row-1-total">456313</td>
                    <td>
                  </td>
                  <td>
                    <button className="button2"
                      onClick={context.handleItemDeleted.bind(context, i)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            });
  }

  render() {
    return (
      <div className="left">
        <table >
          <thead>
            <tr>
                <th className="number">Code</th>
                <th className="text">Drug Issued</th>
                <th className="number">Quantity</th>
                <th className="number">Tag Price</th>
                <th className="total">Total</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
        <hr/>
        <div className="buttons">
            <button className="button1"
            onClick={this.handleClick.bind(this)}
            >
            Add Prescription
            </button>
            <button className="button3"
            onClick={this.handleClick.bind(this)}
            >
            Grand Total
            </button>
        </div>
      </div>
    );
  }
}