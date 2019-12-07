import React, { Component } from 'react';
import './App.css';
import Item from './Item/Item.js'

class App extends Component {
  state = {
    items : [
      { itemName: 'Shirt', cost: 1200, id: 'ret12',number: 0},
      { itemName: 'Watch', cost: 5600, id: 'mghj56',number: 0},
      { itemName: 'Shoes', cost: 7500, id: 'dfhgf56',number: 0},
      { itemName: 'Jeans', cost: 3400, id: 'kcsn34',number: 0},
      { itemName: 'Phone', cost: 17000, id: 'bjng98',number: 0}
    ],
    showItems: false,
    totalCost: 0,
    totalItems: 0,
   
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showItems;
    this.setState({showItems: !doesShow});
 }
 incrCostHandler = (itemCost,itemNumber,index) => {
   let Totalcost = this.state.totalCost + itemCost;
   let Totalitems = this.state.totalItems + 1;
   itemNumber = itemNumber + 1;
   this.state.items[index].number = itemNumber ;
   this.setState({totalCost: Totalcost, totalItems: Totalitems})
 }

 decrCostHandler = (itemCost,itemNumber,index) => {
   if(this.state.items[index].number==0){
     return;
   }
   let Totalcost = this.state.totalCost - itemCost;
   let Totalitems = this.state.totalItems - 1;
   itemNumber = itemNumber - 1;
   this.state.items[index].number = itemNumber;
   this.setState({totalCost: Totalcost, totalItems: Totalitems})
 }
  render() {
    const style = {
      backgroundColor: 'white',
      font:'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let items = null;
    if(this.state.showItems){
      items = (
        <div>
          {this.state.items.map((item,index) => {
            return <Item
            name={item.itemName} 
            cost={item.cost}
            number={item.number}
            key={item.id}
            clicked1={() => this.incrCostHandler(item.cost,item.number,index)}
            clicked2={() => this.decrCostHandler(item.cost,item.number,index)} />
          })}
          
        </div> 

      );
    }
    return (
      <div className="App">
        <h1 className="Heading">Shopping Cart</h1>
        <h3 className="red">Total items : {this.state.totalItems} </h3>
        <h3 className="red">Total cost : {this.state.totalCost}</h3>
        <button style={style} onClick={this.togglePersonsHandler}>Click Me</button>
        {items}

      </div>
    );
  }
}

export default App;
