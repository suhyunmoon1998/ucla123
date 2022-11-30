import { useState } from "react";


// need another size generator depends on the item type [shoes/shirts/pants]
const size_generator = ( Math.floor(Math.random() * (15 - 7 + 1)) + 7);
    
const price_list = ['$99', '$199','$299','$399','$499','$599','$699','$799','$899','$999','$1099','$1199','$1299','$1399','$1499','$1599','$1699','$1799','$1899', '$1999'];
const price_generator = (Math.floor(Math.random() * (19 - 0 + 1)) + 0);

const condition_list = ['new', 'good', 'used', 'bad'];
const condition_generator = (Math.floor(Math.random() * (3 - 0 + 1)) + 0);

const item_generator = ( Math.floor(Math.random() * (12 - 0 + 1)) + 0)

const Items = () => {
    const [Items] = useState([
      { id:1, title: 'Nike Jordan', size: size_generator(), description: 'shoe', price: price_list[price_generator()], condition: condition_list[condition_generator()], source: '"https://cdn.flightclub.com/750/TEMPLATE/299066/1.jpg"'},
      { id:2, title: 'Nike Jordan', size: size_generator(), description: 'shoe', price: price_list[price_generator()], condition: condition_list[condition_generator()], source: '"https://cdn.flightclub.com/750/TEMPLATE/174400/1.jpg"'},
      { id:3, title: 'Nike Jordan', size: size_generator(), description: 'shoe', price: price_list[price_generator()], condition: condition_list[condition_generator()], source: '"https://cdn.flightclub.com/750/TEMPLATE/336354/1.jpg"'},
      { id:4, title: 'Nike Jordan', size: size_generator(), description: 'shoe', price: price_list[price_generator()], condition: condition_list[condition_generator()], source: '"https://cdn.flightclub.com/750/TEMPLATE/307016/1.jpg"'},
      { id:5, title: 'Nike Jordan', size: size_generator(), description: 'shoe', price: price_list[price_generator()], condition: condition_list[condition_generator()], source: '"https://cdn.flightclub.com/750/TEMPLATE/320361/1.jpg"'},
      { id:6, title: 'Nike Jordan', size: size_generator(), description: 'shoe', price: price_list[price_generator()], condition: condition_list[condition_generator()], source: '"https://cdn.flightclub.com/750/TEMPLATE/315865/1.jpg"'},
      { id:7, title: 'Nike Jordan', size: size_generator(), description: 'shoe', price: price_list[price_generator()], condition: condition_list[condition_generator()], source: '"https://cdn.flightclub.com/750/TEMPLATE/174409/1.jpg"'},
      { id:8, title: 'Nike Jordan', size: size_generator(), description: 'shoe', price: price_list[price_generator()], condition: condition_list[condition_generator()], source: '"https://cdn.flightclub.com/750/TEMPLATE/090135/1.jpg"'},
      { id:9, title: 'Nike Jordan', size: size_generator(), description: 'shoe', price: price_list[price_generator()], condition: condition_list[condition_generator()], source: '"https://cdn.flightclub.com/750/TEMPLATE/322600/1.jpg"'},
      { id:10, title: 'Nike Jordan', size: size_generator(), description: 'shoe', price: price_list[price_generator()], condition: condition_list[condition_generator()], source: '"https://cdn.flightclub.com/750/TEMPLATE/275138/1.jpg"'},
      { id:11, title: 'Nike Jordan', size: size_generator(), description: 'shoe', price: price_list[price_generator()], condition: condition_list[condition_generator()], source: '"https://cdn.flightclub.com/750/TEMPLATE/176533/1.jpg"'},
      { id:12, title: 'Nike Jordan', size: size_generator(), description: 'shoe', price: price_list[price_generator()], condition: condition_list[condition_generator()], source: '"https://cdn.flightclub.com/750/TEMPLATE/323910/1.jpg"'},
    ]);

    return (Items[item_generator]);

  }

  export default Items;














