import React, { Component } from 'react';
import Car from './Car/Car.js';
import './App.css';

class App extends Component {
  
  state = {
    cars: [
      {name: 'Mazda',  god: 2020, prise: '388 879 $',  link: 'https://www.mazda.ru/',  img: 'https://1gai.ru/images15/Mazda.png'},
      {name: 'Nissan', god: 2018, prise: '376 839 $',  link: 'https://www.nissan.ru/', img: 'https://1gai.ru/images15/Nissan.png'},
      {name: 'Лада',   god: 2010, prise: '38 889 $',   link: 'https://www.lada.ru/',   img: 'https://1gai.ru/images15/Lada.png'}, 
      {name: 'BMW',    god: 2019, prise: '38 889 $',   link: 'https://www.bmw.ru/',    img: 'https://1gai.ru/images15/BMW.png'},
      {name: 'Audi',   god: 2017, prise: '4 000 000$', link: 'https://www.audi.ru/',   img: 'https://1gai.ru/Audi.png'},          
    ],
    titleCar: '',
    godCar: '',
    countLike: 0,
    countBy: 0,
    pageT0: 'МАШИНЫ',
    pageT: 'МАШИНЫ',
    pagT2_0: 'Онлайн магазин',
    pagT2: 'Онлайн магазин'
  }
  
  clickT2hend = () => {
    console.log('Заказано');
    let id = this.state.countBy + 1;
    let newT2 = this.state.pagT2_0 + ' (покупка ' + id + ')';
    this.setState({
      countBy: id,
      pagT2: newT2
    });
  }

  clickLikeHend = () => {
    console.log('Нравится');
    
    let k = this.state.countLike + 1;
    let t = this.state.pageT0 + ' (+' + k + ')';

    this.setState({
      countLike: k,
      pageT: t
    });
  }

  clickAboutCar(newTitle) {
    this.setState({
      titleCar: newTitle  
    });
  }
  
  clickGodCar(newt) {
    this.setState({
      godCar: newt
    })
  }

  render() {
    const divStyle = {
      color: 'blue'
    }

    const cars = this.state.cars;
    
    return (
      <div className="App">
        <h1>{this.state.pageT}</h1>
        <h2>{this.state.pagT2}</h2>

        <h1>{this.state.titleCar}</h1>
        <h2>{this.state.godCar}</h2>

        <button onClick={this.clickT2hend}>Купить</button>

        <button onClick={this.clickLikeHend}>Like</button>

        <p></p>

        {/*
          <Car name={cars[0].name} god={cars[0].god} prise={cars[0].prise} link={cars[0].link} img={cars[0].img} />
          <Car name={cars[1].name} god={cars[1].god} prise={cars[1].prise} link={cars[1].link} img={cars[1].img} />
          <Car name={cars[2].name} god={cars[2].god} prise={cars[2].prise} link={cars[2].link} img={cars[2].img} />
          <Car name={cars[3].name} god={cars[3].god} prise={cars[3].prise} link={cars[3].link} img={cars[3].img} />
        */}

        {
          cars.map( (val, i) => {
            return <Car
              name={val.name}
              god={val.god}
              prise={val.prise}
              link={val.link}
              img={val.img}
              onChengeT={this.clickAboutCar.bind(this, val.name)}
              onChengeG={this.clickGodCar.bind(this, val.god)}
            />
          })
        }
      </div>
    );
  }
}

export default App;
