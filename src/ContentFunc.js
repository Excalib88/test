import React, { Component } from 'react';
import './main.scss';

export default class ContentFunc extends Component {
  state = { selected: false, hoverOff: false, hover: false };

  handleMouseEnter = () => {
    if (!this.state.hoverOff) {
      this.setState({ hover: true });
    }
  };

  handleMouseLeave = () => {
    this.setState({ hover: false, hoverOff: false });
  };

  handleClick = () => {
    if (this.props.available) {
      this.setState(prevState => ({
        selected: !prevState.selected,
        hover: false,
        hoverOff: true
      }));
    }
  };
  render() {
    const {
      topTitle,
      title,
      eat,
      optionsCount,
      weight,
      optionsGift,
      optionsWeldone,
      description,
      available
    } = this.props;
    const { selected, hover } = this.state;

    return (
        <div>
          <div className={ selected ? 'cat__item selected' : !available ? 'cat__item disabled' : 'cat__item'}>
            <div className="cat__boxed">
              <div className={'cat__box'} onClick={this.handleClick} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <div className="cat_top-desk">
                  <p>
                    {selected && hover ? 'Котэ не одобряет?' : topTitle}
                  </p>
                </div>
                <div className="cat__title">
                  <h2>{title}</h2>
                  <h3>{eat}</h3>
                  <div className="cat__info"><p><span>{optionsCount}</span> порций</p><p>{optionsGift}</p><p>{optionsWeldone}</p></div>
                  <div className="cat__picture"></div>
                  <div className="cat__ellipse">
                    <span className="cat__count">{weight}</span>
                    <p className="cat__kg">кг</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cat__description">
            <CardDescription
                selected={selected}
                available={available}
                description={description}
                taste={eat}
                handleClick={this.handleClick}
            />
          </div>
        </div>

    );
  }
}

const CardDescription = ({
  selected,
  available,
  taste,
  description,
  handleClick
}) =>
  available ? (selected ? (<p>{description}</p>) : (<p>Чего сидишь? Порадуй котэ,
        <span className="cat__link" onClick={handleClick}> купи.</span></p>)) : (<p>Печалька, {taste} закончился.</p>
  );


