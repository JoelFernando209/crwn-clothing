import React from 'react';

// import CollectionItem from '../../components/collection-item/collection-item.component';
// import ShopPage from '../shop/shop.component';

import './category.styles.scss';

const CategoryPage = ({ match }) => {
    console.log(match.params.categoryId);
    return(
        <div className='category'>
            <h2>CATEGORY PAGE</h2>
        </div>
    )
}

export default CategoryPage;