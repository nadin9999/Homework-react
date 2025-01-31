import LoginModal from './LoginModal'
import './Modal.css'

const Modal = ({ onClose }) => {
    return (
        <div className='modalBlock'>
            <div className="Modal">
                <p className='heading' >Войдите в свой аккаунт</p>
                <button onClick={onClose} className='OnCloseButton'>✕</button>
                <input type="name" className="input" placeholder="Введите имя" />
                <input type="password" className="input" placeholder="Введите пароль" />
                <button type='submit' className='ModalButton'>Авторизоваться</button>
                <LoginModal />
            </div>
        </div>
    )
}
export default Modal