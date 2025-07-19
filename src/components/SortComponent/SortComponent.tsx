import { useEffect, useState } from "react";
import { SortFrameContainer, SortSelect, SortTitle } from "./SortComponentStyles"
import { setSortedProducts } from "../../reducers/productsReducer";
import { useDispatch } from "react-redux";

const categories = ['Name', 'Recently Added'];

const SortComponent = () => {

    const [category, setCategory] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSortedProducts(category));
    }, [category, dispatch]);

    return (
        <SortFrameContainer>
            <SortTitle>Sort by</SortTitle>

            <SortSelect value={category} onChange={(e) => setCategory(e.target.value)} >
                <option value='All' >All</option>
                {categories.map(category => {
                    return <option key={category} value={category}>{category}</option>
                })}
            </SortSelect>


        </SortFrameContainer>
    )
}

export default SortComponent