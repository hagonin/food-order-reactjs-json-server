import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ListGroup } from 'reactstrap';

import { cartUiActions } from '../../store/shopping-cart/cartUiSlice';
import CartItem from './CartItem';
import '../../globalstyles/shopping-cart.css';

export default function Cart() {
	const dispatch = useDispatch();
	const cartProducts = useSelector((state) => state.cart.cartItems);
	console.log('card product', cartProducts);
	const totalAmount = useSelector((state) => state.cart.totalAmount);

	const toggleCart = () => {
		dispatch(cartUiActions.toggle());
	};
	return (
		<div className="cart__container">
			<ListGroup className="cart">
				<div className="cart__close">
					<span onClick={toggleCart}>
						<i className="ri-close-fill"></i>
					</span>
				</div>

				<div className="cart__item-list">
					{cartProducts.length === 0 ? (
						<h6 className="text-center mt-5">No item added to the cart</h6>
					) : (
						cartProducts.map((item, index) => (
							<CartItem item={item} key={index} />
						))
					)}
				</div>

				<div className="cart__bottom d-flex align-items-center justify-content-between">
					<h6>
						Subtotal : <span>£{totalAmount}.00</span>
					</h6>
					<button>
						<Link to="/checkout" onClick={toggleCart}>
							Checkout
						</Link>
					</button>
				</div>
			</ListGroup>
		</div>
	);
}

