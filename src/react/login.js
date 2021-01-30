import React from 'react';
import '../style/login.css';

class NameForm extends React.Component {
  constructor(props) {
    super(props);

    if (localStorage.getItem("login") != null) {
      if (localStorage.getItem("login")) {
        this.state = {
          password: this.props.password,
          login: this.props.login,
          valuepassword: '',
          valuelogin: '',
          showmodal: false,
        };
      }
    } else {
      this.state = {
        password: this.props.password,
          login: this.props.login,
        valuepassword: '',
        valuelogin: '',
        showmodal: true,
      };
    }
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangePassword(event) {
    this.setState({ valuePassword: event.target.value });
  }
  handleChangeLogin(event) {
    this.setState({ valuelogin: event.target.value });
  }

  handleSubmit(event) {

    if (this.state.valuelogin === this.props.login) {
      if (this.state.valuePassword === this.props.password) {
        localStorage.setItem('login', true);
        this.setState({ showmodal: false });
      } else {
        alert('неверный пароль')
      }
    } else {
      alert('неверный логин')
    }
    event.preventDefault();
  }

  render() {
    let result;
    if (this.state.showmodal) {
      result = (
        <div>
          <a href="#openModal" class="login__button test-btn">LOGIN</a>
          <div id="openModal" class="modal">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <a href="#close" title="Close" class="close">×</a>
                </div>
                <div class="modal-body">
                  <form onSubmit={this.handleSubmit}>
                    <div className='modal__input'>
                      <label>
                        <p>логин:</p>
                        <input type="text" placeholder='login' value={this.state.valuelogin} onChange={this.handleChangeLogin} />
                      </label>
                    </div>
                    <div className='modal__input'>
                      <label>
                        <p> пароль:</p>
                        <input type="text" placeholder='123' value={this.state.valuePassword} onChange={this.handleChangePassword} />
                      </label>
                    </div>
                    <div className="modal__button-container">
                      <input className="test-btn btn-form" type="submit" value="Отправить" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        {result}
      </div>

    );
  }
}

export default NameForm;

