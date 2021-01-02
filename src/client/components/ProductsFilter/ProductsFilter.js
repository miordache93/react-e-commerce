import React, { useState } from 'react'
import styles from './ProductsFilter.css';
import Select from 'react-select';

const options = [
    { value: 'usd', label: 'USD ' },
    { value: 'eur', label: 'EUR' },
    { value: 'ron', label: 'RON' },
];

function ProductsFilter() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = selectedOption => {
        // setSelectedOption({ selectedOption });
        console.log(selectedOption);
    };

    return (
        <div className={styles.productsFilter}>
            <p>Filters</p>
            {/* <p>{ selectedOption }</p> */}
            <Select
                value={selectedOption}
                onChange={handleChange}
                options={options}
            />
        </div>
    )
}

export default ProductsFilter
