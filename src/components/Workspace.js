import React, {Component} from 'react';
import DndCard from './DndCard';
import update from 'immutability-helper'
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

class Workspace extends Component {

  constructor(props) {
    super(props)
    this.moveCard = this
      .moveCard
      .bind(this)
    this.state = {
      cards: [
        {
          id: 1,
          text: 1
        }, {
          id: 2,
          text: 2
        }, {
          id: 3,
          text: 3
        }, {
          id: 4,
          text: 4
        }, {
          id: 5,
          text: 5
        }
      ]
    }
  }

  render() {
    const {cards} = this.state
    return (
      <div>
        {cards.map((card, i) => (
          <DndCard
            key={card.id}
            id={card.id}
            index={i}
            moveCard={this.moveCard}
            zDepth={1}
            text={card.text}></DndCard>
        ))}
      </div>
    )
  }

  moveCard(dragIndex, hoverIndex) {
    const {cards} = this.state
    const dragCard = cards[dragIndex]
    console.log("Before:")
    console.log(cards)
    this.setState(update(this.state, {
      cards: {
        $splice: [
          [
            dragIndex, 1
          ],
          [hoverIndex, 0, dragCard]
        ]
      }
    }),)
    console.log("after:")
    console.log(cards)
  }
}



function withDragDropContext(component){
  if (module.hot) {
    if(!window.context){
      window.context = DragDropContext(HTML5Backend)
    }
    return window.context(component)
  }else{
    return DragDropContext(HTML5Backend)
  }


}

export default withDragDropContext(Workspace)
