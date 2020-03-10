const initialState = {
	products: []
};

const ProductReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_PRODUCT':
			return {
				products: state.products.concat([ action.product ])
			};
		case 'DELETE_PRODUCT':
			return {
				products: state.products.filter((p) => p.id !== action.id)
			};
		case 'EDIT_PRODUCT':
			return {
				products: state.products.filter((p) => p.id === action.id)
			};
		case 'UPDATE_PRODUCT':
			var products = state.products.map((p) => {
				if (p.id === action.product.id) {
					console.log('ddddd' + JSON.stringify(action.product));
					return {
						...p,
						name: action.product.name,
						price: action.product.price
					};
				} else {
					return p;
				}
			});

			// var editedValue = state.products.map((p, index) => {
			// 	if (p.id === action.product.id) {
			// 		console.log('Matched ' + JSON.stringify(action.product));
			// 		return {
			// 			...p,
			// 			name: action.product.name,
			// 			price: action.product.price
			// 		};
			// 	} else {
			// 		return p;
			// 	}
			// });
			// console.log('GFGF' + JSON.stringify(editedValue));

			return {
				//products: state.products.splice(state.products.id, action.product.id, action.product)
				products: products
			};

		default:
			return state;
	}
};

export default ProductReducer;
