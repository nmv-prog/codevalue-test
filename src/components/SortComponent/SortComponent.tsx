import { useEffect, useState } from "react";
import { SortFrameContainer, SortSelect, SortTitle } from "./SortComponentStyles";
import { useProductStore } from "../../store/store";

const categories = ['Name', 'Recently Added'];

const SortComponent = () => {

    const { setSortedProducts } = useProductStore((state) => state);
    const [category, setCategory] = useState('');

    useEffect(() => {
        setSortedProducts(category);
    }, [category, setSortedProducts]);

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