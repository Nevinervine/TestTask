import React from 'react';
import InputElement from 'react-input-mask';
import '../style/validation.css';


class Validation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      Lastname: '',
      phone: '',
      validName: { valid: false, error: '' },
      validPhone: { valid: false, error: '' },
      validLastname: { valid: false, error: '' },
    };

    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChangePhone(event) {
    this.setState({ phone: event.target.value });
    var regular = /^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/;
    if (regular.test(event.target.value)) {
      this.setState({ validPhone: { valid: true, error: '' } });
    } else {
      this.setState({ validPhone: { valid: false, error: 'введите полный номер телефона' } });
    }
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });

    if (event.target.value.length < 2) {
      this.setState({ validName: { valid: false, error: 'имя должно быть больше 2х символов' } });
    } else {
      this.setState({ validName: { valid: true, error: '' } });
    }
  }

  handleChangeLastName(event) {
    this.setState({ Lastname: event.target.value });
    if (event.target.value.length < 2) {
      this.setState({ validLastname: { valid: false, error: 'фамилия должна быть больше 2х символов' } });
    } else {
      this.setState({ validLastname: { valid: true, error: '' } });
    }
  }

  handleSubmit(event) {
    if (this.state.validName['valid'] == true) {
      if (this.state.validPhone['valid'] == true) {
        if (this.state.validLastname['valid'] == true) {
          alert('ваши данные приянты');
        }
      }
    }
    event.preventDefault();
  }


  render() {
    let result;

    result = (
      <form onSubmit={this.handleSubmit}>
        <div className='form__input'>
          <InputElement className="form-control" mask="+7 (999) 999-99-99" onChange={this.handleChangePhone} placeholder="Phone" ref="phone" />
          <p className='form__error'>{this.state.validPhone['error']}</p>
        </div>

        <div className='form__input'>
          <input type="text" placeholder='Name' value={this.state.name} onChange={this.handleChangeName} />
          <p className='form__error'>{this.state.validName['error']}</p>
        </div>

        <div className='form__input'>
          <input type="text" placeholder='Last Name' value={this.state.Lastname} onChange={this.handleChangeLastName} />
          <p className='form__error'>{this.state.validLastname['error']}</p>
        </div>
      
        <input className='test-btn btn-form' type="submit" value="submit"    disabled={this.state.validLastname['valid'] !== true || this.state.validName['valid'] !== true || this.state.validPhone['valid'] !== true ? true : false  } />
      </form>
    );


    return (
      <div>
        {result}
      </div>
    );
  }
}

export default Validation;

